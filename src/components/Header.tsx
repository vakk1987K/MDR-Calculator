import React from 'react';
import { 
  Globe, 
  ShieldCheck, 
  Zap, 
  Sparkles,
  Layers
} from 'lucide-react';
import { LanguageCode } from '../types';
import { SUPPORTED_LANGUAGES, TranslationSchema } from '../i18n/translations';
import { PWAInstallButton } from './PWAInstallButton';

interface HeaderProps {
  currentLang: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  t: TranslationSchema;
  onOpenLanguageModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  t,
  onOpenLanguageModal,
}) => {
  const activeLangObj = SUPPORTED_LANGUAGES.find((l) => l.code === currentLang) || SUPPORTED_LANGUAGES[0];

  return (
    <header 
      id="app-main-header"
      className="sticky top-0 z-40 w-full border-b border-emerald-900/40 bg-slate-950/90 backdrop-blur-md text-white transition-all shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          
          {/* Brand & Badges */}
          <div className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-md shadow-emerald-950/50">
              <span className="text-2xl font-black tracking-tighter">₹</span>
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[9px] font-black text-slate-950">
                ✓
              </span>
            </div>
            
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-white">
                  {t.appName}
                </h1>
                <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 text-[11px] font-semibold text-emerald-300">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>{t.badgeOfficial}</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium hidden sm:block">
                {t.appTagline}
              </p>
            </div>
          </div>

          {/* Action Tools: Language Selector & PWA Install */}
          <div className="flex items-center justify-between md:justify-end gap-2.5 pt-1 md:pt-0 border-t border-slate-800 md:border-none">
            
            {/* Quick Language Switcher & Modal Trigger */}
            <div className="flex items-center gap-1.5">
              <button
                id="header-lang-modal-btn"
                type="button"
                onClick={onOpenLanguageModal}
                title={t.selectLanguageModalTitle}
                className="flex items-center gap-1.5 rounded-xl bg-emerald-950/70 border border-emerald-500/40 px-2.5 py-1.5 text-xs text-emerald-200 hover:bg-emerald-900/80 transition"
              >
                <span className="text-sm" aria-hidden="true">{activeLangObj.flag || '🇮🇳'}</span>
                <span className="font-extrabold text-white">{activeLangObj.nativeLabel}</span>
                <Globe className="w-3 h-3 text-emerald-400 opacity-80" />
              </button>

              <div className="relative flex items-center">
                <label htmlFor="language-select" className="sr-only">Select Language</label>
                <div className="flex items-center rounded-xl bg-slate-900 border border-slate-800 px-2 py-1.5 text-xs text-slate-200 hover:border-slate-700 transition">
                  <select
                    id="language-select"
                    aria-label="Language Selector"
                    value={currentLang}
                    onChange={(e) => onLanguageChange(e.target.value as LanguageCode)}
                    className="bg-transparent border-none text-xs font-semibold text-slate-200 focus:outline-none focus:ring-0 cursor-pointer pr-1"
                  >
                    {SUPPORTED_LANGUAGES.map((lang) => (
                      <option key={lang.code} value={lang.code} className="bg-slate-900 text-slate-100 font-sans">
                        {lang.flag} {lang.nativeLabel} ({lang.label})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* In-App PWA Install Button */}
            <PWAInstallButton
              t={{
                installApp: t.installApp,
                installOnIos: t.installOnIos,
                iosInstructionsTitle: t.iosInstructionsTitle,
                iosStep1: t.iosStep1,
                iosStep2: t.iosStep2,
                close: t.close,
                appInstalled: t.appInstalled,
              }}
            />
          </div>

        </div>
      </div>
    </header>
  );
};
