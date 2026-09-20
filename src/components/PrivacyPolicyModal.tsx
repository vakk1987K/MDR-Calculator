/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  HardDrive, 
  EyeOff, 
  Volume2, 
  CheckCircle2, 
  FileText, 
  ExternalLink,
  Download,
  Copy,
  Check
} from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleCopyMarkdown = async () => {
    try {
      const resp = await fetch('/PRIVACY_POLICY.md');
      const text = await resp.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <div 
      id="privacy-policy-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 text-slate-900 flex flex-col">
        
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-slate-900 text-white px-5 sm:px-6 py-4 border-b border-slate-800 flex items-center justify-between rounded-t-3xl">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 font-black">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 id="privacy-modal-title" className="text-base sm:text-lg font-extrabold tracking-tight">
                Privacy Policy
              </h2>
              <p className="text-xs text-slate-400">
                100% Client-Side • Zero Data Collection • Offline First
              </p>
            </div>
          </div>
          
          <button
            id="close-privacy-modal-btn"
            type="button"
            onClick={onClose}
            aria-label="Close Privacy Policy"
            className="rounded-full p-2 text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6 text-slate-700 text-sm leading-relaxed flex-1">
          
          {/* Download & GitHub Export Ribbon */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                Official Policy Repository (Verified)
              </span>
              <p className="text-xs text-slate-300 mt-0.5">
                Publicly hosted on GitHub for Google Play compliance and merchant auditing.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
              <a
                id="btn-view-github-policy"
                href="https://github.com/vakk1987K/APP-Policy-documents/blob/main/MDR%20PRIVACY_POLICY.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-bold text-xs transition active:scale-95"
              >
                <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
                <span>View on GitHub</span>
              </a>

              <a
                id="btn-download-docx-privacy"
                href="/PRIVACY_POLICY.docx"
                download="UPI_Merchant_MDR_Calculator_Privacy_Policy.docx"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition active:scale-95 shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download .docx</span>
              </a>

              <button
                id="btn-copy-markdown-privacy"
                type="button"
                onClick={handleCopyMarkdown}
                title="Copy raw markdown"
                className="inline-flex items-center justify-center p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs transition active:scale-95"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Highlight Card */}
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
            <Lock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-extrabold text-emerald-950 text-sm">
                Strict Privacy-by-Design Guarantee
              </h3>
              <p className="text-xs text-emerald-900 mt-1">
                The UPI Merchant MDR Calculator does not collect, record, transmit, or share any personal, business, or financial data. All calculations execute entirely on your device.
              </p>
            </div>
          </div>

          {/* Key Privacy Pillars */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Core Privacy Principles</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <EyeOff className="w-4 h-4 text-emerald-600" />
                  <h4>No Data Collection</h4>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  We never ask for your name, phone number, email, UPI ID, bank account, or transaction PIN.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <HardDrive className="w-4 h-4 text-emerald-600" />
                  <h4>Local Storage Only</h4>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Preferences and saved calculations remain in your browser’s local storage. They are never transmitted over the network.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <Volume2 className="w-4 h-4 text-emerald-600" />
                  <h4>Local Voice Synthesis</h4>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Soundbox voice announcements use your device’s native Speech API and local oscillators. No audio is recorded or uploaded.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <h4>No Trackers or Ads</h4>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Zero third-party advertising, zero marketing analytics, and zero behavioral tracking scripts.
                </p>
              </div>

            </div>
          </div>

          {/* Section: Regulatory Compliance */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-2">
            <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-slate-700" />
              <span>Compliance with Indian Privacy Regulations</span>
            </h4>
            <p className="text-slate-600 leading-relaxed">
              This application is designed in compliance with the <strong>Digital Personal Data Protection Act (DPDP Act, 2023)</strong> and the <strong>Information Technology Act, 2000</strong>. Because zero personal data is collected or processed, user privacy is safeguarded by architecture.
            </p>
            <p className="text-slate-500 pt-1 border-t border-slate-200">
              Last Updated: September 20, 2026 • Contact: kvakk1988@gmail.com
            </p>
          </div>

          {/* Google Play Non-Government Disclaimer */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs space-y-1.5 text-amber-950">
            <h4 className="font-bold text-amber-900 flex items-center gap-1.5">
              <span>⚠️ Important Play Store & Regulatory Disclaimer</span>
            </h4>
            <p className="text-amber-900/90 leading-relaxed text-[11px]">
              This application is an independent educational and estimation calculator. It is <strong>NOT</strong> an official app of, authorized by, or affiliated with the National Payments Corporation of India (NPCI), the Reserve Bank of India (RBI), or any Government ministry.
            </p>
            <p className="text-amber-900/90 leading-relaxed text-[11px]">
              This utility does not provide loans, process payment transactions, accept deposits, or connect to banking APIs.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 px-5 sm:px-6 py-3.5 border-t border-slate-200 flex items-center justify-between rounded-b-3xl">
          <div className="text-xs text-slate-500 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Encrypted Local Sandbox</span>
          </div>

          <button
            id="btn-understand-privacy-modal"
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition active:scale-95 shadow-sm"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};
