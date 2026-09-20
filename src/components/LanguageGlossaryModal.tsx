/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  X, 
  Volume2, 
  VolumeX, 
  HelpCircle, 
  Check, 
  Globe, 
  BookOpen, 
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  Radio
} from 'lucide-react';
import { LanguageCode } from '../types';
import { SUPPORTED_LANGUAGES, TranslationSchema } from '../i18n/translations';
import { playVoiceTest } from '../utils/soundboxAudio';

interface LanguageGlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  t: TranslationSchema;
  dualMode: boolean;
  onToggleDualMode: () => void;
  autoVoice: boolean;
  onToggleAutoVoice: () => void;
}

export const LanguageGlossaryModal: React.FC<LanguageGlossaryModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onLanguageChange,
  t,
  dualMode,
  onToggleDualMode,
  autoVoice,
  onToggleAutoVoice,
}) => {
  const [playingLang, setPlayingLang] = useState<LanguageCode | null>(null);

  if (!isOpen) return null;

  const handleTestVoice = (lang: LanguageCode, e: React.MouseEvent) => {
    e.stopPropagation();
    setPlayingLang(lang);
    playVoiceTest(
      lang,
      () => setPlayingLang(lang),
      () => setPlayingLang(null)
    );
  };

  return (
    <div 
      id="language-glossary-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="language-modal-title"
    >
      <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 text-slate-900 flex flex-col">
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-slate-900 text-white px-5 sm:px-6 py-4 border-b border-slate-800 flex items-center justify-between rounded-t-3xl">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 font-black">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h2 id="language-modal-title" className="text-base sm:text-lg font-extrabold tracking-tight">
                {t.selectLanguageModalTitle}
              </h2>
              <p className="text-xs text-slate-400">
                {t.selectLanguageModalSubtext}
              </p>
            </div>
          </div>
          
          <button
            id="close-language-modal-btn"
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="rounded-full p-2 text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6 space-y-6 flex-1">
          
          {/* Language Selection Grid with Soundbox Previews */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {t.topLanguagePrompt}
              </h3>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                6 Regional Languages
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SUPPORTED_LANGUAGES.map((lang) => {
                const isSelected = currentLang === lang.code;
                const isSpeaking = playingLang === lang.code;

                return (
                  <div
                    key={lang.code}
                    id={`lang-card-${lang.code}`}
                    onClick={() => onLanguageChange(lang.code)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && onLanguageChange(lang.code)}
                    className={`p-4 rounded-2xl border-2 transition cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/70 shadow-sm ring-1 ring-emerald-600'
                        : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/70'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl" aria-hidden="true">{lang.flag || '🇮🇳'}</span>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-base font-extrabold text-slate-900 font-sans">
                              {lang.nativeLabel}
                            </span>
                            <span className="text-xs font-medium text-slate-500">
                              ({lang.label})
                            </span>
                          </div>
                          <span className="text-[11px] font-medium text-slate-500 block">
                            {lang.region}
                          </span>
                        </div>
                      </div>

                      {isSelected && (
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                      )}
                    </div>

                    {/* Voice Sample Button */}
                    <div className="mt-3 pt-2.5 border-t border-slate-200/80 flex items-center justify-between">
                      <span className="text-[11px] text-slate-500 italic truncate max-w-[180px]">
                        "{lang.greeting || 'Welcome'}"
                      </span>

                      <button
                        type="button"
                        id={`btn-voice-test-${lang.code}`}
                        onClick={(e) => handleTestVoice(lang.code, e)}
                        title={t.voiceTestTooltip}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition active:scale-95 ${
                          isSpeaking 
                            ? 'bg-emerald-600 text-white animate-pulse' 
                            : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-300'
                        }`}
                      >
                        <Volume2 className={`w-3.5 h-3.5 ${isSpeaking ? 'animate-bounce' : ''}`} />
                        <span>{isSpeaking ? t.voiceSoundboxPlaying : t.voiceTest}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Assistant Soundbox & Display Preferences */}
          <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Merchant Experience Features</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Dual-Language Toggle */}
              <div 
                id="dual-mode-preference-card"
                onClick={onToggleDualMode}
                role="button"
                tabIndex={0}
                className={`p-3.5 rounded-xl border transition cursor-pointer flex items-start gap-3 ${
                  dualMode 
                    ? 'border-emerald-500 bg-emerald-50/60' 
                    : 'border-slate-200 bg-white hover:bg-slate-100/50'
                }`}
              >
                <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                  dualMode ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-400 bg-white'
                }`}>
                  {dualMode && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    {t.dualLanguageToggle}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                    {t.dualLanguageDesc}
                  </p>
                </div>
              </div>

              {/* Auto Voice Announcement Toggle */}
              <div 
                id="auto-voice-preference-card"
                onClick={onToggleAutoVoice}
                role="button"
                tabIndex={0}
                className={`p-3.5 rounded-xl border transition cursor-pointer flex items-start gap-3 ${
                  autoVoice 
                    ? 'border-emerald-500 bg-emerald-50/60' 
                    : 'border-slate-200 bg-white hover:bg-slate-100/50'
                }`}
              >
                <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                  autoVoice ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-400 bg-white'
                }`}>
                  {autoVoice && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    {t.voiceAutoAnnounce}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                    {t.voiceAutoAnnounceDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Banking Terms Glossary in Simple Words */}
          <div className="space-y-3">
            <div className="border-b border-slate-200 pb-2">
              <h3 className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-emerald-600" />
                <span>{t.glossaryTitle}</span>
              </h3>
              <p className="text-xs text-slate-500">
                {t.glossarySubtext}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <h4 className="font-bold text-slate-900 flex items-center gap-1 text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  {t.glossaryMdrTitle}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {t.glossaryMdrDesc}
                </p>
              </div>

              <div className="p-3.5 bg-emerald-50/60 rounded-xl border border-emerald-200 space-y-1">
                <h4 className="font-bold text-emerald-950 flex items-center gap-1 text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  {t.glossaryZeroMdrTitle}
                </h4>
                <p className="text-emerald-900 leading-relaxed">
                  {t.glossaryZeroMdrDesc}
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <h4 className="font-bold text-slate-900 flex items-center gap-1 text-xs">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  {t.glossaryPpiTitle}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {t.glossaryPpiDesc}
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <h4 className="font-bold text-slate-900 flex items-center gap-1 text-xs">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  {t.glossaryRupayTitle}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {t.glossaryRupayDesc}
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1 sm:col-span-2">
                <h4 className="font-bold text-slate-900 flex items-center gap-1 text-xs">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  {t.glossaryGstTitle}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {t.glossaryGstDesc}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-100 px-5 sm:px-6 py-3.5 border-t border-slate-200 flex items-center justify-between rounded-b-3xl">
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>NPCI & RBI 2024 Standards</span>
          </div>

          <button
            id="btn-confirm-language-modal"
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition active:scale-95 shadow-sm"
          >
            {t.close}
          </button>
        </div>

      </div>
    </div>
  );
};
