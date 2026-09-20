import React from 'react';
import { 
  Bookmark, 
  Trash2, 
  Clock, 
  Percent, 
  AlertCircle 
} from 'lucide-react';
import { SavedCalculation } from '../types';
import { TranslationSchema } from '../i18n/translations';
import { formatINR } from '../utils/mdrCalculator';

interface SavedCalculationsProps {
  savedList: SavedCalculation[];
  onDeleteItem: (id: string) => void;
  onClearAll: () => void;
  t: TranslationSchema;
}

export const SavedCalculations: React.FC<SavedCalculationsProps> = ({
  savedList,
  onDeleteItem,
  onClearAll,
  t,
}) => {
  if (savedList.length === 0) {
    return (
      <div id="saved-empty-view" className="bg-white rounded-3xl p-10 border border-slate-200 text-center space-y-4">
        <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
          <Bookmark className="w-8 h-8" />
        </div>
        <div className="max-w-md mx-auto space-y-1">
          <h3 className="font-bold text-slate-800 text-base">
            {t.savedTitle}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            {t.savedEmpty}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div id="saved-history-view" className="space-y-4">
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bookmark className="w-5 h-5 text-emerald-600" />
          <h2 className="text-lg font-bold text-slate-900">
            {t.savedTitle} ({savedList.length})
          </h2>
        </div>
        <button
          onClick={onClearAll}
          className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 hover:text-rose-700 transition"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>{t.clearAllSaved}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {savedList.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3 relative group"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {item.date}
                </span>
                <h4 className="font-extrabold text-slate-900 text-lg mt-0.5">
                  {formatINR(item.amount)}
                </h4>
              </div>
              <button
                onClick={() => onDeleteItem(item.id)}
                title={t.deleteItem}
                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-slate-400 block">{t.netSettlement}</span>
                <span className="font-bold text-emerald-700 text-sm">
                  {formatINR(item.netPayout)}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">{t.totalDeduction}</span>
                <span className={`font-bold text-sm ${item.totalDeduction === 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {item.totalDeduction === 0 ? '₹0.00' : `- ${formatINR(item.totalDeduction)}`}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] bg-slate-50 px-2.5 py-1.5 rounded-lg text-slate-600 font-medium">
              <span className="capitalize">{item.mode.replace('_', ' ')}</span>
              <span>{item.effectiveRate.toFixed(2)}% fee</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
