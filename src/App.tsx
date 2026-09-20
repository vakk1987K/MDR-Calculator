/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  Building2, 
  Scale, 
  Bookmark, 
  HelpCircle,
  TrendingDown
} from 'lucide-react';
import { LanguageCode, SavedCalculation } from './types';
import { translations, TranslationSchema } from './i18n/translations';
import { TopLanguageBar } from './components/TopLanguageBar';
import { LanguageGlossaryModal } from './components/LanguageGlossaryModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { Header } from './components/Header';
import { SingleBillCalculator } from './components/SingleBillCalculator';
import { MonthlySimulator } from './components/MonthlySimulator';
import { NpciRulesSection } from './components/NpciRulesSection';
import { SavedCalculations } from './components/SavedCalculations';
import { OfflineIndicator } from './components/OfflineIndicator';

export default function App() {
  // Language state with localStorage persistence
  const [currentLang, setCurrentLang] = useState<LanguageCode>(() => {
    const saved = localStorage.getItem('upi_mdr_lang');
    if (saved && ['en', 'te', 'hi', 'mr', 'bn', 'ta'].includes(saved)) {
      return saved as LanguageCode;
    }
    return 'en';
  });

  // Modal for Language selection, audio test and merchant glossary
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState<boolean>(false);

  // Modal for Privacy Policy
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      return hash === '#privacy' || search.includes('privacy=true');
    }
    return false;
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.toLowerCase() === '#privacy') {
        setIsPrivacyModalOpen(true);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Dual-language mode (showing English banking acronyms alongside vernacular)
  const [dualMode, setDualMode] = useState<boolean>(() => {
    return localStorage.getItem('upi_mdr_dual_mode') === 'true';
  });

  // Soundbox auto-announcement mode
  const [autoVoice, setAutoVoice] = useState<boolean>(() => {
    return localStorage.getItem('upi_mdr_auto_voice') === 'true';
  });

  // Active view tab
  const [activeTab, setActiveTab] = useState<'single' | 'monthly' | 'rules' | 'saved'>('single');

  // Saved calculations history in localStorage
  const [savedCalculations, setSavedCalculations] = useState<SavedCalculation[]>(() => {
    try {
      const stored = localStorage.getItem('upi_mdr_saved_records');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Save lang on change
  const handleLanguageChange = (newLang: LanguageCode) => {
    setCurrentLang(newLang);
    localStorage.setItem('upi_mdr_lang', newLang);
  };

  const handleToggleDualMode = () => {
    setDualMode((prev) => {
      const next = !prev;
      localStorage.setItem('upi_mdr_dual_mode', String(next));
      return next;
    });
  };

  const handleToggleAutoVoice = () => {
    setAutoVoice((prev) => {
      const next = !prev;
      localStorage.setItem('upi_mdr_auto_voice', String(next));
      return next;
    });
  };

  // Add item to saved history
  const handleSaveCalculation = (calc: SavedCalculation) => {
    const updated = [calc, ...savedCalculations.slice(0, 49)];
    setSavedCalculations(updated);
    try {
      localStorage.setItem('upi_mdr_saved_records', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  };

  // Delete item
  const handleDeleteSavedItem = (id: string) => {
    const updated = savedCalculations.filter((item) => item.id !== id);
    setSavedCalculations(updated);
    localStorage.setItem('upi_mdr_saved_records', JSON.stringify(updated));
  };

  // Clear all
  const handleClearAllSaved = () => {
    setSavedCalculations([]);
    localStorage.removeItem('upi_mdr_saved_records');
  };

  const t: TranslationSchema = translations[currentLang] || translations.en;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      
      {/* Offline Status Indicator */}
      <OfflineIndicator
        t={{
          offlineMode: t.offlineMode,
          offlineSubtext: t.offlineSubtext,
          onlineMode: t.onlineMode,
        }}
      />

      {/* Prominent Top Language Ribbon */}
      <TopLanguageBar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        t={t}
        onOpenGuide={() => setIsLanguageModalOpen(true)}
        dualMode={dualMode}
        onToggleDualMode={handleToggleDualMode}
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
      />

      {/* Top Header */}
      <Header
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        t={t}
        onOpenLanguageModal={() => setIsLanguageModalOpen(true)}
      />

      {/* Language, Voice & Glossary Dialog */}
      <LanguageGlossaryModal
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
        currentLang={currentLang}
        onLanguageChange={(lang) => {
          handleLanguageChange(lang);
        }}
        t={t}
        dualMode={dualMode}
        onToggleDualMode={handleToggleDualMode}
        autoVoice={autoVoice}
        onToggleAutoVoice={handleToggleAutoVoice}
      />

      {/* Privacy Policy Dialog */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      {/* Navigation Tabs Bar */}
      <nav 
        aria-label="Primary Navigation"
        className="w-full bg-slate-900 border-b border-slate-800 text-slate-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex space-x-1 sm:space-x-4 overflow-x-auto py-2.5 no-scrollbar">
            
            <button
              id="tab-btn-single"
              role="tab"
              aria-selected={activeTab === 'single'}
              onClick={() => setActiveTab('single')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
                activeTab === 'single'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>{t.tabSingle}</span>
            </button>

            <button
              id="tab-btn-monthly"
              role="tab"
              aria-selected={activeTab === 'monthly'}
              onClick={() => setActiveTab('monthly')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
                activeTab === 'monthly'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>{t.tabMonthly}</span>
            </button>

            <button
              id="tab-btn-rules"
              role="tab"
              aria-selected={activeTab === 'rules'}
              onClick={() => setActiveTab('rules')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
                activeTab === 'rules'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>{t.tabRules}</span>
            </button>

            <button
              id="tab-btn-saved"
              role="tab"
              aria-selected={activeTab === 'saved'}
              onClick={() => setActiveTab('saved')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
                activeTab === 'saved'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Bookmark className="w-4 h-4" />
              <span>{t.tabSaved}</span>
              {savedCalculations.length > 0 && (
                <span className="ml-0.5 px-1.5 py-0.2 rounded-full text-[10px] font-black bg-slate-800 text-emerald-400">
                  {savedCalculations.length}
                </span>
              )}
            </button>

          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {activeTab === 'single' && (
          <SingleBillCalculator
            t={t}
            onSaveCalculation={handleSaveCalculation}
            currentLang={currentLang}
            dualMode={dualMode}
            autoVoice={autoVoice}
          />
        )}

        {activeTab === 'monthly' && (
          <MonthlySimulator
            t={t}
          />
        )}

        {activeTab === 'rules' && (
          <NpciRulesSection
            t={t}
          />
        )}

        {activeTab === 'saved' && (
          <SavedCalculations
            savedList={savedCalculations}
            onDeleteItem={handleDeleteSavedItem}
            onClearAll={handleClearAllSaved}
            t={t}
          />
        )}
      </main>

      {/* Accessible Footer */}
      <footer className="w-full border-t border-slate-200 bg-white py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-xs text-slate-500 space-y-2">
          <p className="font-semibold text-slate-700">
            {t.appName} — Progressive Web App (Offline Enabled)
          </p>
          <p className="max-w-xl mx-auto text-slate-400">
            Calculations strictly reflect Section 10A of the Payment and Settlement Systems Act, 2007, MeitY directives, and official NPCI interchange guidelines.
          </p>
          <p className="max-w-2xl mx-auto text-[10px] text-slate-400 leading-normal">
            Disclaimer: Independent calculation and simulation tool for merchant transparency. Not affiliated with, endorsed by, or representing NPCI, RBI, or any government authority. Does not process payments, accept deposits, or offer credit.
          </p>
          <div className="pt-1 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] text-slate-400">
            <span>✓ Works 100% Offline</span>
            <span>•</span>
            <span>✓ 18% GST Compliance</span>
            <span>•</span>
            <span>✓ 6 Indian Languages</span>
            <span>•</span>
            <button
              id="footer-privacy-policy-btn"
              type="button"
              onClick={() => setIsPrivacyModalOpen(true)}
              className="text-emerald-700 hover:text-emerald-900 font-bold underline underline-offset-2 transition"
            >
              Privacy Policy (Modal)
            </button>
            <span>•</span>
            <a
              id="footer-privacy-html-link"
              href="/privacy.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-700 font-semibold underline underline-offset-2 transition"
              title="Open standalone HTML privacy document"
            >
              Privacy URL (/privacy.html)
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
