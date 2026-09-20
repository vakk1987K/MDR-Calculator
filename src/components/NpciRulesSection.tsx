import React from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Scale, 
  AlertCircle, 
  Info, 
  ExternalLink 
} from 'lucide-react';
import { TranslationSchema } from '../i18n/translations';

interface NpciRulesSectionProps {
  t: TranslationSchema;
}

export const NpciRulesSection: React.FC<NpciRulesSectionProps> = ({ t }) => {
  return (
    <div id="rules-view" className="space-y-6">
      
      {/* Title */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-2">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800">
            <Scale className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-extrabold text-slate-900">
            {t.rulesTitle}
          </h2>
        </div>
        <p className="text-sm text-slate-600">
          {t.rulesSubtext}
        </p>
      </div>

      {/* Rules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Rule 1: Zero MDR Mandate */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-600 text-white font-extrabold text-xs">
              01
            </span>
            <h3 className="font-bold text-slate-900 text-base">
              {t.rule1Title}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {t.rule1Body}
          </p>
          <div className="pt-2 text-[11px] font-semibold text-emerald-700">
            Reference: MeitY & Govt of India Gazette Notification
          </div>
        </div>

        {/* Rule 2: PPI Wallets > 2000 */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500 text-slate-950 font-extrabold text-xs">
              02
            </span>
            <h3 className="font-bold text-slate-900 text-base">
              {t.rule2Title}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {t.rule2Body}
          </p>
          <div className="pt-2 text-[11px] font-semibold text-amber-700">
            Reference: NPCI Circular NPCI/2022-23/UPI/008 (April 2023)
          </div>
        </div>

        {/* Rule 3: RuPay CC on UPI */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-white font-extrabold text-xs">
              03
            </span>
            <h3 className="font-bold text-slate-900 text-base">
              {t.rule3Title}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {t.rule3Body}
          </p>
          <div className="pt-2 text-[11px] font-semibold text-indigo-700">
            Reference: NPCI RuPay Credit Card on UPI Merchant Circular
          </div>
        </div>

        {/* Rule 4: No Surcharging */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-rose-600 text-white font-extrabold text-xs">
              04
            </span>
            <h3 className="font-bold text-slate-900 text-base">
              {t.rule4Title}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {t.rule4Body}
          </p>
          <div className="pt-2 text-[11px] font-semibold text-rose-700">
            Reference: RBI Fair Practices Code for Merchant Acquiring
          </div>
        </div>

      </div>

      {/* Official Disclaimer */}
      <div className="bg-slate-100 rounded-2xl p-4 border border-slate-200 text-slate-600 text-xs flex items-start gap-3">
        <Info className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          {t.disclaimerText}
        </p>
      </div>

    </div>
  );
};
