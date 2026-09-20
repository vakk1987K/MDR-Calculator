import React, { useState, useEffect, useRef } from 'react';
import { 
  Check, 
  Copy, 
  Bookmark, 
  RotateCcw, 
  Info, 
  ShieldCheck, 
  ArrowRight, 
  TrendingDown, 
  Wallet, 
  CreditCard, 
  Percent, 
  CheckCircle2, 
  AlertCircle,
  Volume2
} from 'lucide-react';
import { 
  CalculationResult, 
  MerchantCategory, 
  PaymentMode, 
  SavedCalculation,
  LanguageCode
} from '../types';
import { TranslationSchema, SUPPORTED_LANGUAGES } from '../i18n/translations';
import { 
  calculateSingleTransaction, 
  compareAllModes, 
  formatINR 
} from '../utils/mdrCalculator';
import { speakSoundboxAnnouncement } from '../utils/soundboxAudio';

interface SingleBillCalculatorProps {
  t: TranslationSchema;
  onSaveCalculation: (calc: SavedCalculation) => void;
  currentLang?: LanguageCode;
  dualMode?: boolean;
  autoVoice?: boolean;
}

export const SingleBillCalculator: React.FC<SingleBillCalculatorProps> = ({
  t,
  onSaveCalculation,
  currentLang = 'en',
  dualMode = false,
  autoVoice = false,
}) => {
  const [amount, setAmount] = useState<number>(2500);
  const [mode, setMode] = useState<PaymentMode>('upi_standard');
  const [category, setCategory] = useState<MerchantCategory>('retail');
  const [customRate, setCustomRate] = useState<number>(1.5);
  const [flatFee, setFlatFee] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const activeLangObj = SUPPORTED_LANGUAGES.find((l) => l.code === currentLang) || SUPPORTED_LANGUAGES[0];

  const result: CalculationResult = calculateSingleTransaction(
    amount,
    mode,
    category,
    customRate,
    flatFee
  );

  const modeComparisons = compareAllModes(amount, category, customRate, flatFee);

  // Handle Play Soundbox Voice
  const handlePlaySoundboxVoice = () => {
    setIsSpeaking(true);
    speakSoundboxAnnouncement(
      {
        amount: result.amount,
        netPayout: result.netPayout,
        deduction: result.totalDeduction,
        isZeroMdr: result.isZeroMdr,
        lang: currentLang,
      },
      () => setIsSpeaking(true),
      () => setIsSpeaking(false)
    );
  };

  // Optional Auto-voice announcement when amount changes (with debounce)
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!autoVoice) return;

    const timer = setTimeout(() => {
      handlePlaySoundboxVoice();
    }, 600);

    return () => clearTimeout(timer);
  }, [amount, mode, autoVoice]);

  const handleQuickAdd = (addVal: number) => {
    setAmount((prev) => Math.max(0, (Number(prev) || 0) + addVal));
  };

  const handleSetExact = (exactVal: number) => {
    setAmount(exactVal);
  };

  const handleReset = () => {
    setAmount(1000);
    setMode('upi_standard');
    setCategory('retail');
    setCustomRate(1.5);
    setFlatFee(0);
  };

  const handleCopyBreakdown = () => {
    const text = `--- ${t.appName} ---
${t.customerPays}: ${formatINR(result.amount)}
${t.paymentMode}: ${result.mode}
${t.baseMdr} (${result.mdrRate}%): ${formatINR(result.mdrAmount)}
${t.gstOnMdr} (18%): ${formatINR(result.gstAmount)}
${t.totalDeduction}: ${formatINR(result.totalDeduction)}
${t.netSettlement}: ${formatINR(result.netPayout)}
${t.effectiveRate}: ${result.effectiveRate.toFixed(2)}%
${result.isZeroMdr ? t.zeroMdrNotice : ''}
Calculated via UPI Merchant MDR Calculator`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSave = () => {
    const item: SavedCalculation = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      date: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
      }),
      title: `${formatINR(result.amount)} via ${mode}`,
      amount: result.amount,
      mode: result.mode,
      category: result.category,
      netPayout: result.netPayout,
      totalDeduction: result.totalDeduction,
      effectiveRate: result.effectiveRate,
    };

    onSaveCalculation(item);
    setSaved(true);
    setTimeout(() => setSaved(false), 2200);
  };

  return (
    <div id="single-bill-view" className="space-y-6">
      
      {/* Top Banner Notice */}
      <div 
        id="gov-zero-mdr-banner"
        className="flex items-start gap-3 rounded-2xl bg-emerald-50 border border-emerald-200/80 p-4 text-slate-800 shadow-sm"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white font-bold">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div className="text-sm">
          <h2 className="font-bold text-emerald-950 text-base">
            {t.badgeOfficial}
          </h2>
          <p className="text-emerald-900/90 text-xs sm:text-sm mt-0.5 leading-relaxed">
            {t.zeroMdrNotice}
          </p>
        </div>
      </div>

      {/* Main Grid: Input Form & Results Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Bill Amount Input Card */}
          <div 
            id="amount-input-card"
            className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4"
          >
            <div className="flex items-center justify-between">
              <label 
                htmlFor="bill-amount-input" 
                className="text-sm font-bold text-slate-900 flex items-center gap-1.5"
              >
                <span>{t.enterAmount}</span>
              </label>
              <button
                id="btn-clear-amount"
                onClick={() => setAmount(0)}
                className="text-xs font-semibold text-slate-500 hover:text-rose-600 transition"
              >
                {t.resetValues}
              </button>
            </div>

            {/* Big Currency Input */}
            <div className="relative flex items-center">
              <span className="absolute left-4 text-2xl font-bold text-slate-400 select-none">
                ₹
              </span>
              <input
                id="bill-amount-input"
                type="number"
                min="0"
                step="10"
                value={amount === 0 ? '' : amount}
                placeholder="0"
                onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
                className="w-full pl-10 pr-4 py-3.5 text-2xl sm:text-3xl font-extrabold text-slate-900 bg-slate-50 hover:bg-slate-100/80 focus:bg-white border-2 border-slate-200 focus:border-emerald-600 rounded-xl outline-none transition"
              />
            </div>

            {/* Quick Amount Add Chips */}
            <div className="space-y-1.5">
              <span className="text-xs font-semibold text-slate-500">
                {t.quickAmounts}
              </span>
              <div className="flex flex-wrap gap-2">
                {[100, 500, 1000, 2000, 5000].map((val) => (
                  <button
                    key={val}
                    id={`btn-add-${val}`}
                    onClick={() => handleQuickAdd(val)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 border border-slate-200 text-slate-700 transition active:scale-95"
                  >
                    +{formatINR(val, false)}
                  </button>
                ))}
                <button
                  id="btn-set-threshold-2000"
                  onClick={() => handleSetExact(2000)}
                  title="Threshold for 0% PPI and RuPay Credit Card"
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-50 border border-amber-200 text-amber-800 hover:bg-amber-100 transition active:scale-95"
                >
                  ₹2,000 (NPCI Limit)
                </button>
              </div>
            </div>
          </div>

          {/* Payment Instrument Selector */}
          <div 
            id="payment-mode-card"
            className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3"
          >
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <Wallet className="w-4 h-4 text-emerald-600" />
                <span>{t.paymentMode}</span>
              </label>
              {result.isZeroMdr && (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100/70 border border-emerald-200 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  0% MDR
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              
              {/* Option 1: Standard UPI */}
              <button
                id="mode-upi-standard"
                type="button"
                onClick={() => setMode('upi_standard')}
                className={`flex flex-col text-left p-3.5 rounded-xl border-2 transition ${
                  mode === 'upi_standard'
                    ? 'border-emerald-600 bg-emerald-50/50 shadow-sm ring-1 ring-emerald-600'
                    : 'border-slate-200 bg-slate-50/60 hover:bg-slate-100/70'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-bold text-slate-900 text-sm">{t.modeStandardUpi}</span>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-600 text-white px-2 py-0.5 rounded">
                    0.00%
                  </span>
                </div>
                <span className="text-xs text-slate-500 mt-1 leading-tight">
                  {t.modeStandardUpiDesc}
                </span>
              </button>

              {/* Option 2: UPI via Wallets (PPI) */}
              <button
                id="mode-upi-ppi"
                type="button"
                onClick={() => setMode('upi_ppi')}
                className={`flex flex-col text-left p-3.5 rounded-xl border-2 transition ${
                  mode === 'upi_ppi'
                    ? 'border-emerald-600 bg-emerald-50/50 shadow-sm ring-1 ring-emerald-600'
                    : 'border-slate-200 bg-slate-50/60 hover:bg-slate-100/70'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-bold text-slate-900 text-sm">{t.modeUpiPpi}</span>
                  <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                    amount <= 2000 ? 'bg-emerald-600 text-white' : 'bg-amber-600 text-white'
                  }`}>
                    {amount <= 2000 ? '0.00%' : '~1.10%'}
                  </span>
                </div>
                <span className="text-xs text-slate-500 mt-1 leading-tight">
                  {t.modeUpiPpiDesc}
                </span>
              </button>

              {/* Option 3: RuPay CC on UPI */}
              <button
                id="mode-rupay-cc"
                type="button"
                onClick={() => setMode('rupay_cc')}
                className={`flex flex-col text-left p-3.5 rounded-xl border-2 transition ${
                  mode === 'rupay_cc'
                    ? 'border-emerald-600 bg-emerald-50/50 shadow-sm ring-1 ring-emerald-600'
                    : 'border-slate-200 bg-slate-50/60 hover:bg-slate-100/70'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-bold text-slate-900 text-sm">{t.modeRupayCc}</span>
                  <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                    amount <= 2000 ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-white'
                  }`}>
                    {amount <= 2000 ? '0.00%' : '1.99%'}
                  </span>
                </div>
                <span className="text-xs text-slate-500 mt-1 leading-tight">
                  {t.modeRupayCcDesc}
                </span>
              </button>

              {/* Option 4: Debit Card */}
              <button
                id="mode-debit-card"
                type="button"
                onClick={() => setMode('debit_card')}
                className={`flex flex-col text-left p-3.5 rounded-xl border-2 transition ${
                  mode === 'debit_card'
                    ? 'border-emerald-600 bg-emerald-50/50 shadow-sm ring-1 ring-emerald-600'
                    : 'border-slate-200 bg-slate-50/60 hover:bg-slate-100/70'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-bold text-slate-900 text-sm">{t.modeDebitCard}</span>
                  <span className="text-[10px] font-black uppercase bg-slate-700 text-white px-2 py-0.5 rounded">
                    {amount <= 2000 ? '0.40%' : '0.90%'}
                  </span>
                </div>
                <span className="text-xs text-slate-500 mt-1 leading-tight">
                  {t.modeDebitCardDesc}
                </span>
              </button>

              {/* Option 5: Regular Credit Card */}
              <button
                id="mode-credit-card"
                type="button"
                onClick={() => setMode('credit_card')}
                className={`flex flex-col text-left p-3.5 rounded-xl border-2 transition ${
                  mode === 'credit_card'
                    ? 'border-emerald-600 bg-emerald-50/50 shadow-sm ring-1 ring-emerald-600'
                    : 'border-slate-200 bg-slate-50/60 hover:bg-slate-100/70'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-bold text-slate-900 text-sm">{t.modeCreditCard}</span>
                  <span className="text-[10px] font-black uppercase bg-slate-700 text-white px-2 py-0.5 rounded">
                    1.90%
                  </span>
                </div>
                <span className="text-xs text-slate-500 mt-1 leading-tight">
                  {t.modeCreditCardDesc}
                </span>
              </button>

              {/* Option 6: Custom Gateway Rate */}
              <button
                id="mode-custom"
                type="button"
                onClick={() => setMode('custom')}
                className={`flex flex-col text-left p-3.5 rounded-xl border-2 transition ${
                  mode === 'custom'
                    ? 'border-emerald-600 bg-emerald-50/50 shadow-sm ring-1 ring-emerald-600'
                    : 'border-slate-200 bg-slate-50/60 hover:bg-slate-100/70'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-bold text-slate-900 text-sm">{t.modeCustom}</span>
                  <span className="text-[10px] font-black uppercase bg-slate-700 text-white px-2 py-0.5 rounded">
                    {customRate}%
                  </span>
                </div>
                <span className="text-xs text-slate-500 mt-1 leading-tight">
                  {t.modeCustomDesc}
                </span>
              </button>

            </div>

            {/* Custom Inputs if 'custom' is active */}
            {mode === 'custom' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-100 animate-in fade-in">
                <div>
                  <label htmlFor="custom-rate-input" className="text-xs font-semibold text-slate-700">
                    {t.customRateLabel}
                  </label>
                  <div className="relative mt-1">
                    <input
                      id="custom-rate-input"
                      type="number"
                      step="0.05"
                      min="0"
                      max="10"
                      value={customRate}
                      onChange={(e) => setCustomRate(Number(e.target.value))}
                      className="w-full px-3 py-2 text-sm font-bold bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600"
                    />
                    <span className="absolute right-3 top-2 text-slate-400 font-bold">%</span>
                  </div>
                </div>

                <div>
                  <label htmlFor="custom-flat-fee-input" className="text-xs font-semibold text-slate-700">
                    {t.flatFeeLabel}
                  </label>
                  <div className="relative mt-1">
                    <input
                      id="custom-flat-fee-input"
                      type="number"
                      step="1"
                      min="0"
                      value={flatFee}
                      onChange={(e) => setFlatFee(Number(e.target.value))}
                      className="w-full px-3 py-2 text-sm font-bold bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600"
                    />
                    <span className="absolute right-3 top-2 text-slate-400 font-bold">₹</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Merchant Business Category */}
          <div 
            id="category-selector-card"
            className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2"
          >
            <label htmlFor="merchant-category-select" className="text-sm font-bold text-slate-900 block">
              {t.merchantCategory}
            </label>
            <select
              id="merchant-category-select"
              value={category}
              onChange={(e) => setCategory(e.target.value as MerchantCategory)}
              className="w-full px-3.5 py-2.5 text-sm font-semibold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-600 transition cursor-pointer"
            >
              <option value="retail">{t.catRetail}</option>
              <option value="supermarket">{t.catSupermarket}</option>
              <option value="fuel">{t.catFuel}</option>
              <option value="education_govt">{t.catEducationGovt}</option>
              <option value="restaurant">{t.catRestaurant}</option>
              <option value="ecommerce">{t.catEcommerce}</option>
            </select>
          </div>

        </div>

        {/* Right Column: Live Results & Breakdown (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Main Calculation Summary Card */}
          <div 
            id="calculation-summary-card"
            className="bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-3xl p-6 border border-slate-800 shadow-xl space-y-6 relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Percent className="w-3.5 h-3.5" />
                {t.calculationSummary}
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                18% GST Model
              </span>
            </div>

            {/* Net Payout Showcase */}
            <div className="text-center py-2 space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <span>{t.netSettlement}</span>
                {dualMode && <span className="text-slate-500 lowercase">(net bank payout)</span>}
              </div>
              <div 
                id="net-payout-display"
                aria-live="polite"
                className="text-4xl sm:text-5xl font-black tracking-tight text-emerald-400"
              >
                {formatINR(result.netPayout)}
              </div>
              <p className="text-xs text-slate-400 font-medium">
                {result.isZeroMdr 
                  ? t.zeroMdrApplied
                  : `${t.effectiveRate}: ${result.effectiveRate.toFixed(2)}%`}
              </p>
            </div>

            {/* Soundbox Voice Announcement Button (High priority for merchant understanding) */}
            <button
              id="btn-soundbox-voice-announce"
              type="button"
              onClick={handlePlaySoundboxVoice}
              title={t.voiceTestTooltip}
              className={`w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-2xl text-xs sm:text-sm font-extrabold transition active:scale-98 shadow-md ${
                isSpeaking
                  ? 'bg-emerald-500 text-slate-950 ring-2 ring-emerald-300 animate-pulse'
                  : 'bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-950/40'
              }`}
            >
              <Volume2 className={`w-4 h-4 ${isSpeaking ? 'animate-bounce text-slate-950' : 'text-emerald-200'}`} />
              <span>
                {isSpeaking 
                  ? t.voiceSoundboxPlaying 
                  : `${t.voiceSoundboxBtn} (${activeLangObj.nativeLabel})`}
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-950/30 text-white border border-white/20">
                UPI Soundbox
              </span>
            </button>

            {/* Itemized Breakdown List */}
            <div className="space-y-2.5 text-sm bg-slate-900/80 rounded-2xl p-4 border border-slate-800/80">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">
                  {t.customerPays}
                  {dualMode && <span className="text-[11px] text-slate-500 block">Gross Customer Bill</span>}
                </span>
                <span className="font-bold text-white text-base">
                  {formatINR(result.amount)}
                </span>
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-slate-800/60">
                <span className="text-slate-400 flex items-center gap-1">
                  <span>{t.baseMdr} ({result.mdrRate}%)</span>
                  {dualMode && <span className="text-[10px] text-slate-500">(MDR)</span>}
                </span>
                <span className={`font-semibold ${result.mdrAmount === 0 ? 'text-emerald-400' : 'text-slate-200'}`}>
                  {result.mdrAmount === 0 ? '₹0.00 (Zero)' : `- ${formatINR(result.mdrAmount)}`}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-400">
                  {t.gstOnMdr}
                  {dualMode && <span className="text-[10px] text-slate-500 ml-1">(18% GST)</span>}
                </span>
                <span className={`font-semibold ${result.gstAmount === 0 ? 'text-emerald-400' : 'text-slate-200'}`}>
                  {result.gstAmount === 0 ? '₹0.00' : `- ${formatINR(result.gstAmount)}`}
                </span>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-base font-bold">
                <span className="text-rose-300">
                  {t.totalDeduction}
                  {dualMode && <span className="text-[11px] text-rose-400/80 block font-normal">Fee + Tax Deducted</span>}
                </span>
                <span className={`${result.totalDeduction === 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {result.totalDeduction === 0 ? '₹0.00' : `- ${formatINR(result.totalDeduction)}`}
                </span>
              </div>
            </div>

            {/* Contextual Rule Explanation / Note */}
            {result.ruleExplanation && (
              <div className="flex items-start gap-2.5 rounded-xl bg-slate-850/80 border border-slate-800 p-3 text-xs text-slate-300">
                <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">{result.ruleExplanation}</p>
              </div>
            )}

            {/* GST ITC Tip */}
            {result.gstAmount > 0 && (
              <div className="rounded-xl bg-emerald-950/40 border border-emerald-500/30 p-3 text-xs text-emerald-200">
                <p>{t.gstClaimTip.replace('{gst}', result.gstAmount.toFixed(2))}</p>
              </div>
            )}

            {/* Actions: Copy & Save */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <button
                id="btn-copy-breakdown"
                onClick={handleCopyBreakdown}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-100 transition border border-slate-700 active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{t.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>{t.copyBreakdown}</span>
                  </>
                )}
              </button>

              <button
                id="btn-save-calculation"
                onClick={handleSave}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition active:scale-95 shadow-md shadow-emerald-950/40"
              >
                {saved ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>{t.savedSuccess}</span>
                  </>
                ) : (
                  <>
                    <Bookmark className="w-4 h-4" />
                    <span>{t.saveCalculation}</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Side-by-Side Comparison for this exact amount */}
      <div 
        id="mode-comparison-section"
        className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-emerald-600" />
              <span>{t.compareAllModes}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {t.compareSubtext}
            </p>
          </div>
          <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full w-fit">
            Amount: {formatINR(amount)}
          </span>
        </div>

        <div className="overflow-x-auto -mx-2 sm:mx-0">
          <table className="w-full text-left text-sm border-collapse min-w-[580px]">
            <thead>
              <tr className="border-b border-slate-200 text-slate-600 text-xs uppercase tracking-wider bg-slate-50/70">
                <th className="py-3 px-3 font-bold rounded-l-xl">{t.modeCol}</th>
                <th className="py-3 px-3 font-bold">{t.rateCol}</th>
                <th className="py-3 px-3 font-bold">{t.feeCol}</th>
                <th className="py-3 px-3 font-bold">{t.settlementCol}</th>
                <th className="py-3 px-3 font-bold rounded-r-xl">{t.statusCol}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {modeComparisons.map((item) => (
                <tr 
                  key={item.mode}
                  className={`hover:bg-slate-50/80 transition ${
                    item.mode === mode ? 'bg-emerald-50/40 font-medium' : ''
                  }`}
                >
                  <td className="py-3 px-3">
                    <div className="font-bold text-slate-900 flex items-center gap-2">
                      <span>{item.label}</span>
                      {item.isOptimal && (
                        <span className="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                          {t.bestChoice}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-3 font-semibold text-slate-700">
                    {item.mdrRate.toFixed(2)}%
                  </td>
                  <td className="py-3 px-3 font-semibold">
                    {item.totalDeduction === 0 ? (
                      <span className="text-emerald-700 font-bold">₹0.00</span>
                    ) : (
                      <span className="text-rose-600">- {formatINR(item.totalDeduction)}</span>
                    )}
                  </td>
                  <td className="py-3 px-3 font-bold text-emerald-700 text-base">
                    {formatINR(item.netPayout)}
                  </td>
                  <td className="py-3 px-3">
                    {item.isZeroMdr ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        0% MDR
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-slate-500">
                        {item.effectiveRate.toFixed(2)}% cost
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
