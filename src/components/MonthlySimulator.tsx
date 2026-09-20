import React, { useState } from 'react';
import { 
  Building2, 
  Volume2, 
  PieChart, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Receipt, 
  HelpCircle,
  AlertTriangle 
} from 'lucide-react';
import { TranslationSchema } from '../i18n/translations';
import { MerchantCategory, VolumeSimulationResult } from '../types';
import { formatINR, simulateMonthlyVolume } from '../utils/mdrCalculator';

interface MonthlySimulatorProps {
  t: TranslationSchema;
}

export const MonthlySimulator: React.FC<MonthlySimulatorProps> = ({ t }) => {
  const [monthlyTurnover, setMonthlyTurnover] = useState<number>(300000);
  const [avgTicketSize, setAvgTicketSize] = useState<number>(450);
  const [soundboxRental, setSoundboxRental] = useState<number>(125);
  const [category, setCategory] = useState<MerchantCategory>('retail');

  // Mix percentages
  const [mixUpiStandard, setMixUpiStandard] = useState<number>(75);
  const [mixUpiPpi, setMixUpiPpi] = useState<number>(10);
  const [mixRupayCc, setMixRupayCc] = useState<number>(10);
  const [mixCards, setMixCards] = useState<number>(5);

  // Quick preset profiles
  const applyPreset = (
    profile: 'kirana' | 'supermarket' | 'restaurant' | 'electronics'
  ) => {
    if (profile === 'kirana') {
      setCategory('retail');
      setAvgTicketSize(180);
      setMixUpiStandard(85);
      setMixUpiPpi(10);
      setMixRupayCc(5);
      setMixCards(0);
    } else if (profile === 'supermarket') {
      setCategory('supermarket');
      setAvgTicketSize(650);
      setMixUpiStandard(60);
      setMixUpiPpi(15);
      setMixRupayCc(15);
      setMixCards(10);
    } else if (profile === 'restaurant') {
      setCategory('restaurant');
      setAvgTicketSize(550);
      setMixUpiStandard(50);
      setMixUpiPpi(20);
      setMixRupayCc(20);
      setMixCards(10);
    } else if (profile === 'electronics') {
      setCategory('retail');
      setAvgTicketSize(3200);
      setMixUpiStandard(35);
      setMixUpiPpi(15);
      setMixRupayCc(25);
      setMixCards(25);
    }
  };

  const simulation: VolumeSimulationResult = simulateMonthlyVolume(
    monthlyTurnover,
    avgTicketSize,
    {
      upi_standard: mixUpiStandard,
      upi_ppi: mixUpiPpi,
      rupay_cc: mixRupayCc,
      cards: mixCards,
    },
    soundboxRental,
    category
  );

  const totalMix = mixUpiStandard + mixUpiPpi + mixRupayCc + mixCards;

  return (
    <div id="monthly-simulator-view" className="space-y-6">
      
      {/* Header Info */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-emerald-600" />
              <span>{t.monthlySimulatorTitle}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              {t.monthlySimulatorSubtext}
            </p>
          </div>

          {/* Preset Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 sm:pt-0">
            <span className="text-xs font-bold text-slate-400 mr-1">Presets:</span>
            <button
              onClick={() => applyPreset('kirana')}
              className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-800 transition"
            >
              Kirana (85% UPI)
            </button>
            <button
              onClick={() => applyPreset('supermarket')}
              className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-800 transition"
            >
              Supermarket
            </button>
            <button
              onClick={() => applyPreset('restaurant')}
              className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-800 transition"
            >
              Restaurant
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Form: Volume Inputs & Mix Sliders (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Monthly Digital Volume */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <label htmlFor="turnover-slider" className="text-sm font-bold text-slate-900">
                {t.monthlyTurnoverLabel}
              </label>
              <div className="text-right">
                <span className="text-xl font-extrabold text-emerald-700">
                  {formatINR(monthlyTurnover, false)}
                </span>
              </div>
            </div>

            <input
              id="turnover-slider"
              type="range"
              min="20000"
              max="2500000"
              step="10000"
              value={monthlyTurnover}
              onChange={(e) => setMonthlyTurnover(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />

            {/* Quick Turnover Buttons */}
            <div className="flex flex-wrap gap-2">
              {[100000, 250000, 500000, 1000000].map((val) => (
                <button
                  key={val}
                  onClick={() => setMonthlyTurnover(val)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold border transition ${
                    monthlyTurnover === val
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {formatINR(val, false)}
                </button>
              ))}
            </div>
          </div>

          {/* Average Ticket Size & Soundbox Fee */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Avg Ticket Size */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="ticket-size-input" className="text-xs font-bold text-slate-900">
                  {t.avgTicketSizeLabel}
                </label>
                <span className="text-xs font-bold text-slate-500">
                  ~{simulation.estimatedTransactionsCount} bills/mo
                </span>
              </div>
              <div className="relative">
                <span className="absolute left-3 top-2 text-slate-400 font-bold">₹</span>
                <input
                  id="ticket-size-input"
                  type="number"
                  min="10"
                  step="50"
                  value={avgTicketSize}
                  onChange={(e) => setAvgTicketSize(Math.max(1, Number(e.target.value)))}
                  className="w-full pl-8 pr-3 py-2 text-base font-bold bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-600"
                />
              </div>
              <p className="text-[11px] text-slate-500">
                {avgTicketSize <= 2000 ? (
                  <span className="text-emerald-700 font-semibold">
                    ✓ Eligible for 0% PPI & RuPay CC rules
                  </span>
                ) : (
                  <span className="text-amber-700 font-semibold">
                    ⚠ Exceeds ₹2,000 threshold (Interchange applies)
                  </span>
                )}
              </p>
            </div>

            {/* Soundbox Monthly Rental */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2">
              <label htmlFor="soundbox-input" className="text-xs font-bold text-slate-900 flex items-center gap-1">
                <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t.soundboxRentalLabel}</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-slate-400 font-bold">₹</span>
                <input
                  id="soundbox-input"
                  type="number"
                  min="0"
                  step="25"
                  value={soundboxRental}
                  onChange={(e) => setSoundboxRental(Math.max(0, Number(e.target.value)))}
                  className="w-full pl-8 pr-3 py-2 text-base font-bold bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-600"
                />
              </div>
              <p className="text-[11px] text-slate-500">
                {t.soundboxTip}
              </p>
            </div>

          </div>

          {/* Payment Mix Sliders */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <PieChart className="w-4 h-4 text-emerald-600" />
                <span>{t.paymentMixLabel}</span>
              </h3>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                totalMix === 100 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
              }`}>
                Total: {totalMix}% {totalMix !== 100 && `(${t.mixTotalMustBe100})`}
              </span>
            </div>

            {/* 1. Standard Bank UPI */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800">
                  Standard Bank UPI (0% Zero MDR)
                </span>
                <span className="font-bold text-emerald-700">{mixUpiStandard}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={mixUpiStandard}
                onChange={(e) => setMixUpiStandard(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
            </div>

            {/* 2. PPI Wallets */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800">
                  Prepaid Wallets (Paytm, PhonePe)
                </span>
                <span className="font-bold text-amber-700">{mixUpiPpi}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={mixUpiPpi}
                onChange={(e) => setMixUpiPpi(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
            </div>

            {/* 3. RuPay CC on UPI */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800">
                  RuPay Credit Card on UPI
                </span>
                <span className="font-bold text-indigo-700">{mixRupayCc}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={mixRupayCc}
                onChange={(e) => setMixRupayCc(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>

            {/* 4. Debit/Credit Cards */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800">
                  Debit / Credit Cards
                </span>
                <span className="font-bold text-slate-700">{mixCards}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={mixCards}
                onChange={(e) => setMixCards(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-700"
              />
            </div>

          </div>

        </div>

        {/* Right Column: Simulation Outcomes & Projections (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Main Net Revenue Card */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 border border-slate-800 shadow-xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                {t.monthlyNetSettled}
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                Monthly Net
              </span>
            </div>

            <div className="text-center py-2 space-y-1">
              <div className="text-3xl sm:text-4xl font-black tracking-tight text-emerald-400">
                {formatINR(simulation.netAfterSoundbox)}
              </div>
              <p className="text-xs text-slate-400">
                {t.monthlyEffectiveFee}: <span className="text-white font-bold">{simulation.totalEffectiveCostRate.toFixed(2)}%</span> of sales
              </p>
            </div>

            {/* Financial Overview Table */}
            <div className="space-y-2 text-sm bg-slate-900/80 rounded-2xl p-4 border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">{t.monthlyGrossVolume}</span>
                <span className="font-bold text-white">{formatINR(simulation.grossVolume)}</span>
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-slate-800">
                <span className="text-slate-400">{t.monthlyTotalMdr}</span>
                <span className="font-semibold text-rose-400">- {formatINR(simulation.totalMdrFee)}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-400">{t.monthlyTotalGst} (18%)</span>
                <span className="font-semibold text-rose-400">- {formatINR(simulation.totalGst)}</span>
              </div>

              {simulation.soundboxRentalFee > 0 && (
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">{t.monthlySoundboxCost}</span>
                  <span className="font-semibold text-rose-400">- {formatINR(simulation.soundboxRentalFee)}</span>
                </div>
              )}

              <div className="flex items-center justify-between pt-2 border-t border-slate-800 font-bold">
                <span className="text-emerald-300">Total Kept</span>
                <span className="text-emerald-400">{formatINR(simulation.netAfterSoundbox)}</span>
              </div>
            </div>

            {/* Annual Impact Cards */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="bg-slate-850 p-3 rounded-xl border border-slate-800 space-y-1">
                <span className="text-slate-400 block">{t.annualMdrImpact}</span>
                <span className="text-rose-400 font-bold text-sm block">
                  {formatINR(simulation.annualDeductionProjection, false)}
                </span>
                <span className="text-[10px] text-slate-500">Projected across 12 months</span>
              </div>

              <div className="bg-slate-850 p-3 rounded-xl border border-slate-800 space-y-1">
                <span className="text-slate-400 block">{t.gstItcPotential}</span>
                <span className="text-emerald-400 font-bold text-sm block">
                  {formatINR(simulation.gstInputCreditEligible, false)}
                </span>
                <span className="text-[10px] text-slate-500">Claimable Input Tax Credit</span>
              </div>
            </div>

          </div>

          {/* Quick Merchant Tip */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-slate-800 text-xs sm:text-sm space-y-2">
            <div className="flex items-center gap-2 font-bold text-emerald-950">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Merchant Cost Optimization Tip</span>
            </div>
            <p className="text-slate-700 leading-relaxed text-xs">
              By encouraging customers to pay via standard Bank QR (0% MDR) or keeping RuPay Credit Card transactions within ₹2,000, your business keeps up to <strong>100% of revenue</strong> with zero interchange deductions.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
