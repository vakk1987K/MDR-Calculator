/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type LanguageCode = 'en' | 'te' | 'hi' | 'mr' | 'bn' | 'ta';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
  region: string;
  speechCode: string;
  greeting: string;
  flag: string;
}

export type PaymentMode = 
  | 'upi_standard'
  | 'upi_ppi'
  | 'rupay_cc'
  | 'debit_card'
  | 'credit_card'
  | 'custom';

export type MerchantCategory = 
  | 'retail'
  | 'supermarket'
  | 'fuel'
  | 'education_govt'
  | 'restaurant'
  | 'ecommerce';

export interface CalculationResult {
  amount: number;
  mode: PaymentMode;
  category: MerchantCategory;
  mdrRate: number; // percentage e.g. 1.1
  flatFee: number; // in rupees
  mdrAmount: number;
  gstRate: number; // e.g. 18%
  gstAmount: number;
  totalDeduction: number;
  netPayout: number;
  effectiveRate: number; // (totalDeduction / amount) * 100
  isZeroMdr: boolean;
  thresholdNote?: string;
  ruleExplanation?: string;
}

export interface ModeComparisonItem {
  mode: PaymentMode;
  label: string;
  mdrRate: number;
  mdrAmount: number;
  gstAmount: number;
  totalDeduction: number;
  netPayout: number;
  effectiveRate: number;
  isZeroMdr: boolean;
  isOptimal: boolean;
}

export interface VolumeSimulationResult {
  monthlyTurnover: number;
  averageTicketSize: number;
  estimatedTransactionsCount: number;
  mix: {
    upi_standard: number; // percentage e.g. 70
    upi_ppi: number;      // percentage e.g. 10
    rupay_cc: number;     // percentage e.g. 15
    cards: number;        // percentage e.g. 5
  };
  soundboxRentalFee: number;
  grossVolume: number;
  totalMdrFee: number;
  totalGst: number;
  totalPaymentFee: number;
  netSettledToBank: number;
  netAfterSoundbox: number;
  blendedEffectiveRate: number; // without soundbox
  totalEffectiveCostRate: number; // with soundbox
  annualDeductionProjection: number;
  gstInputCreditEligible: number;
}

export interface SavedCalculation {
  id: string;
  date: string;
  title: string;
  amount: number;
  mode: PaymentMode;
  category: MerchantCategory;
  netPayout: number;
  totalDeduction: number;
  effectiveRate: number;
}
