# Privacy Policy for UPI Merchant MDR Calculator

**Effective Date:** September 20, 2026  
**Last Updated:** September 20, 2026  
**Application Name:** UPI Merchant MDR Calculator (PWA)  
**Applicable Platform:** Web & Progressive Web Application (PWA)  

---

## 1. Introduction & Core Privacy Commitment

**UPI Merchant MDR Calculator** ("the Application", "we", "us", or "our") is an independent financial utility designed for Indian retail merchants, shopkeepers, and small businesses to calculate, verify, and simulate Merchant Discount Rates (MDR), interchange fees, and Goods and Services Tax (GST) under regulations issued by the National Payments Corporation of India (NPCI), the Reserve Bank of India (RBI), and the Ministry of Electronics and Information Technology (MeitY).

We respect your privacy and are deeply committed to protecting your financial and personal confidentiality. **The Application is architected with a strict Privacy-by-Design philosophy: 100% client-side execution, offline-first operation, and zero data collection.**

---

## 2. Information We DO NOT Collect

The Application does **NOT** collect, transmit, store on remote servers, monitor, or monetize any of your data:

- **No Personal Identifiable Information (PII):** We do not collect names, email addresses, phone numbers, merchant IDs, physical addresses, or tax IDs (GSTIN/PAN).
- **No Financial Account Data:** We do not ask for, process, access, or store bank account numbers, IFSC codes, Virtual Payment Addresses (UPI IDs), credit/debit card numbers, CVVs, or transaction PINs.
- **No Transaction Telemetry:** The bill amounts, volume inputs, payment modes selected, and simulated earnings entered into the calculator are never sent across the internet.
- **No Advertising or Behavioral Tracking:** There are no third-party advertisements, behavioral trackers, telemetry beacons, Google Analytics, Facebook Pixel, or profiling scripts embedded within the Application.
- **No Device Fingerprinting:** We do not fingerprint your browser or track your location, device IMEI, or browsing history.

---

## 3. Local Storage Usage (On Your Device Only)

The Application uses standard client-side browser storage (`localStorage` and `CacheStorage`) strictly to provide necessary user interface preferences and offline capabilities:

| Storage Item Key | Purpose | Transmitted Over Network? |
| :--- | :--- | :--- |
| `upi_mdr_lang` | Remembers your preferred display language (English, Hindi, Telugu, Tamil, Marathi, Bengali). | **No** (Local device only) |
| `upi_mdr_dual_mode` | Remembers whether you enabled dual English + Regional banking terminology. | **No** (Local device only) |
| `upi_mdr_auto_voice` | Remembers your Soundbox auto-announcement toggle preference. | **No** (Local device only) |
| `upi_saved_calculations` | Stores calculation snapshots you voluntarily save via the "Save Calculation" button for offline reference. | **No** (Local device only) |
| Service Worker Cache | Caches static application files (HTML, CSS, JavaScript, icons) so the app works with zero internet connection. | **No** (Local device only) |

You retain total control over this data at all times. You can delete all saved calculations at any time by tapping **"Clear History"** inside the app, or by clearing your browser's site data.

---

## 4. Web Speech Synthesis & Soundbox Audio

The Application features an offline UPI Soundbox audio simulator that announces settlement totals in your selected language:

- Audio chimes are synthesized directly in your browser using the local HTML5 **Web Audio API** (sine/triangle oscillator synthesis).
- Spoken announcements utilize your device's native browser **SpeechSynthesis API** (`window.speechSynthesis`).
- **No microphone access** is requested or required.
- **No voice data or speech audio is recorded, sampled, stored, or transmitted** to any external server or third party.

---

## 5. Offline Capabilities & Service Workers (PWA)

When installed or viewed as a Progressive Web App (PWA), the application utilizes a Service Worker to cache necessary static visual and logic assets. This ensures:
- Full offline operability in environments with weak or no cellular reception (e.g., rural retail counters, basement shops).
- Instant loading without recurrent network fetching.
- Absolute isolation of your calculation inputs from network traffic.

---

## 6. Permissions

The Application requests **minimal to zero** device permissions:
- **Internet / Network Access:** Used solely to fetch static web application assets upon initial visit or service worker updates. Once loaded, the application operates entirely offline.
- **Microphone / Camera / Geolocation:** **NEVER REQUESTED OR USED.**

---

## 7. Legal Framework & Regulatory Compliance

This Privacy Policy complies with:
- **Digital Personal Data Protection Act (DPDP Act), 2023** (India)
- **Information Technology Act, 2000** and Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (India)
- Section 10A of the **Payment and Settlement Systems Act, 2007** (PSS Act)
- **NPCI & RBI Guidelines** on Merchant Discount Rate transparency

Because the Application does not collect, process, or transmit personal or sensitive data, you are not subject to data profiling, automated tracking, or commercial data sharing.

---

## 8. Children's Privacy

The Application does not address or solicit information from anyone under the age of 18. We do not knowingly collect personal information from minors.

---

## 9. Changes to This Privacy Policy

We may update this Privacy Policy from time to time to reflect regulatory updates or feature enhancements. The updated date at the top of this document will reflect any revisions. Changes are effective immediately upon posting.

---

## 10. Contact & Queries

If you have questions, feedback, or concerns regarding this Privacy Policy or the security of the application, you may contact:

- **Project:** UPI Merchant MDR Calculator
- **Repository / Support:** Built for transparent merchant calculation and compliance
- **Email Contact:** [kvakk1988@gmail.com](mailto:kvakk1988@gmail.com)
