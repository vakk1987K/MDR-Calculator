/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Globe, 
  Volume2, 
  HelpCircle, 
  Sparkles, 
  Check, 
  Layers,
  ShieldCheck
} from 'lucide-react';
import { LanguageCode } from '../types';
import { SUPPORTED_LANGUAGES, TranslationSchema } from '../i18n/translations';
import { playVoiceTest } from '../utils/soundboxAudio';

interface TopLanguageBarProps {
  currentLang: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  t: TranslationSchema;
  onOpenGuide: () => void;
  dualMode: boolean;
  onToggleDualMode: () => void;
  onOpenPrivacy?: () => void;
}

export const TopLanguageBar: React.FC<TopLanguageBarProps> = ({
  currentLang,
  onLanguageChange,
  t,
  onOpenGuide,
  dualMode,
  onToggleDualMode,
  onOpenPrivacy,
}) => {
  const [activeSpeech, setActiveSpeech] = useState<boolean>(false);

  const handleQuickVoiceTest = () => {
    setActiveSpeech(true);
    playVoiceTest(
      currentLang,
      () => setActiveSpeech(true),
      () => setActiveSpeech(false)
    );
  };

  return (
    <div 
      id="top-language-selector-bar"
      className="w-full bg-slate-900 border-b border-slate-800 text-slate-200 transition-colors"
      aria-label="Language and Regional Bar"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        
        {/* Left: Language Pills Ribbon */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          <div className="flex items-center gap-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 hidden md:flex">
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.topLanguagePrompt}:</span>
          </div>

          <div className="flex items-center gap-1.5 flex-nowrap shrink-0">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isSelected = currentLang === lang.code;
              return (
                <button
                  key={lang.code}
                  id={`top-lang-btn-${lang.code}`}
                  type="button"
                  onClick={() => onLanguageChange(lang.code)}
                  aria-pressed={isSelected}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition whitespace-nowrap active:scale-95 ${
                    isSelected
                      ? 'bg-emerald-500 text-slate-950 shadow-sm ring-2 ring-emerald-400 font-extrabold'
                      : 'bg-slate-800/90 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-700/80'
                  }`}
                >
                  <span className="text-xs" aria-hidden="true">{lang.flag || '🇮🇳'}</span>
                  <span className="tracking-tight">{lang.nativeLabel}</span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Quick Soundbox Test & Guide Features */}
        <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0 pt-1 sm:pt-0 border-t border-slate-800/80 sm:border-none">
          
          {/* Soundbox Voice Preview Test Button */}
          <button
            id="top-voice-test-btn"
            type="button"
            onClick={handleQuickVoiceTest}
            title={t.voiceTestTooltip}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition border active:scale-95 ${
              activeSpeech
                ? 'bg-emerald-600 text-white border-emerald-500 animate-pulse'
                : 'bg-slate-800 text-emerald-300 border-emerald-500/30 hover:bg-slate-700 hover:border-emerald-500/60'
            }`}
          >
            <Volume2 className={`w-3.5 h-3.5 ${activeSpeech ? 'animate-bounce' : 'text-emerald-400'}`} />
            <span className="hidden xs:inline">
              {activeSpeech ? t.voiceSoundboxPlaying : t.voiceSoundboxBtn}
            </span>
            <span className="xs:hidden">Voice</span>
          </button>

          {/* Dual-Language Toggle Badge */}
          <button
            id="top-dual-mode-btn"
            type="button"
            onClick={onToggleDualMode}
            title={t.dualLanguageDesc}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition border active:scale-95 ${
              dualMode
                ? 'bg-teal-900/60 text-teal-200 border-teal-500/60'
                : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-teal-400" />
            <span className="hidden sm:inline">Dual Terms</span>
            <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
              dualMode ? 'bg-teal-400 text-slate-950' : 'bg-slate-700 text-slate-300'
            }`}>
              {dualMode ? 'ON' : 'OFF'}
            </span>
          </button>

          {/* Language Guide & Glossary Modal Trigger */}
          <button
            id="top-language-help-btn"
            type="button"
            onClick={onOpenGuide}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition active:scale-95"
          >
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.topLanguageHelp}</span>
          </button>

          {/* Privacy Policy Quick Modal Trigger */}
          {onOpenPrivacy && (
            <button
              id="top-privacy-btn"
              type="button"
              onClick={onOpenPrivacy}
              title="View Privacy Policy & Download .docx"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-950/70 hover:bg-emerald-900 text-emerald-300 hover:text-emerald-100 border border-emerald-500/40 transition active:scale-95"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Privacy</span>
            </button>
          )}

        </div>

      </div>
    </div>
  );
};
