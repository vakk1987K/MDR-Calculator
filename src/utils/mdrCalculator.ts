/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  CalculationResult,
  MerchantCategory,
  ModeComparisonItem,
  PaymentMode,
  VolumeSimulationResult,
} from '../types';

/**
 * Format currency in Indian numbering system (e.g. ₹1,50,000.00)
 */
export function formatINR(val: number, includeDecimals = true): string {
  if (isNaN(val) || val === null || val === undefined) return '₹0';
  
  const absVal = Math.abs(val);
  const formatted = absVal.toLocaleString('en-IN', {
    maximumFractionDigits: includeDecimals ? 2 : 0,
    minimumFractionDigits: includeDecimals ? (absVal % 1 === 0 ? 0 : 2) : 0,
  });

  return (val < 0 ? '-₹' : '₹') + formatted;
}

/**
 * Get category-specific PPI interchange rate for transactions > ₹2,000
 */
export function getCategoryPpiRate(category: MerchantCategory): number {
  switch (category) {
    case 'supermarket':
      return 0.90;
    case 'fuel':
    case 'education_govt':
      return 0.50;
    case 'retail':
    case 'restaurant':
    case 'ecommerce':
    default:
      return 1.10;
  }
}

/**
 * Calculate single transaction breakdown
 */
export function calculateSingleTransaction(
  amount: number,
  mode: PaymentMode,
  category: MerchantCategory = 'retail',
  customRate = 1.5,
  flatFee = 0
): CalculationResult {
  const cleanAmount = Math.max(0, Number(amount) || 0);
  const gstRate = 18; // Standard 18% GST on financial services

  let mdrRate = 0;
  let appliedFlatFee = 0;
  let isZeroMdr = false;
  let thresholdNote: string | undefined = undefined;
  let ruleExplanation: string | undefined = undefined;

  switch (mode) {
    case 'upi_standard':
      mdrRate = 0;
      appliedFlatFee = 0;
      isZeroMdr = true;
      thresholdNote = 'Zero MDR Mandate (Govt of India)';
      ruleExplanation = 'Normal bank-to-bank UPI transfers have 0% MDR with no deductions.';
      break;

    case 'upi_ppi':
      if (cleanAmount <= 2000) {
        mdrRate = 0;
        appliedFlatFee = 0;
        isZeroMdr = true;
        thresholdNote = 'Free under ₹2,000 NPCI threshold';
        ruleExplanation = 'PPI wallet transactions under ₹2,000 attract 0% interchange fee.';
      } else {
        mdrRate = getCategoryPpiRate(category);
        appliedFlatFee = 0;
        isZeroMdr = false;
        thresholdNote = `Exceeds ₹2,000 limit (${mdrRate}% interchange)`;
        ruleExplanation = `NPCI circular April 2023 mandates ${mdrRate}% interchange for this merchant category on wallet payments above ₹2,000.`;
      }
      break;

    case 'rupay_cc':
      if (cleanAmount <= 2000) {
        mdrRate = 0;
        appliedFlatFee = 0;
        isZeroMdr = true;
        thresholdNote = 'Free under ₹2,000 threshold';
        ruleExplanation = 'RuPay credit card payments on UPI up to ₹2,000 have 0% MDR for small merchants.';
      } else {
        mdrRate = 1.99; // Typical acquiring MDR for RuPay CC on UPI
        appliedFlatFee = 0;
        isZeroMdr = false;
        thresholdNote = 'Exceeds ₹2,000 (1.99% standard rate)';
        ruleExplanation = 'RuPay CC transactions above ₹2,000 attract standard credit card interchange and aggregator margin (~1.99%).';
      }
      break;

    case 'debit_card':
      if (cleanAmount <= 2000) {
        mdrRate = 0.40;
        thresholdNote = 'RBI Capped rate: 0.40%';
      } else {
        mdrRate = 0.90;
        thresholdNote = 'RBI Capped rate: 0.90%';
      }
      appliedFlatFee = 0;
      isZeroMdr = false;
      ruleExplanation = 'Debit card transactions are capped at 0.40% (under ₹2k) and 0.90% (above ₹2k) as per RBI guidelines.';
      break;

    case 'credit_card':
      mdrRate = 1.90;
      appliedFlatFee = 0;
      isZeroMdr = false;
      thresholdNote = 'Standard card fee ~1.90%';
      ruleExplanation = 'Regular Visa/Mastercard credit cards incur standard aggregator MDR (~1.90% + GST).';
      break;

    case 'custom':
      mdrRate = Math.max(0, Number(customRate) || 0);
      appliedFlatFee = Math.max(0, Number(flatFee) || 0);
      isZeroMdr = mdrRate === 0 && appliedFlatFee === 0;
      thresholdNote = `Custom: ${mdrRate}% + ₹${appliedFlatFee}`;
      ruleExplanation = 'Custom negotiated merchant pricing with payment aggregator or POS provider.';
      break;
  }

  // Calculate base MDR
  let mdrAmount = (cleanAmount * (mdrRate / 100)) + appliedFlatFee;

  // Debit card caps (RBI max fee caps)
  if (mode === 'debit_card') {
    if (cleanAmount <= 2000 && mdrAmount > 100) {
      mdrAmount = 100;
    } else if (cleanAmount > 2000 && mdrAmount > 1000) {
      mdrAmount = 1000;
    }
  }

  // Calculate GST (18% on MDR amount)
  const gstAmount = isZeroMdr ? 0 : mdrAmount * (gstRate / 100);
  const totalDeduction = isZeroMdr ? 0 : mdrAmount + gstAmount;
  const netPayout = Math.max(0, cleanAmount - totalDeduction);
  const effectiveRate = cleanAmount > 0 ? (totalDeduction / cleanAmount) * 100 : 0;

  return {
    amount: cleanAmount,
    mode,
    category,
    mdrRate,
    flatFee: appliedFlatFee,
    mdrAmount: Number(mdrAmount.toFixed(2)),
    gstRate,
    gstAmount: Number(gstAmount.toFixed(2)),
    totalDeduction: Number(totalDeduction.toFixed(2)),
    netPayout: Number(netPayout.toFixed(2)),
    effectiveRate: Number(effectiveRate.toFixed(2)),
    isZeroMdr,
    thresholdNote,
    ruleExplanation,
  };
}

/**
 * Generate side-by-side mode comparisons for the exact amount
 */
export function compareAllModes(
  amount: number,
  category: MerchantCategory = 'retail',
  customRate = 1.5,
  flatFee = 0
): ModeComparisonItem[] {
  const modes: { mode: PaymentMode; label: string }[] = [
    { mode: 'upi_standard', label: 'Standard UPI (Bank)' },
    { mode: 'upi_ppi', label: 'UPI Wallets (PPI)' },
    { mode: 'rupay_cc', label: 'RuPay Credit Card on UPI' },
    { mode: 'debit_card', label: 'Debit Card (POS / QR)' },
    { mode: 'credit_card', label: 'Credit Card (Visa/MC)' },
  ];

  const results = modes.map(({ mode, label }) => {
    const res = calculateSingleTransaction(amount, mode, category, customRate, flatFee);
    return {
      mode,
      label,
      mdrRate: res.mdrRate,
      mdrAmount: res.mdrAmount,
      gstAmount: res.gstAmount,
      totalDeduction: res.totalDeduction,
      netPayout: res.netPayout,
      effectiveRate: res.effectiveRate,
      isZeroMdr: res.isZeroMdr,
      isOptimal: res.totalDeduction === 0,
    };
  });

  return results;
}

/**
 * Monthly Business Volume & Mix Simulator
 */
export function simulateMonthlyVolume(
  monthlyTurnover: number,
  averageTicketSize: number,
  mix: {
    upi_standard: number;
    upi_ppi: number;
    rupay_cc: number;
    cards: number;
  },
  soundboxRentalFee = 125,
  category: MerchantCategory = 'retail'
): VolumeSimulationResult {
  const gross = Math.max(0, Number(monthlyTurnover) || 0);
  const avgTicket = Math.max(1, Number(averageTicketSize) || 500);
  const soundbox = Math.max(0, Number(soundboxRentalFee) || 0);
  const estimatedCount = Math.round(gross / avgTicket);

  // Normalize mix to 100% if needed
  const totalMix = mix.upi_standard + mix.upi_ppi + mix.rupay_cc + mix.cards;
  const scale = totalMix > 0 ? 100 / totalMix : 1;

  const standardVol = gross * ((mix.upi_standard * scale) / 100);
  const ppiVol = gross * ((mix.upi_ppi * scale) / 100);
  const rupayVol = gross * ((mix.rupay_cc * scale) / 100);
  const cardsVol = gross * ((mix.cards * scale) / 100);

  // 1. Standard UPI: 0% MDR
  const standardMdr = 0;

  // 2. PPI Wallets: depends on ticket size
  // If avgTicket <= 2000, 0% MDR. If > 2000, category rate
  const ppiRate = avgTicket <= 2000 ? 0 : getCategoryPpiRate(category);
  const ppiMdr = ppiVol * (ppiRate / 100);

  // 3. RuPay CC: If avgTicket <= 2000, 0% MDR. If > 2000, 1.99%
  const rupayRate = avgTicket <= 2000 ? 0 : 1.99;
  const rupayMdr = rupayVol * (rupayRate / 100);

  // 4. Cards: blended average ~1.5%
  const cardsMdr = cardsVol * (1.50 / 100);

  const totalMdrFee = standardMdr + ppiMdr + rupayMdr + cardsMdr;
  const totalGst = totalMdrFee * 0.18;
  const totalPaymentFee = totalMdrFee + totalGst;

  const netSettledToBank = Math.max(0, gross - totalPaymentFee);
  const netAfterSoundbox = Math.max(0, netSettledToBank - soundbox);

  const blendedEffectiveRate = gross > 0 ? (totalPaymentFee / gross) * 100 : 0;
  const totalEffectiveCostRate = gross > 0 ? ((totalPaymentFee + soundbox) / gross) * 100 : 0;
  const annualDeductionProjection = (totalPaymentFee + soundbox) * 12;
  const gstInputCreditEligible = totalGst * 12;

  return {
    monthlyTurnover: gross,
    averageTicketSize: avgTicket,
    estimatedTransactionsCount: estimatedCount,
    mix: {
      upi_standard: Math.round(mix.upi_standard * scale),
      upi_ppi: Math.round(mix.upi_ppi * scale),
      rupay_cc: Math.round(mix.rupay_cc * scale),
      cards: Math.round(mix.cards * scale),
    },
    soundboxRentalFee: soundbox,
    grossVolume: gross,
    totalMdrFee: Number(totalMdrFee.toFixed(2)),
    totalGst: Number(totalGst.toFixed(2)),
    totalPaymentFee: Number(totalPaymentFee.toFixed(2)),
    netSettledToBank: Number(netSettledToBank.toFixed(2)),
    netAfterSoundbox: Number(netAfterSoundbox.toFixed(2)),
    blendedEffectiveRate: Number(blendedEffectiveRate.toFixed(2)),
    totalEffectiveCostRate: Number(totalEffectiveCostRate.toFixed(2)),
    annualDeductionProjection: Number(annualDeductionProjection.toFixed(2)),
    gstInputCreditEligible: Number(gstInputCreditEligible.toFixed(2)),
  };
}
