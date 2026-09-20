import React, { useState } from 'react';
import { Download, Share2, X, Smartphone, CheckCircle } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  t: {
    installApp: string;
    installOnIos: string;
    iosInstructionsTitle: string;
    iosStep1: string;
    iosStep2: string;
    close: string;
    appInstalled: string;
  };
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ t }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already running as an installed PWA, show a subtle installed indicator or hide
  if (isInstalled) {
    return (
      <div 
        id="pwa-installed-badge"
        className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-950/40 text-emerald-300 border border-emerald-500/30"
        title="Running in Standalone Offline PWA Mode"
      >
        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
        <span>{t.appInstalled}</span>
      </div>
    );
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        id="btn-pwa-install"
        onClick={install}
        aria-label={t.installApp}
        className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
      >
        <Download className="w-4 h-4 shrink-0" />
        <span>{t.installApp}</span>
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          id="btn-pwa-install-ios"
          onClick={() => setShowIOSGuide(true)}
          aria-label={t.installOnIos}
          className="inline-flex items-center gap-2 rounded-xl bg-emerald-800/60 hover:bg-emerald-700/60 border border-emerald-500/40 px-3 py-1.5 text-xs font-semibold text-emerald-200 transition focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>{t.installOnIos}</span>
        </button>

        {showIOSGuide && (
          <div 
            id="ios-install-modal"
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4 animate-in fade-in"
          >
            <div className="w-full max-w-sm rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-2xl text-slate-100">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 font-semibold text-emerald-400">
                  <Smartphone className="w-5 h-5" />
                  <h3>{t.iosInstructionsTitle}</h3>
                </div>
                <button
                  id="btn-close-ios-modal"
                  onClick={() => setShowIOSGuide(false)}
                  aria-label={t.close}
                  className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-3 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold shrink-0">1</div>
                  <p className="leading-relaxed">
                    {t.iosStep1} <Share2 className="inline w-4 h-4 text-emerald-400 align-text-bottom ml-1" />
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold shrink-0">2</div>
                  <p className="leading-relaxed">{t.iosStep2}</p>
                </div>
              </div>
              <button
                id="btn-dismiss-ios-guide"
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 py-2.5 text-sm font-semibold text-white transition"
              >
                {t.close}
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
