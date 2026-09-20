import React from 'react';
import { WifiOff, Wifi } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

interface OfflineIndicatorProps {
  t: {
    offlineMode: string;
    offlineSubtext: string;
    onlineMode: string;
  };
}

export const OfflineIndicator: React.FC<OfflineIndicatorProps> = ({ t }) => {
  const isOnline = useOnlineStatus();

  if (isOnline) {
    return null;
  }

  return (
    <div 
      id="offline-banner"
      role="status"
      aria-live="polite"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 flex items-center gap-3 rounded-xl bg-amber-900/90 text-amber-100 px-4 py-3 shadow-2xl backdrop-blur-md border border-amber-500/40 text-sm animate-bounce"
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-slate-950 font-bold">
        <WifiOff className="h-4 w-4" />
      </div>
      <div className="flex-1">
        <p className="font-semibold text-white">{t.offlineMode}</p>
        <p className="text-xs text-amber-200/90">{t.offlineSubtext}</p>
      </div>
    </div>
  );
};
