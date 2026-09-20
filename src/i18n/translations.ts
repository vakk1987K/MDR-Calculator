/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageCode, LanguageOption } from '../types';

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { 
    code: 'en', 
    label: 'English', 
    nativeLabel: 'English', 
    region: 'Pan India & Business', 
    speechCode: 'en-IN',
    greeting: 'Welcome! Choose your language',
    flag: '🇬🇧'
  },
  { 
    code: 'hi', 
    label: 'Hindi', 
    nativeLabel: 'हिन्दी', 
    region: 'उत्तर व मध्य भारत (National)', 
    speechCode: 'hi-IN',
    greeting: 'नमस्ते! अपनी भाषा चुनें',
    flag: '🇮🇳'
  },
  { 
    code: 'te', 
    label: 'Telugu', 
    nativeLabel: 'తెలుగు', 
    region: 'ఆంధ్రప్రదేశ్ & తెలంగాణ (AP & TS)', 
    speechCode: 'te-IN',
    greeting: 'నమస్కారం! మీ భాషను ఎంచుకోండి',
    flag: '🇮🇳'
  },
  { 
    code: 'ta', 
    label: 'Tamil', 
    nativeLabel: 'தமிழ்', 
    region: 'தமிழ்நாடு & புதுச்சேரி (TN)', 
    speechCode: 'ta-IN',
    greeting: 'வணக்கம்! உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்',
    flag: '🇮🇳'
  },
  { 
    code: 'mr', 
    label: 'Marathi', 
    nativeLabel: 'मराठी', 
    region: 'महाराष्ट्र (Maharashtra)', 
    speechCode: 'mr-IN',
    greeting: 'नमस्कार! आपली भाषा निवडा',
    flag: '🇮🇳'
  },
  { 
    code: 'bn', 
    label: 'Bengali', 
    nativeLabel: 'বাংলা', 
    region: 'পশ্চিমবঙ্গ ও ত্রিপুরা (WB)', 
    speechCode: 'bn-IN',
    greeting: 'নমস্কার! আপনার ভাষা নির্বাচন করুন',
    flag: '🇮🇳'
  },
];

export interface TranslationSchema {
  appName: string;
  appTagline: string;
  badgeOfficial: string;
  badgeOfflineReady: string;
  appInstalled: string;
  installApp: string;
  installOnIos: string;
  iosInstructionsTitle: string;
  iosStep1: string;
  iosStep2: string;
  close: string;
  offlineMode: string;
  offlineSubtext: string;
  onlineMode: string;
  
  // Top Language & Soundbox Features
  topLanguagePrompt: string;
  topLanguageHelp: string;
  activeLangBadge: string;
  dualLanguageToggle: string;
  dualLanguageDesc: string;
  voiceSoundboxBtn: string;
  voiceSoundboxPlaying: string;
  voiceAutoAnnounce: string;
  voiceAutoAnnounceDesc: string;
  voiceTest: string;
  voiceTestTooltip: string;
  selectLanguageModalTitle: string;
  selectLanguageModalSubtext: string;

  // Merchant Glossary
  glossaryTitle: string;
  glossarySubtext: string;
  glossaryMdrTitle: string;
  glossaryMdrDesc: string;
  glossaryZeroMdrTitle: string;
  glossaryZeroMdrDesc: string;
  glossaryPpiTitle: string;
  glossaryPpiDesc: string;
  glossaryRupayTitle: string;
  glossaryRupayDesc: string;
  glossaryGstTitle: string;
  glossaryGstDesc: string;
  
  // Tabs
  tabSingle: string;
  tabMonthly: string;
  tabCompare: string;
  tabRules: string;
  tabSaved: string;

  // Single calculator
  enterAmount: string;
  quickAmounts: string;
  paymentMode: string;
  merchantCategory: string;
  customRateLabel: string;
  flatFeeLabel: string;
  
  // Modes
  modeStandardUpi: string;
  modeStandardUpiDesc: string;
  modeUpiPpi: string;
  modeUpiPpiDesc: string;
  modeRupayCc: string;
  modeRupayCcDesc: string;
  modeDebitCard: string;
  modeDebitCardDesc: string;
  modeCreditCard: string;
  modeCreditCardDesc: string;
  modeCustom: string;
  modeCustomDesc: string;

  // Categories
  catRetail: string;
  catSupermarket: string;
  catFuel: string;
  catEducationGovt: string;
  catRestaurant: string;
  catEcommerce: string;

  // Results
  calculationSummary: string;
  customerPays: string;
  baseMdr: string;
  gstOnMdr: string;
  totalDeduction: string;
  netSettlement: string;
  effectiveRate: string;
  zeroMdrApplied: string;
  zeroMdrNotice: string;
  interchangeFeeNotice: string;
  rupayNotice: string;
  gstClaimTip: string;
  
  // Actions
  copyBreakdown: string;
  copied: string;
  saveCalculation: string;
  savedSuccess: string;
  resetValues: string;
  viewDetails: string;

  // Mode comparison
  compareAllModes: string;
  compareSubtext: string;
  modeCol: string;
  rateCol: string;
  feeCol: string;
  settlementCol: string;
  statusCol: string;
  bestChoice: string;

  // Monthly Simulator
  monthlySimulatorTitle: string;
  monthlySimulatorSubtext: string;
  monthlyTurnoverLabel: string;
  avgTicketSizeLabel: string;
  soundboxRentalLabel: string;
  soundboxTip: string;
  paymentMixLabel: string;
  mixTotalMustBe100: string;
  monthlyGrossVolume: string;
  monthlyTotalMdr: string;
  monthlyTotalGst: string;
  monthlySoundboxCost: string;
  monthlyNetSettled: string;
  monthlyEffectiveFee: string;
  annualMdrImpact: string;
  gstItcPotential: string;

  // Rules & Guidance
  rulesTitle: string;
  rulesSubtext: string;
  rule1Title: string;
  rule1Body: string;
  rule2Title: string;
  rule2Body: string;
  rule3Title: string;
  rule3Body: string;
  rule4Title: string;
  rule4Body: string;
  disclaimerText: string;

  // Saved History
  savedTitle: string;
  savedEmpty: string;
  clearAllSaved: string;
  deleteItem: string;
}

export const translations: Record<LanguageCode, TranslationSchema> = {
  en: {
    appName: 'UPI Merchant MDR Calculator',
    appTagline: 'Estimate transaction MDR, 18% GST, & net bank payout with offline analysis',
    badgeOfficial: 'NPCI & RBI Compliant Guidelines',
    badgeOfflineReady: 'Offline Ready PWA',
    appInstalled: 'Installed PWA',
    installApp: 'Install App',
    installOnIos: 'Install on iOS',
    iosInstructionsTitle: 'Install on iPhone / iPad',
    iosStep1: 'Tap the Share icon in the Safari toolbar.',
    iosStep2: 'Scroll down and tap "Add to Home Screen".',
    close: 'Close',
    offlineMode: 'Offline Mode Active',
    offlineSubtext: 'All calculations running locally from device cache. No data lost.',
    onlineMode: 'Online',

    tabSingle: 'Single Bill',
    tabMonthly: 'Monthly Simulator',
    tabCompare: 'Compare Modes',
    tabRules: 'NPCI Rules',
    tabSaved: 'Saved History',

    enterAmount: 'Bill / Transaction Amount (₹)',
    quickAmounts: 'Quick Amount Add:',
    paymentMode: 'Payment Instrument / Mode',
    merchantCategory: 'Merchant Business Category (MCC)',
    customRateLabel: 'Negotiated MDR Rate (%)',
    flatFeeLabel: 'Flat Fee per transaction (₹)',

    modeStandardUpi: 'Standard UPI (Bank to Bank)',
    modeStandardUpiDesc: '0.00% Zero MDR mandated by Govt of India for VPA/Bank transfers',
    modeUpiPpi: 'UPI via Wallets / PPI',
    modeUpiPpiDesc: 'Paytm, PhonePe, Amazon Pay wallet. 0% ≤ ₹2,000; ~1.1% > ₹2,000',
    modeRupayCc: 'RuPay Credit Card on UPI',
    modeRupayCcDesc: '0% ≤ ₹2,000 for small merchants; ~1.99% for > ₹2,000 / standard',
    modeDebitCard: 'Debit Card (POS / BharatQR)',
    modeDebitCardDesc: 'RBI Capped: 0.40% up to ₹2,000; 0.90% above ₹2,000',
    modeCreditCard: 'Credit Card (Visa / Mastercard)',
    modeCreditCardDesc: 'Standard commercial rate ~1.85% to 2.50% + GST',
    modeCustom: 'Custom Gateway Rate',
    modeCustomDesc: 'Enter your custom agreed payment aggregator pricing',

    catRetail: 'Retail & Kirana (General Merchant)',
    catSupermarket: 'Supermarkets & Groceries (0.90% PPI)',
    catFuel: 'Fuel Stations & EV Charging (0.50% PPI)',
    catEducationGovt: 'Education, Govt & Utilities (0.50% PPI)',
    catRestaurant: 'Restaurants & Food Outlets',
    catEcommerce: 'E-Commerce & Online Orders',

    calculationSummary: 'Calculation Breakdown',
    customerPays: 'Customer Pays',
    baseMdr: 'Base MDR Fee',
    gstOnMdr: 'GST on MDR (18%)',
    totalDeduction: 'Total Provider Deduction',
    netSettlement: 'Net Settled in Bank',
    effectiveRate: 'Effective Cost Rate',
    zeroMdrApplied: '🎉 100% Zero MDR Applied!',
    zeroMdrNotice: 'Zero MDR applies under current Government of India / MeitY mandate.',
    interchangeFeeNotice: 'Interchange fee applies as amount exceeds ₹2,000 threshold for PPI wallets.',
    rupayNotice: 'RuPay CC on UPI attracts interchange fee for transactions above ₹2,000.',
    gstClaimTip: '💡 18% GST (₹{gst}) can be claimed back as Input Tax Credit (ITC) if you file GST returns.',

    copyBreakdown: 'Copy Breakdown',
    copied: 'Copied to Clipboard!',
    saveCalculation: 'Save Calculation',
    savedSuccess: 'Saved to Device!',
    resetValues: 'Reset',
    viewDetails: 'View Details',

    compareAllModes: 'Compare All Modes for this Amount',
    compareSubtext: 'See exact deductions and net payout across every payment method side-by-side',
    modeCol: 'Payment Method',
    rateCol: 'Rate (%)',
    feeCol: 'Total Deducted (incl. 18% GST)',
    settlementCol: 'You Receive (in Bank)',
    statusCol: 'Status',
    bestChoice: 'Best Value',

    monthlySimulatorTitle: 'Monthly Business Volume Simulator',
    monthlySimulatorSubtext: 'Simulate monthly revenue, payment instrument mix, and soundbox costs to see your net payout',
    monthlyTurnoverLabel: 'Estimated Monthly Digital Sales (₹)',
    avgTicketSizeLabel: 'Average Bill Size (₹)',
    soundboxRentalLabel: 'Soundbox / POS Monthly Rental (₹)',
    soundboxTip: 'Set ₹0 if using your personal phone with free audio chime notifications',
    paymentMixLabel: 'Payment Instrument Volume Mix (%)',
    mixTotalMustBe100: 'Mix percentages must total 100%',
    monthlyGrossVolume: 'Total Monthly Sales',
    monthlyTotalMdr: 'Total MDR Charges',
    monthlyTotalGst: 'Total GST Paid',
    monthlySoundboxCost: 'Terminal / Soundbox Rental',
    monthlyNetSettled: 'Final Net Bank Payout',
    monthlyEffectiveFee: 'Effective Blended Cost',
    annualMdrImpact: 'Annual MDR Expense Projection',
    gstItcPotential: 'Potential GST Input Tax Credit',

    rulesTitle: 'NPCI & RBI MDR Official Guidelines',
    rulesSubtext: 'Key regulations affecting Indian merchant payments and UPI interchange rules',
    rule1Title: 'Zero MDR Mandate on UPI (P2M)',
    rule1Body: 'Section 10A of the Payment and Settlement Systems Act, 2007 mandates zero Merchant Discount Rate on UPI bank-to-bank transactions. Acquiring banks and aggregators cannot deduct MDR from merchants for standard QR payments.',
    rule2Title: 'Prepaid Wallets (PPI) on UPI (> ₹2,000)',
    rule2Body: 'From April 1, 2023, NPCI introduced an interchange fee (typically 1.10%) solely on merchant transactions exceeding ₹2,000 initiated via PPI wallets (like Paytm/PhonePe wallets). Transactions up to ₹2,000 remain 100% free.',
    rule3Title: 'RuPay Credit Card Linked to UPI',
    rule3Body: 'Under NPCI circular, transactions up to ₹2,000 on RuPay credit cards have 0% MDR for small merchants (turnover up to ₹20 lakh). For transactions above ₹2,000, acquiring rates (~1.99% + 18% GST) apply.',
    rule4Title: 'No Surcharging on Consumers',
    rule4Body: 'RBI and NPCI strictly prohibit merchants from passing MDR fees directly to consumers as an added surcharge on UPI payments.',
    disclaimerText: 'Note: MDR rates, gateway margins, and soundbox rentals vary slightly by acquiring bank and aggregator (Paytm, BharatPe, PhonePe, Pine Labs, Razorpay). This calculator adheres to standard NPCI interchange benchmarks.',

    savedTitle: 'Locally Saved Calculations',
    savedEmpty: 'No calculations saved yet. Tap "Save Calculation" in the Single Bill tab to store quick offline reference snapshots.',
    clearAllSaved: 'Clear History',
    deleteItem: 'Delete',

    // Top Language & Soundbox Features
    topLanguagePrompt: 'Choose Language / भाषा चुनें',
    topLanguageHelp: 'Language Guide & Voice Preview',
    activeLangBadge: 'Active',
    dualLanguageToggle: 'Dual Terms (Eng + Regional)',
    dualLanguageDesc: 'Shows English banking acronyms (MDR, GST, POS, PPI) alongside regional terms',
    voiceSoundboxBtn: 'Soundbox Voice',
    voiceSoundboxPlaying: 'Announcing...',
    voiceAutoAnnounce: 'Auto Voice',
    voiceAutoAnnounceDesc: 'Announce settlement automatically on calculation',
    voiceTest: 'Test Voice Audio',
    voiceTestTooltip: 'Plays simulated UPI Soundbox announcement in this language',
    selectLanguageModalTitle: 'Select Your Language / भाषा चुनें',
    selectLanguageModalSubtext: 'Choose your preferred language for calculations, receipts, and audio announcements.',

    // Merchant Glossary
    glossaryTitle: 'Merchant Banking Terms Explained',
    glossarySubtext: 'Simple layperson definitions of Indian payment processing terms',
    glossaryMdrTitle: 'Merchant Discount Rate (MDR)',
    glossaryMdrDesc: 'The percentage fee charged by the payment gateway or bank to process card and wallet payments. Standard UPI has 0.00% Zero MDR.',
    glossaryZeroMdrTitle: 'Zero MDR Rule (0.00%)',
    glossaryZeroMdrDesc: 'Under Section 10A of the PSS Act, banks and payment apps (Paytm, PhonePe, GPay) cannot charge merchants any fee when customers scan UPI QR from bank accounts.',
    glossaryPpiTitle: 'Prepaid Wallets (PPI)',
    glossaryPpiDesc: 'Payments made from mobile wallets (e.g. Paytm Wallet balance). Transactions under ₹2,000 are 100% free; an interchange fee applies above ₹2,000.',
    glossaryRupayTitle: 'RuPay Credit Card on UPI',
    glossaryRupayDesc: 'Customers paying via credit card linked to UPI. Transactions up to ₹2,000 are completely free (0% MDR) for small merchants.',
    glossaryGstTitle: '18% GST on MDR Fee',
    glossaryGstDesc: 'GST is calculated ONLY on the bank’s deduction fee, never on your customer’s total transaction amount. Registered merchants can claim this back as ITC.',
  },

  hi: {
    appName: 'UPI मर्चेंट MDR कैलकुलेटर',
    appTagline: 'लेन-देन MDR, 18% GST और शुद्ध बैंक भुगतान का ऑफलाइन विश्लेषण',
    badgeOfficial: 'NPCI व RBI के आधिकारिक नियम',
    badgeOfflineReady: 'ऑफलाइन सक्षम PWA',
    appInstalled: 'इंस्टॉल किया गया PWA',
    installApp: 'ऐप इंस्टॉल करें',
    installOnIos: 'iOS पर इंस्टॉल करें',
    iosInstructionsTitle: 'iPhone / iPad पर इंस्टॉल करें',
    iosStep1: 'Safari टूलबार में शेयर आइकन पर टैप करें।',
    iosStep2: 'नीचे स्क्रॉल करें और "होम स्क्रीन में जोड़ें" पर टैप करें।',
    close: 'बंद करें',
    offlineMode: 'ऑफलाइन मोड सक्रिय',
    offlineSubtext: 'सभी गणनाएं बिना इंटरनेट स्थानीय कैश से हो रही हैं।',
    onlineMode: 'ऑनलाइन',

    tabSingle: 'एकल बिल',
    tabMonthly: 'मासिक विश्लेषण',
    tabCompare: 'तरीकों की तुलना',
    tabRules: 'NPCI नियम',
    tabSaved: 'सहेजे गए बिल',

    enterAmount: 'बिल / लेन-देन राशि (₹)',
    quickAmounts: 'त्वरित राशि जोड़ें:',
    paymentMode: 'भुगतान माध्यम / साधन',
    merchantCategory: 'व्यापार श्रेणी (MCC)',
    customRateLabel: 'तय की गई MDR दर (%)',
    flatFeeLabel: 'प्रति लेन-देन फ्लैट शुल्क (₹)',

    modeStandardUpi: 'मानक UPI (बैंक से बैंक)',
    modeStandardUpiDesc: 'भारत सरकार द्वारा शून्य MDR (0.00%) अनिवार्य',
    modeUpiPpi: 'UPI वॉलेट / PPI द्वारा',
    modeUpiPpiDesc: 'Paytm, PhonePe वॉलेट। ₹2,000 तक 0%; ₹2,000 से ऊपर ~1.1%',
    modeRupayCc: 'UPI पर RuPay क्रेडिट कार्ड',
    modeRupayCcDesc: 'छोटे व्यापारियों हेतु ₹2,000 तक 0%; ऊपर ~1.99%',
    modeDebitCard: 'डेबिट कार्ड (POS / BharatQR)',
    modeDebitCardDesc: 'RBI सीमा: ₹2,000 तक 0.40%; ₹2,000 से ऊपर 0.90%',
    modeCreditCard: 'क्रेडिट कार्ड (Visa / Mastercard)',
    modeCreditCardDesc: 'मानक व्यावसायिक दर ~1.85% से 2.50% + GST',
    modeCustom: 'कस्टम गेटवे दर',
    modeCustomDesc: 'अपने बैंक या गेटवे से तय दर दर्ज करें',

    catRetail: 'खुदरा व किराना दुकान',
    catSupermarket: 'सुपरमार्केट और ग्रॉसरी (0.90% PPI)',
    catFuel: 'पेट्रोल पंप व EV चार्जिंग (0.50% PPI)',
    catEducationGovt: 'शिक्षा, सरकारी सेवा व बिल (0.50% PPI)',
    catRestaurant: 'रेस्तरां व भोजनालय',
    catEcommerce: 'ई-कॉमर्स व ऑनलाइन ऑर्डर',

    calculationSummary: 'कटौती व भुगतान विवरण',
    customerPays: 'ग्राहक द्वारा भुगतान',
    baseMdr: 'मूल MDR शुल्क',
    gstOnMdr: 'MDR पर 18% GST',
    totalDeduction: 'कुल कटौती',
    netSettlement: 'बैंक खाते में शुद्ध जमा',
    effectiveRate: 'प्रभावी लागत दर',
    zeroMdrApplied: '🎉 100% शून्य MDR लागू!',
    zeroMdrNotice: 'भारत सरकार के नियमानुसार मानक UPI पर कोई MDR नहीं कटता।',
    interchangeFeeNotice: 'राशि ₹2,000 से अधिक होने के कारण वॉलेट पर इंटरचेंज शुल्क लागू।',
    rupayNotice: '₹2,000 से अधिक के RuPay क्रेडिट कार्ड लेन-देन पर शुल्क लागू होता है।',
    gstClaimTip: '💡 GST रिटर्न भरते समय 18% GST (₹{gst}) का इनपुट टैक्स क्रेडिट (ITC) वापस पाएं।',

    copyBreakdown: 'विवरण कॉपी करें',
    copied: 'क्लिपबोर्ड में कॉपी हुआ!',
    saveCalculation: 'गणना सहेजें',
    savedSuccess: 'सफलतापूर्वक सहेजा गया!',
    resetValues: 'रीसेट',
    viewDetails: 'विस्तार देखें',

    compareAllModes: 'इस राशि के लिए सभी माध्यमों की तुलना',
    compareSubtext: 'हर भुगतान माध्यम में मिलने वाली शुद्ध राशि और कटौती एक साथ देखें',
    modeCol: 'भुगतान माध्यम',
    rateCol: 'दर (%)',
    feeCol: 'कुल कटौती (18% GST सहित)',
    settlementCol: 'आपको मिलेगा (बैंक में)',
    statusCol: 'स्थिति',
    bestChoice: 'सबसे किफायती',

    monthlySimulatorTitle: 'मासिक व्यापार आय व खर्च सिम्युलेटर',
    monthlySimulatorSubtext: 'मासिक बिक्री, भुगतान मिश्रण व साउंडबॉक्स किराए के अनुसार शुद्ध लाभ जानें',
    monthlyTurnoverLabel: 'अनुमानित मासिक डिजिटल बिक्री (₹)',
    avgTicketSizeLabel: 'औसत बिल राशि (₹)',
    soundboxRentalLabel: 'साउंडबॉक्स / POS मासिक किराया (₹)',
    soundboxTip: 'यदि मुफ़्त फोन ऐप ध्वनि सूचना का उपयोग कर रहे हैं तो ₹0 रखें',
    paymentMixLabel: 'भुगतान माध्यमों का प्रतिशत हिस्सा (%)',
    mixTotalMustBe100: 'सभी हिस्सों का कुल योग 100% होना चाहिए',
    monthlyGrossVolume: 'कुल मासिक बिक्री',
    monthlyTotalMdr: 'कुल MDR शुल्क',
    monthlyTotalGst: 'कुल GST भुगतान',
    monthlySoundboxCost: 'साउंडबॉक्स किराया',
    monthlyNetSettled: 'बैंक में शुद्ध प्राप्ति',
    monthlyEffectiveFee: 'कुल प्रभावी खर्च दर',
    annualMdrImpact: 'वार्षिक MDR खर्च अनुमान',
    gstItcPotential: 'संभावित GST इनपुट टैक्स क्रेडिट',

    rulesTitle: 'NPCI व RBI के आधिकारिक दिशानिर्देश',
    rulesSubtext: 'व्यापारियों और UPI भुगतानों पर लागू प्रमुख नियम',
    rule1Title: 'UPI (P2M) पर शून्य MDR का नियम',
    rule1Body: 'भुगतान व निपटान प्रणाली अधिनियम की धारा 10A के तहत मानक UPI बैंक ट्रांसफर पर MDR शून्य है। बैंक या गेटवे व्यापारी से शुल्क नहीं ले सकते।',
    rule2Title: 'प्रीपेड वॉलेट्स (PPI) पर नियम (> ₹2,000)',
    rule2Body: '1 अप्रैल 2023 से NPCI ने केवल ₹2,000 से अधिक के वॉलेट भुगतानों पर 1.10% इंटरचेंज तय किया। ₹2,000 तक पूरी तरह निःशुल्क है।',
    rule3Title: 'UPI से जुड़ा RuPay क्रेडिट कार्ड',
    rule3Body: 'छोटे व्यापारियों (वार्षिक टर्नओवर ₹20 लाख तक) के लिए ₹2,000 तक शून्य MDR है। ₹2,000 से ऊपर लगभग 1.99% + 18% GST लगता है।',
    rule4Title: 'ग्राहकों से अतिरिक्त अधिभार (सरचार्ज) वर्जित',
    rule4Body: 'RBI और NPCI के नियमानुसार व्यापारी UPI भुगतान पर ग्राहकों से अतिरिक्त सरचार्ज नहीं वसूल सकते।',
    disclaimerText: 'नोट: बैंक व गेटवे (Paytm, BharatPe, PhonePe, Pine Labs) के आधार पर दरों में मामूली अंतर हो सकता है। यह कैलकुलेटर आधिकारिक NPCI मानकों पर आधारित है।',

    savedTitle: 'ऑफलाइन सहेजी गई गणनाएं',
    savedEmpty: 'कोई गणना सहेजी नहीं गई है। "गणना सहेजें" बटन दबाकर इसे ऑफलाइन उपयोग के लिए सहेजें।',
    clearAllSaved: 'इतिहास साफ करें',
    deleteItem: 'हटाएं',

    // Top Language & Soundbox Features
    topLanguagePrompt: 'भाषा चुनें / Choose Language',
    topLanguageHelp: 'भाषा व आवाज़ मार्गदर्शिका',
    activeLangBadge: 'सक्रिय',
    dualLanguageToggle: 'द्विभाषी शब्द (हिंदी + Eng)',
    dualLanguageDesc: 'हिंदी के साथ अंग्रेजी बैंकिंग शब्द (MDR, GST, POS) भी देखें',
    voiceSoundboxBtn: 'साउंडबॉक्स आवाज़',
    voiceSoundboxPlaying: 'आवाज़ बोल रही है...',
    voiceAutoAnnounce: 'ऑटो आवाज़',
    voiceAutoAnnounceDesc: 'गणना बदलते ही स्वतः साउंडबॉक्स आवाज़ में घोषणा करें',
    voiceTest: 'आवाज़ सुनें व टेस्ट करें',
    voiceTestTooltip: 'इस भाषा में UPI साउंडबॉक्स आवाज़ की टेस्टिंग करें',
    selectLanguageModalTitle: 'अपनी भाषा चुनें / Select Language',
    selectLanguageModalSubtext: 'गणना, रसीद और साउंडबॉक्स आवाज़ के लिए अपनी पसंदीदा भाषा चुनें।',

    // Merchant Glossary
    glossaryTitle: 'व्यापारी बैंकिंग शब्दावली',
    glossarySubtext: 'MDR, GST और UPI से जुड़े तकनीकी शब्दों का आसान हिंदी में अर्थ',
    glossaryMdrTitle: 'MDR (मर्चेंट डिस्काउंट रेट) क्या है?',
    glossaryMdrDesc: 'कार्ड या वॉलेट से पेमेंट लेने पर बैंक द्वारा काटा जाने वाला सेवा शुल्क। सामान्य UPI पर MDR शून्य (0%) है।',
    glossaryZeroMdrTitle: 'जीरो MDR नियम (0.00%)',
    glossaryZeroMdrDesc: 'भारत सरकार के कानून के तहत, बैंक या QR ऐप (Paytm, PhonePe, Google Pay) सामान्य UPI पेमेंट पर व्यापारी से 1 पैसा भी नहीं काट सकते।',
    glossaryPpiTitle: 'PPI वॉलेट (Paytm/PhonePe वॉलेट) क्या है?',
    glossaryPpiDesc: 'जब ग्राहक वॉलेट बैलेंस से पेमेंट करते हैं। ₹2,000 तक का पेमेंट 100% मुफ्त है; ₹2,000 से अधिक पर इंटरचेंज शुल्क लगता है।',
    glossaryRupayTitle: 'UPI पर RuPay क्रेडिट कार्ड क्या है?',
    glossaryRupayDesc: 'छोटे व्यापारियों (वार्षिक टर्नओवर ₹20 लाख तक) के लिए RuPay क्रेडिट कार्ड से ₹2,000 तक का पेमेंट 100% मुफ्त (0% MDR) है।',
    glossaryGstTitle: 'MDR पर 18% GST क्या है?',
    glossaryGstDesc: '18% GST केवल बैंक के सेवा शुल्क (MDR) पर लगता है, ग्राहक के पूरे बिल पर नहीं। GST नंबर वाले व्यापारी इसे ITC के रूप में क्लेम कर सकते हैं।',
  },

  te: {
    appName: 'UPI మర్చంట్ MDR కాలిక్యులేటర్',
    appTagline: 'లావాదేవీల MDR, 18% GST మరియు బ్యాంకు చెల్లింపుల పూర్తి విశ్లేషణ',
    badgeOfficial: 'NPCI & RBI అధికారిక నిబంధనలు',
    badgeOfflineReady: 'ఆఫ్‌లైన్ సిద్ధంగా ఉన్న PWA',
    appInstalled: 'ఇన్‌స్టాల్ చేయబడిన PWA',
    installApp: 'యాప్ ఇన్‌స్టాల్ చేయండి',
    installOnIos: 'iOS లో ఇన్‌స్టాల్ చేయండి',
    iosInstructionsTitle: 'iPhone / iPad లో ఇన్‌స్టాల్ విధానం',
    iosStep1: 'Safari లో షేర్ (Share) చిహ్నంపై నొక్కండి.',
    iosStep2: 'క్రిందికి స్క్రోల్ చేసి "Add to Home Screen" ఎంచుకోండి.',
    close: 'మూసివేయి',
    offlineMode: 'ఆఫ్‌లైన్ మోడ్ సక్రియం',
    offlineSubtext: 'ఇంటర్నెట్ లేకుండా మీ పరికరంలోనే లెక్కలు జరుగుతున్నాయి.',
    onlineMode: 'ఆన్‌లైన్',

    tabSingle: 'ఒకే లావాదేవీ',
    tabMonthly: 'నెలవారీ విశ్లేషణ',
    tabCompare: 'పద్ధతుల పోలిక',
    tabRules: 'NPCI నిబంధనలు',
    tabSaved: 'భద్రపరిచినవి',

    enterAmount: 'బిల్లు / లావాదేవీ మొత్తం (₹)',
    quickAmounts: 'త్వరిత మొత్తం:',
    paymentMode: 'చెల్లింపు విధానం / సాధనం',
    merchantCategory: 'వ్యాపార విభాగం (MCC)',
    customRateLabel: 'ఖరారైన MDR శాతం (%)',
    flatFeeLabel: 'లావాదేవీకి ఫ్లాట్ ఫీజు (₹)',

    modeStandardUpi: 'సాధారణ UPI (బ్యాంక్ టు బ్యాంక్)',
    modeStandardUpiDesc: 'భారత ప్రభుత్వం ప్రకారం 0.00% జీరో MDR',
    modeUpiPpi: 'UPI వాలెట్ / PPI ద్వారా',
    modeUpiPpiDesc: 'Paytm, PhonePe వాలెట్. ₹2,000 వరకు 0%; పైన ~1.1%',
    modeRupayCc: 'UPI లో RuPay క్రెడిట్ కార్డు',
    modeRupayCcDesc: 'చిన్న వ్యాపారులకు ₹2,000 వరకు 0%; పైన ~1.99%',
    modeDebitCard: 'డెబిట్ కార్డు (POS / BharatQR)',
    modeDebitCardDesc: 'RBI పరిమితి: ₹2,000 వరకు 0.40%; పైన 0.90%',
    modeCreditCard: 'క్రెడిట్ కార్డు (Visa / Mastercard)',
    modeCreditCardDesc: 'ప్రామాణిక రేటు ~1.85% నుండి 2.50% + GST',
    modeCustom: 'కస్టమ్ గేట్‌వే రేటు',
    modeCustomDesc: 'మీ బ్యాంక్ లేదా గేట్‌వే నిర్ధారించిన రేటు నమోదు చేయండి',

    catRetail: 'కిరాణా మరియు సాధారణ చిల్లర దుకాణాలు',
    catSupermarket: 'సూపర్ మార్కెట్లు & నిత్యావసరాలు (0.90% PPI)',
    catFuel: 'పెట్రోల్ బంకులు & EV ఛార్జింగ్ (0.50% PPI)',
    catEducationGovt: 'విద్య, ప్రభుత్వ సేవలు & బిల్లులు (0.50% PPI)',
    catRestaurant: 'రెస్టారెంట్లు & ఆహార కేంద్రాలు',
    catEcommerce: 'ఈ-కామర్స్ & ఆన్‌లైన్ ఆర్డర్లు',

    calculationSummary: 'మినహాయింపు & చెల్లింపు వివరాలు',
    customerPays: 'కస్టమర్ చెల్లించినది',
    baseMdr: 'మూల MDR ఫీజు',
    gstOnMdr: 'MDR పై 18% GST',
    totalDeduction: 'మొత్తం మినహాయింపు',
    netSettlement: 'బ్యాంకులో జమ అయ్యే మొత్తం',
    effectiveRate: 'నికర ఖర్చు శాతం',
    zeroMdrApplied: '🎉 100% జీరో MDR వర్తిస్తుంది!',
    zeroMdrNotice: 'సాధారణ UPI లావాదేవీలపై ఎటువంటి MDR ఛార్జీలు ఉండవు.',
    interchangeFeeNotice: 'వాలెట్ ద్వారా ₹2,000 మించినందున ఇంటర్‌ఛేంజ్ ఫీజు వర్తిస్తుంది.',
    rupayNotice: '₹2,000 మించిన RuPay క్రెడిట్ కార్డు లావాదేవీలపై ఫీజు వర్తిస్తుంది.',
    gstClaimTip: '💡 జీఎస్టీ రిటర్న్స్ దాఖలు చేసే వ్యాపారులు 18% GST (₹{gst}) ని తిరిగి పొందవచ్చు (ITC).',

    copyBreakdown: 'వివరాలు కాపీ చేయండి',
    copied: 'కాపీ చేయబడింది!',
    saveCalculation: 'లెక్కను భద్రపరచండి',
    savedSuccess: 'విజయవంతంగా సేవ్ చేయబడింది!',
    resetValues: 'రీసెట్',
    viewDetails: 'వివరాలు చూడండి',

    compareAllModes: 'ఈ మొత్తానికి అన్ని విధానాల పోలిక',
    compareSubtext: 'ప్రతి చెల్లింపు పద్ధతిలో మీకు లభించే బ్యాంకు మొత్తం మరియు కటింగ్లను పోల్చండి',
    modeCol: 'చెల్లింపు విధానం',
    rateCol: 'రేటు (%)',
    feeCol: 'మొత్తం కటింగ్ (18% GST సహా)',
    settlementCol: 'మీ బ్యాంకులో జమ అయ్యేది',
    statusCol: 'స్థితి',
    bestChoice: 'ఉత్తమమైనది',

    monthlySimulatorTitle: 'నెలవారీ వ్యాపార ఆదాయ విశ్లేషణ',
    monthlySimulatorSubtext: 'నెలవారీ అమ్మకాలు, చెల్లింపుల మిశ్రమం మరియు సౌండ్‌బాక్స్ ఖర్చుల పూర్తి లెక్క',
    monthlyTurnoverLabel: 'అంచనా నెలవారీ డిజిటల్ వ్యాపారం (₹)',
    avgTicketSizeLabel: 'సగటు బిల్లు మొత్తం (₹)',
    soundboxRentalLabel: 'సౌండ్‌బాక్స్ / POS నెలవారీ అద్దె (₹)',
    soundboxTip: 'ఉచిత మొబైల్ సౌండ్ నోటిఫికేషన్ ఉపయోగిస్తుంటే ₹0 నమోదు చేయండి',
    paymentMixLabel: 'చెల్లింపు పద్ధతుల శాతం (%)',
    mixTotalMustBe100: 'అన్ని విలువల మొత్తం 100% కావాలి',
    monthlyGrossVolume: 'మొత్తం నెల అమ్మకాలు',
    monthlyTotalMdr: 'మొత్తం MDR ఛార్జీలు',
    monthlyTotalGst: 'మొత్తం చెల్లించిన GST',
    monthlySoundboxCost: 'సౌండ్‌బాక్స్ అద్దె',
    monthlyNetSettled: 'బ్యాంకులో నికర జమ',
    monthlyEffectiveFee: 'సగటు ఖర్చు శాతం',
    annualMdrImpact: 'వార్షిక MDR ఖర్చు అంచనా',
    gstItcPotential: 'తిరిగి పొందగల GST క్లెయిమ్ (ITC)',

    rulesTitle: 'NPCI & RBI అధికారిక నిబంధనలు',
    rulesSubtext: 'వ్యాపారులకు వర్తించే నిబంధనలు మరియు మార్గదర్శకాలు',
    rule1Title: 'UPI పై జీరో MDR నిబంధన',
    rule1Body: 'చెల్లింపుల చట్టం సెక్షన్ 10A ప్రకారం బ్యాంక్ టు బ్యాంక్ UPI పై MDR పూర్తిగా సున్నా. వ్యాపారుల వద్ద ఎలాంటి రుసుము వసూలు చేయరాదు.',
    rule2Title: 'ప్రీపెయిడ్ వాలెట్లు (PPI) నిబంధన (> ₹2,000)',
    rule2Body: '1 ఏప్రిల్ 2023 నుండి కేవలం ₹2,000 మించిన వాలెట్ లావాదేవీలపై మాత్రమే 1.10% ఫీజు వర్తిస్తుంది. ₹2,000 వరకు పూర్తిగా ఉచితం.',
    rule3Title: 'UPI లో RuPay క్రెడిట్ కార్డు',
    rule3Body: 'చిన్న వ్యాపారులకు ₹2,000 వరకు 0% MDR. ఆ పైన సాధారణ రేటు (~1.99% + 18% GST) వర్తిస్తుంది.',
    rule4Title: 'కస్టమర్లపై అదనపు ఛార్జీలు వేయరాదు',
    rule4Body: 'UPI చెల్లింపులపై కస్టమర్ల నుండి అదనపు ఫీజు (సర్‌ఛార్జ్) వసూలు చేయడం నిబంధనలకు విరుద్ధం.',
    disclaimerText: 'గమనిక: బ్యాంకులు మరియు గేట్‌వేలు (Paytm, PhonePe, BharatPe, Pine Labs) ప్రకారం రేట్లలో స్వల్ప మార్పులు ఉండవచ్చు.',

    savedTitle: 'ఆఫ్‌లైన్‌లో భద్రపరిచిన లెక్కలు',
    savedEmpty: 'ఇంకా ఏ లెక్కలు భద్రపరచలేదు. "లెక్కను భద్రపరచండి" పై నొక్కి భద్రపరచండి.',
    clearAllSaved: 'చరిత్రను తొలగించు',
    deleteItem: 'తొలగించు',

    // Top Language & Soundbox Features
    topLanguagePrompt: 'భాషను ఎంచుకోండి / Choose Language',
    topLanguageHelp: 'భాష & ఆడియో గైడ్',
    activeLangBadge: 'యాక్టివ్',
    dualLanguageToggle: 'ద్విభాషా మోడ్ (తెలుగు + Eng)',
    dualLanguageDesc: 'తెలుగుతో పాటు ఆంగ్ల బ్యాంకింగ్ పదాలు (MDR, GST, POS, PPI) కూడా చూడండి',
    voiceSoundboxBtn: 'సౌండ్‌బాక్స్ వాయిస్',
    voiceSoundboxPlaying: 'వాయిస్ చెబుతోంది...',
    voiceAutoAnnounce: 'ఆటో వాయిస్',
    voiceAutoAnnounceDesc: 'మొత్తం లెక్కించిన వెంటనే ఆటోమేటిక్‌గా వాయిస్ వినిపిస్తుంది',
    voiceTest: 'వాయిస్ టెస్ట్ చేయండి',
    voiceTestTooltip: 'ఈ భాషలో UPI సౌండ్‌బాక్స్ వాయిస్ ప్రకటనను వినండి',
    selectLanguageModalTitle: 'మీ భాషను ఎంచుకోండి / Select Language',
    selectLanguageModalSubtext: 'లెక్కలు, రశీదులు మరియు సౌండ్‌బాక్స్ వాయిస్ ప్రకటనల కోసం మీ మాతృభాషను ఎంచుకోండి.',

    // Merchant Glossary
    glossaryTitle: 'వ్యాపారి బ్యాంకింగ్ పదాల గైడ్',
    glossarySubtext: 'MDR, GST మరియు UPI సాంకేతిక పదాల సులభమైన వివరణ',
    glossaryMdrTitle: 'MDR (మర్చంట్ డిస్కౌంట్ రేట్) అంటే ఏమిటి?',
    glossaryMdrDesc: 'కార్డులు లేదా వాలెట్ల ద్వారా చెల్లింపులను స్వీకరించినప్పుడు బ్యాంకు లేదా గేట్‌వే కట్ చేసుకునే సర్వీస్ ఫీజు. సాధారణ UPI కి 0.00% ఫీజు ఉంటుంది.',
    glossaryZeroMdrTitle: 'జీరో MDR నిబంధన (0.00%)',
    glossaryZeroMdrDesc: 'భారత ప్రభుత్వ చట్టం ప్రకారం, కస్టమర్ బ్యాంక్ టు బ్యాంక్ UPI QR స్కాన్ చేసినప్పుడు వ్యాపారి నుండి ఒక్క పైసా కూడా కట్ చేయకూడదు.',
    glossaryPpiTitle: 'PPI వాలెట్లు (Paytm, PhonePe Wallet) అంటే ఏమిటి?',
    glossaryPpiDesc: 'కస్టమర్లు వాలెట్ బ్యాలెన్స్ ద్వారా చెల్లించినప్పుడు, ₹2,000 వరకు 100% ఉచితం; ₹2,000 దాటితే మాత్రమే ఇంటర్‌ఛేంజ్ ఛార్జ్ పడుతుంది.',
    glossaryRupayTitle: 'UPI పై RuPay క్రెడిట్ కార్డు అంటే ఏమిటి?',
    glossaryRupayDesc: 'చిన్న వ్యాపారులకు RuPay క్రెడిట్ కార్డు ద్వారా వచ్చే ₹2,000 లోపు చెల్లింపులకు 0% ఫీజు. ₹2,000 దాటితే రుసుము వర్తిస్తుంది.',
    glossaryGstTitle: 'MDR పై 18% GST',
    glossaryGstDesc: '18% GST అనేది బ్యాంక్ కట్ చేసుకున్న సర్వీస్ ఫీజుపై మాత్రమే పడుతుంది, కస్టమర్ మొత్తం బిల్లుపై కాదు. GST ఉన్న వ్యాపారులు దీన్ని ITC గా క్లెయిమ్ చేసుకోవచ్చు.',
  },

  ta: {
    appName: 'UPI வணிகர் MDR கால்குலேட்டர்',
    appTagline: 'பரிவர்த்தனை MDR, 18% GST மற்றும் வங்கி வரவு தொகையை ஆஃப்லைனில் கணக்கிடுங்கள்',
    badgeOfficial: 'NPCI & RBI அதிகாரப்பூர்வ வழிகாட்டுதல்',
    badgeOfflineReady: 'ஆஃப்லைன் PWA தயார்',
    appInstalled: 'நிறுவப்பட்ட PWA',
    installApp: 'செயலியை நிறுவு',
    installOnIos: 'iOS இல் நிறுவு',
    iosInstructionsTitle: 'iPhone / iPad இல் நிறுவும் முறை',
    iosStep1: 'Safari கருவிப்பட்டையில் பகிர் (Share) ஐகானைத் தட்டவும்.',
    iosStep2: 'கீழே உருட்டி "முகப்புத் திரையில் சேர்" என்பதைத் தட்டவும்.',
    close: 'மூடு',
    offlineMode: 'ஆஃப்லைன் பயன்முறை இயங்குகிறது',
    offlineSubtext: 'இணையம் இன்றி கணக்கீடுகள் உங்கள் சாதனத்தில் சீராக இயங்கும்.',
    onlineMode: 'ஆன்லைன்',

    tabSingle: 'ஒற்றை பில்',
    tabMonthly: 'மாதாந்திர மதிப்பீடு',
    tabCompare: 'முறைகள் ஒப்பீடு',
    tabRules: 'NPCI விதிகள்',
    tabSaved: 'சேமிக்கப்பட்டவை',

    enterAmount: 'பில் / பரிவர்த்தனை தொகை (₹)',
    quickAmounts: 'விரைவு தொகை சேர்:',
    paymentMode: 'செலுத்தும் முறை / கருவி',
    merchantCategory: 'வணிக வகை (MCC)',
    customRateLabel: 'ஒப்புக்கொண்ட MDR விகிதம் (%)',
    flatFeeLabel: 'பரிவர்த்தனைக்கான நிலையான கட்டணம் (₹)',

    modeStandardUpi: 'நிலையான UPI (வங்கி கணக்கு வழி)',
    modeStandardUpiDesc: 'இந்திய அரசு உத்தரவின்படி 0.00% கட்டணமில்லா பூஜ்ஜிய MDR',
    modeUpiPpi: 'UPI வாலட் / PPI வழி',
    modeUpiPpiDesc: 'Paytm, PhonePe வாலட். ₹2,000 வரை 0%; அதற்கு மேல் ~1.1%',
    modeRupayCc: 'UPI இல் RuPay கிரெடிட் கார்டு',
    modeRupayCcDesc: 'சிறு வணிகர்களுக்கு ₹2,000 வரை 0%; மேல் ~1.99%',
    modeDebitCard: 'டெபிட் கார்டு (POS / BharatQR)',
    modeDebitCardDesc: 'RBI உச்சவரம்பு: ₹2,000 வரை 0.40%; மேல் 0.90%',
    modeCreditCard: 'கிரெடிட் கார்டு (Visa / Mastercard)',
    modeCreditCardDesc: 'நிலையான வர்த்தக விகிதம் ~1.85% முதல் 2.50% + GST',
    modeCustom: 'தனிப்பயன் நுழைவாயில் கட்டணம்',
    modeCustomDesc: 'உங்கள் வங்கியுடன் முடிவு செய்த கட்டண விகிதம் உள்ளிடவும்',

    catRetail: 'சில்லறை & மளிகைக் கடைகள்',
    catSupermarket: 'சூப்பர் மார்க்கெட் & பலசரக்கு (0.90% PPI)',
    catFuel: 'பெட்ரோல் பங்க் & EV சார்ஜிங் (0.50% PPI)',
    catEducationGovt: 'கல்வி, அரசு கட்டணங்கள் (0.50% PPI)',
    catRestaurant: 'உணவகங்கள் & சிற்றுண்டிச்சாலை',
    catEcommerce: 'இ-காமர்ஸ் & ஆன்லைன் ஆர்டர்கள்',

    calculationSummary: 'கழித்தல் & வரவு விவரங்கள்',
    customerPays: 'வாடிக்கையாளர் செலுத்தியது',
    baseMdr: 'அடிப்படை MDR கட்டணம்',
    gstOnMdr: 'MDR மீதான 18% GST',
    totalDeduction: 'மொத்த சேவை கழிப்பு',
    netSettlement: 'வங்கி கணக்கில் வரவு வைக்கப்பட்ட நிகர தொகை',
    effectiveRate: 'உண்மையான செலவு விகிதம்',
    zeroMdrApplied: '🎉 100% பூஜ்ஜிய MDR பொருந்தும்!',
    zeroMdrNotice: 'நிலையான UPI பரிவர்த்தனைகளுக்கு எந்த கட்டணமும் கழிக்கப்படாது.',
    interchangeFeeNotice: '₹2,000-க்கு மேல் வாலட் பரிவர்த்தனை என்பதால் கட்டணம் பொருந்தும்.',
    rupayNotice: '₹2,000-க்கு மேற்பட்ட RuPay கிரெடிட் கார்டு பரிவர்த்தனைக்கு கட்டணம் உண்டு.',
    gstClaimTip: '💡 GST தாக்கல் செய்யும் வணிகர்கள் 18% GST (₹{gst}) தொகையை உள்ளீட்டு வரியாக (ITC) பெறலாம்.',

    copyBreakdown: 'விவரங்களை நகலெடு',
    copied: 'நகலெடுக்கப்பட்டது!',
    saveCalculation: 'கணக்கீட்டை சேமி',
    savedSuccess: 'வெற்றிகரமாக சேமிக்கப்பட்டது!',
    resetValues: 'மீட்டமை',
    viewDetails: 'முழு விவரம்',

    compareAllModes: 'இந்த தொகைக்கு அனைத்து முறைகளின் ஒப்பீடு',
    compareSubtext: 'ஒவ்வொரு முறையிலும் நீங்கள் பெறும் நிகர தொகை மற்றும் கழிப்புகளை அருகருகே ஒப்பிடுங்கள்',
    modeCol: 'செலுத்தும் முறை',
    rateCol: 'விகிதம் (%)',
    feeCol: 'மொத்த கழிப்பு (18% GST உடன்)',
    settlementCol: 'உங்களுக்கு கிடைக்கும் தொகை',
    statusCol: 'நிலை',
    bestChoice: 'சிறந்தது',

    monthlySimulatorTitle: 'மாதாந்திர வணிக வருவாய் மதிப்பீடு',
    monthlySimulatorSubtext: 'மாத விற்பனை, கட்டண முறைகளின் பகிர்வு மற்றும் சவுண்ட்பாக்ஸ் கட்டணங்களுக்கான முழு கணக்கு',
    monthlyTurnoverLabel: 'மதிப்பிடப்பட்ட மாதாந்திர டிஜிட்டல் விற்பனை (₹)',
    avgTicketSizeLabel: 'சராசரி பில் தொகை (₹)',
    soundboxRentalLabel: 'சவுண்ட்பாக்ஸ் / POS மாதாந்திர வாடகை (₹)',
    soundboxTip: 'இலவச மொபைல் ஆப் குரல் அறிவிப்பை பயன்படுத்தினால் ₹0 என வைக்கவும்',
    paymentMixLabel: 'கட்டண முறைகளின் பங்கு (%)',
    mixTotalMustBe100: 'அனைத்து பங்குகளின் கூடுதல் 100% ஆக இருக்க வேண்டும்',
    monthlyGrossVolume: 'மொத்த மாதாந்திர விற்பனை',
    monthlyTotalMdr: 'மொத்த MDR செலவு',
    monthlyTotalGst: 'செலுத்தப்பட்ட மொத்த GST',
    monthlySoundboxCost: 'சவுண்ட்பாக்ஸ் வாடகை',
    monthlyNetSettled: 'வங்கிக்கு செல்லும் நிகர தொகை',
    monthlyEffectiveFee: 'சராசரி செலவு சதவீதம்',
    annualMdrImpact: 'ஆண்டு MDR செலவு மதிப்பீடு',
    gstItcPotential: 'திரும்பப் பெறக்கூடிய GST வரி (ITC)',

    rulesTitle: 'NPCI & RBI அதிகாரப்பூர்வ வழிகாட்டுதல்கள்',
    rulesSubtext: 'இந்திய வணிகர்கள் மற்றும் UPI பரிவர்த்தனைகளுக்கான முக்கிய விதிகள்',
    rule1Title: 'UPI இல் பூஜ்ஜிய MDR விதி',
    rule1Body: 'செக்ஷன் 10A விதிகளின்படி நிலையான UPI வங்கி பரிமாற்றங்களுக்கு MDR கட்டணம் முற்றிலும் பூஜ்ஜியம். வங்கிகள் வணிகரிடம் கட்டணம் வசூலிக்க முடியாது.',
    rule2Title: 'ப்ரீபெய்ட் வாலட்கள் (PPI) விதி (> ₹2,000)',
    rule2Body: '1 ஏப்ரல் 2023 முதல் ₹2,000-க்கு அதிகமான வாலட் பரிவர்த்தனைகளுக்கு மட்டுமே 1.10% கட்டணம். ₹2,000 வரை கட்டணமில்லை.',
    rule3Title: 'UPI இல் RuPay கிரெடிட் கார்டு',
    rule3Body: 'சிறு வணிகர்களுக்கு ₹2,000 வரை 0% MDR. அதற்கு மேல் (~1.99% + 18% GST) கட்டணம் பொருந்தும்.',
    rule4Title: 'வாடிக்கையாளர்களிடம் கூடுதல் கட்டணம் வசூலிக்க தடை',
    rule4Body: 'UPI பரிவர்த்தனைகளுக்கு வாடிக்கையாளர்களிடம் கூடுதல் கட்டணம் (Surcharge) வசூலிப்பது தடை செய்யப்பட்டுள்ளது.',
    disclaimerText: 'குறிப்பு: வங்கிகள் மற்றும் நிறுவனங்களை (Paytm, BharatPe, PhonePe, Pine Labs) பொறுத்து கட்டணத்தில் சிறு மாற்றங்கள் இருக்கலாம்.',

    savedTitle: 'ஆஃப்லைனில் சேமிக்கப்பட்டவை',
    savedEmpty: 'எந்த கணக்கீடுகளும் சேமிக்கப்படவில்லை. "கணக்கீட்டை சேமி" பொத்தானை அழுத்தி சேமிக்கவும்.',
    clearAllSaved: 'வரலாற்றை நீக்கு',
    deleteItem: 'நீக்கு',

    // Top Language & Soundbox Features
    topLanguagePrompt: 'மொழியைத் தேர்ந்தெடுக்கவும் / Choose Language',
    topLanguageHelp: 'மொழி மற்றும் குரல் வழிகாட்டி',
    activeLangBadge: 'செயலில்',
    dualLanguageToggle: 'இருமொழி முறை (தமிழ் + Eng)',
    dualLanguageDesc: 'தமிழுடன் ஆங்கில வங்கி சொற்களையும் (MDR, GST, POS) காண்க',
    voiceSoundboxBtn: 'சவுண்ட்பாக்ஸ் குரல்',
    voiceSoundboxPlaying: 'குரல் ஒலிக்கிறது...',
    voiceAutoAnnounce: 'தானியங்கி குரல்',
    voiceAutoAnnounceDesc: 'கணக்கிடும்போது தானாகவே சவுண்ட்பாக்ஸ் குரலில் அறிவிக்கும்',
    voiceTest: 'குரல் சோதனை',
    voiceTestTooltip: 'இந்த மொழியில் யுபிஐ சவுண்ட்பாக்ஸ் குரல் அறிவிப்பை சோதிக்கவும்',
    selectLanguageModalTitle: 'உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்',
    selectLanguageModalSubtext: 'கணக்கீடு, ரசீது மற்றும் குரல் அறிவிப்புகளுக்கு விருப்பமான மொழியைத் தேர்ந்தெடுக்கவும்.',

    // Merchant Glossary
    glossaryTitle: 'வணிகர் வங்கி சொற்களஞ்சியம்',
    glossarySubtext: 'MDR, GST மற்றும் UPI விதிமுறைகளின் எளிய விளக்கம்',
    glossaryMdrTitle: 'MDR என்றால் என்ன?',
    glossaryMdrDesc: 'கார்டு அல்லது வாலெட் பரிவர்த்தனைகளுக்கு வங்கி கழிக்கும் கட்டணம். நிலையான UPI-க்கு 0.00% கட்டணம்.',
    glossaryZeroMdrTitle: 'பூஜ்ஜிய MDR விதி (0.00%)',
    glossaryZeroMdrDesc: 'இந்திய சட்டப்படி வங்கி டு வங்கி UPI பரிவர்த்தனைகளுக்கு வணிகர்களிடம் எந்த கட்டணமும் பிடிக்கக் கூடாது.',
    glossaryPpiTitle: 'PPI வாலெட் என்றால் என்ன?',
    glossaryPpiDesc: 'Paytm அல்லது PhonePe வாலெட் மூலம் செலுத்துவது. ₹2,000 வரை 100% இலவசம்; ₹2,000க்கு மேல் மட்டுமே கட்டணம்.',
    glossaryRupayTitle: 'UPI இல் RuPay கிரெடிட் கார்டு',
    glossaryRupayDesc: 'சிறு வணிகர்களுக்கு RuPay கிரெடிட் கார்டு மூலம் ₹2,000 வரை பரிவர்த்தனைகளுக்கு 0% MDR கட்டணம்.',
    glossaryGstTitle: 'MDR கட்டணத்தில் 18% GST',
    glossaryGstDesc: 'வங்கி பிடித்த கட்டணத்தின் மீது மட்டுமே 18% GST வசூலிக்கப்படும், மொத்த பில் தொகையின் மீது அல்ல. GST பதிவு பெற்றவர்கள் ITC பெறலாம்.',
  },

  mr: {
    appName: 'UPI मर्चंट MDR कॅल्क्युलेटर',
    appTagline: 'व्यवहार MDR, 18% GST आणि बँक खात्यातील निव्वळ रकमेचे ऑफलाइन विश्लेषण',
    badgeOfficial: 'NPCI व RBI अधिकृत मार्गदर्शक तत्त्वे',
    badgeOfflineReady: 'ऑफलाइन सक्षम PWA',
    appInstalled: 'इन्स्टॉल केलेले PWA',
    installApp: 'अ‍ॅप इन्स्टॉल करा',
    installOnIos: 'iOS वर इन्स्टॉल करा',
    iosInstructionsTitle: 'iPhone / iPad वर इन्स्टॉल करण्याची पद्धत',
    iosStep1: 'Safari टूलबारमध्ये शेअर आयकॉनवर टॅप करा.',
    iosStep2: 'खाली स्क्रोल करा आणि "Add to Home Screen" निवडा.',
    close: 'बंद करा',
    offlineMode: 'ऑफलाइन मोड सक्रिय',
    offlineSubtext: 'इंटरनेटशिवाय सर्व आकडेमोड तुमच्या डिव्हाइसवर सुरळीत चालू आहे.',
    onlineMode: 'ऑनलाइन',

    tabSingle: 'एकल बिल',
    tabMonthly: 'मासिक विश्लेषण',
    tabCompare: 'पद्धतींची तुलना',
    tabRules: 'NPCI नियम',
    tabSaved: 'जतन केलेले',

    enterAmount: 'बिल / व्यवहाराची रक्कम (₹)',
    quickAmounts: 'त्वरित रक्कम जोडा:',
    paymentMode: 'पेमेंट माध्यम / साधन',
    merchantCategory: 'व्यवसाय श्रेणी (MCC)',
    customRateLabel: 'ठरलेला MDR दर (%)',
    flatFeeLabel: 'प्रति व्यवहार निश्चित शुल्क (₹)',

    modeStandardUpi: 'प्रमाणित UPI (बँक ते बँक)',
    modeStandardUpiDesc: 'भारत सरकारद्वारे 0.00% शून्य MDR अनिवार्य',
    modeUpiPpi: 'UPI वॉलेट / PPI द्वारे',
    modeUpiPpiDesc: 'Paytm, PhonePe वॉलेट. ₹2,000 पर्यंत 0%; वर ~1.1%',
    modeRupayCc: 'UPI वर RuPay क्रेडिट कार्ड',
    modeRupayCcDesc: 'लहान व्यापाऱ्यांसाठी ₹2,000 पर्यंत 0%; वर ~1.99%',
    modeDebitCard: 'डेबिट कार्ड (POS / BharatQR)',
    modeDebitCardDesc: 'RBI मर्यादा: ₹2,000 पर्यंत 0.40%; वर 0.90%',
    modeCreditCard: 'क्रेडिट कार्ड (Visa / Mastercard)',
    modeCreditCardDesc: 'प्रमाणित व्यावसायिक दर ~1.85% ते 2.50% + GST',
    modeCustom: 'कस्टम गेटवे दर',
    modeCustomDesc: 'तुमच्या बँक किंवा गेटवेनुसार ठरलेला दर प्रविष्ट करा',

    catRetail: 'किराणा व किरकोळ दुकाने',
    catSupermarket: 'सुपरमार्केट व ग्रॉसरी (0.90% PPI)',
    catFuel: 'पेट्रोल पंप व EV चार्जिंग (0.50% PPI)',
    catEducationGovt: 'शिक्षण, सरकारी सेवा व बिल (0.50% PPI)',
    catRestaurant: 'हॉटेल्स व रेस्टॉरंट्स',
    catEcommerce: 'ई-कॉमर्स व ऑनलाइन ऑर्डर',

    calculationSummary: 'कपात व जमा तपशील',
    customerPays: 'ग्राहकाने भरलेली रक्कम',
    baseMdr: 'मूळ MDR शुल्क',
    gstOnMdr: 'MDR वर 18% GST',
    totalDeduction: 'एकूण सेवा कपात',
    netSettlement: 'बँक खात्यात जमा निव्वळ रक्कम',
    effectiveRate: 'प्रभावी खर्च दर',
    zeroMdrApplied: '🎉 100% शून्य MDR लागू!',
    zeroMdrNotice: 'प्रमाणित UPI बँक व्यवहारांवर कोणतेही MDR शुल्क कापले जात नाही.',
    interchangeFeeNotice: 'रक्कम ₹2,000 पेक्षा जास्त असल्याने वॉलेटवर इंटरचेंज शुल्क लागू.',
    rupayNotice: '₹2,000 पेक्षा जास्त RuPay क्रेडिट कार्ड व्यवहारांवर शुल्क आकारले जाते.',
    gstClaimTip: '💡 GST रिटर्न भरणाऱ्या व्यापाऱ्यांना 18% GST (₹{gst}) चा इनपुट टॅक्स क्रेडिट (ITC) मिळतो.',

    copyBreakdown: 'तपशील कॉपी करा',
    copied: 'कॉपी झाले!',
    saveCalculation: 'गणना जतन करा',
    savedSuccess: 'यशस्वीरीत्या जतन केले!',
    resetValues: 'रीसेट करा',
    viewDetails: 'तपशील पहा',

    compareAllModes: 'या रकमेसाठी सर्व पद्धतींची तुलना',
    compareSubtext: 'प्रत्येक पेमेंट पद्धतीमध्ये मिळणारी रक्कम आणि कपात एकाच ठिकाणी तपासा',
    modeCol: 'पेमेंट माध्यम',
    rateCol: 'दर (%)',
    feeCol: 'एकूण कपात (18% GST सह)',
    settlementCol: 'तुम्हाला मिळणारी रक्कम',
    statusCol: 'स्थिती',
    bestChoice: 'सर्वात फायदेशीर',

    monthlySimulatorTitle: 'मासिक व्यवसाय उलाढाल सिम्युलेटर',
    monthlySimulatorSubtext: 'मासिक विक्री, पेमेंट पद्धतींचे प्रमाण आणि साउंडबॉक्स खर्चासह निव्वळ उत्पन्न जाणून घ्या',
    monthlyTurnoverLabel: 'अंदाजे मासिक डिजिटल विक्री (₹)',
    avgTicketSizeLabel: 'सरासरी बिल रक्कम (₹)',
    soundboxRentalLabel: 'साउंडबॉक्स / POS मासिक भाडे (₹)',
    soundboxTip: 'मोफत मोबाइल आवाज सूचना वापरत असल्यास ₹0 ठेवा',
    paymentMixLabel: 'पेमेंट पद्धतींचे टक्केवारी प्रमाण (%)',
    mixTotalMustBe100: 'सर्व प्रमाणांची बेरीज 100% असणे आवश्यक आहे',
    monthlyGrossVolume: 'एकूण मासिक विक्री',
    monthlyTotalMdr: 'एकूण MDR शुल्क',
    monthlyTotalGst: 'भरलेला एकूण GST',
    monthlySoundboxCost: 'साउंडबॉक्स भाडे',
    monthlyNetSettled: 'बँकेत जमा होणारी निव्वळ रक्कम',
    monthlyEffectiveFee: 'सरासरी खर्च टक्केवारी',
    annualMdrImpact: 'वार्षिक MDR खर्च अंदाज',
    gstItcPotential: 'परत मिळण्याजोगा GST क्रेडिट (ITC)',

    rulesTitle: 'NPCI व RBI अधिकृत मार्गदर्शक तत्त्वे',
    rulesSubtext: 'व्यापारी आणि UPI व्यवहारांवर लागू असलेले महत्त्वाचे नियम',
    rule1Title: 'UPI वर शून्य MDR चा नियम',
    rule1Body: 'पेमेंट सिस्टीम्स कायद्याच्या कलम 10A नुसार बँक ते बँक UPI वर MDR पूर्णपणे शून्य आहे. बँका व्यापाऱ्याकडून शुल्क घेऊ शकत नाहीत.',
    rule2Title: 'प्रीपेड वॉलेट्स (PPI) नियम (> ₹2,000)',
    rule2Body: '1 एप्रिल 2023 पासून ₹2,000 पेक्षा जास्त वॉलेट व्यवहारांवर 1.10% शुल्क आकारले जाते. ₹2,000 पर्यंत पूर्ण मोफत आहे.',
    rule3Title: 'UPI वर RuPay क्रेडिट कार्ड',
    rule3Body: 'लहान व्यापाऱ्यांसाठी ₹2,000 पर्यंत 0% MDR. त्यावरील व्यवहारांवर (~1.99% + 18% GST) शुल्क लागू होते.',
    rule4Title: 'ग्राहकांवर अतिरिक्त अधिभार लावण्यास बंदी',
    rule4Body: 'UPI पेमेंट स्वीकारताना ग्राहकांकडून अतिरिक्त अधिभार (सरचार्ज) घेणे कायद्याने निषिद्ध आहे.',
    disclaimerText: 'टीप: बँका व गेटवे (Paytm, BharatPe, PhonePe, Pine Labs) नुसार शुल्कात किंचित फरक असू शकतो.',

    savedTitle: 'ऑफलाइन जतन केलेली आकडेमोड',
    savedEmpty: 'अद्याप कोणतीही गणना जतन केलेली नाही. "गणना जतन करा" बटणावर क्लिक करून जतन करा.',
    clearAllSaved: 'इतिहास साफ करा',
    deleteItem: 'हटवा',

    // Top Language & Soundbox Features
    topLanguagePrompt: 'भाषा निवडा / Choose Language',
    topLanguageHelp: 'भाषा व आवाज मार्गदर्शक',
    activeLangBadge: 'सक्रिय',
    dualLanguageToggle: 'द्विभाषिक मोड (मराठी + Eng)',
    dualLanguageDesc: 'मराठीसोबत इंग्रजी बँकिंग शब्द (MDR, GST, POS) देखील पहा',
    voiceSoundboxBtn: 'साउंडबॉक्स आवाज',
    voiceSoundboxPlaying: 'आवाज सुरू आहे...',
    voiceAutoAnnounce: 'ऑटो आवाज',
    voiceAutoAnnounceDesc: 'हिशोब बदलताच आपोआप साउंडबॉक्स आवाजात घोषणा करा',
    voiceTest: 'आवाज तपासा',
    voiceTestTooltip: 'या भाषेत UPI साउंडबॉक्स आवाजाची चाचणी घ्या',
    selectLanguageModalTitle: 'आपली भाषा निवडा / Select Language',
    selectLanguageModalSubtext: 'हिशोब, पावती आणि साउंडबॉक्स आवाजासाठी आपली पसंतीची भाषा निवडा.',

    // Merchant Glossary
    glossaryTitle: 'व्यापारी बँकिंग शब्दावली',
    glossarySubtext: 'MDR, GST आणि UPI तांत्रिक शब्दांचा सोप्या मराठीत अर्थ',
    glossaryMdrTitle: 'MDR (मर्चंट डिस्काउंट रेट) म्हणजे काय?',
    glossaryMdrDesc: 'कार्ड किंवा वॉलेट पेमेंटवर बँकेने आकारलेले सेवा शुल्क. सामान्य UPI वर 0.00% शून्य MDR आहे.',
    glossaryZeroMdrTitle: 'शून्य MDR नियम (0.00%)',
    glossaryZeroMdrDesc: 'भारत सरकारच्या कायद्यानुसार, बँकेकडून बँक UPI QR पेमेंटवर व्यापाऱ्याकडून 1 रुपयाही कापला जाऊ शकत नाही.',
    glossaryPpiTitle: 'PPI वॉलेट (Paytm/PhonePe) म्हणजे काय?',
    glossaryPpiDesc: 'वॉलेट शिल्लक रकमेतून केलेले पेमेंट. ₹2,000 पर्यंत 100% मोफत; ₹2,000 पेक्षा जास्त रकमेवर इंटरचेंज शुल्क लागते.',
    glossaryRupayTitle: 'UPI वर RuPay क्रेडिट कार्ड',
    glossaryRupayDesc: 'लहान व्यापाऱ्यांसाठी RuPay क्रेडिट कार्डद्वारे ₹2,000 पर्यंतच्या पेमेंटवर 0% शुल्क.',
    glossaryGstTitle: 'MDR शुल्कावर 18% GST',
    glossaryGstDesc: '18% GST फक्त बँकेच्या शुल्कावर आकारला जातो, ग्राहकाच्या एकूण बिलावर नाही. GST नोंदणीकृत व्यापारी ITC क्लेम करू शकतात.',
  },

  bn: {
    appName: 'UPI মার্চেন্ট MDR ক্যালকুলেটর',
    appTagline: 'লেনদেন MDR, ১৮% GST এবং ব্যাংকে জমা হওয়া নীট টাকার অফলাইন হিসাব',
    badgeOfficial: 'NPCI এবং RBI নির্দেশিকা অনুযায়ী',
    badgeOfflineReady: 'অফলাইন সক্ষম PWA',
    appInstalled: 'ইনস্টল করা PWA',
    installApp: 'অ্যাপ ইনস্টল করুন',
    installOnIos: 'iOS-এ ইনস্টল করুন',
    iosInstructionsTitle: 'iPhone / iPad-এ ইনস্টল করার নিয়ম',
    iosStep1: 'Safari টুলবারে শেয়ার (Share) আইকনে ট্যাপ করুন।',
    iosStep2: 'নিচে স্ক্রোল করে "Add to Home Screen" বেছে নিন।',
    close: 'বন্ধ করুন',
    offlineMode: 'অফলাইন মোড সক্রিয়',
    offlineSubtext: 'ইন্টারনেট ছাড়াই সমস্ত হিসাব আপনার ডিভাইসে নিরাপদে হচ্ছে।',
    onlineMode: 'অনলাইন',

    tabSingle: 'একক বিল',
    tabMonthly: 'মাসিক বিশ্লেষণ',
    tabCompare: 'পদ্ধতি তুলনা',
    tabRules: 'NPCI নিয়মাবলী',
    tabSaved: 'সংরক্ষিত হিসাব',

    enterAmount: 'বিল / লেনদেনের পরিমাণ (₹)',
    quickAmounts: 'দ্রুত টাকা যোগ করুন:',
    paymentMode: 'পেমেন্ট মাধ্যম / পদ্ধতি',
    merchantCategory: 'ব্যবসার ধরন (MCC)',
    customRateLabel: 'নির্ধারিত MDR হার (%)',
    flatFeeLabel: 'প্রতি লেনদেনে নির্দিষ্ট ফি (₹)',

    modeStandardUpi: 'সাধারণ UPI (ব্যাংক থেকে ব্যাংক)',
    modeStandardUpiDesc: 'ভারত সরকারের নির্দেশনায় 0.00% শূন্য MDR প্রযোজ্য',
    modeUpiPpi: 'UPI ওয়ালেট / PPI দ্বারা',
    modeUpiPpiDesc: 'Paytm, PhonePe ওয়ালেট। ₹২,০০০ পর্যন্ত ০%; উপরে ~১.১%',
    modeRupayCc: 'UPI-তে RuPay ক্রেডিট কার্ড',
    modeRupayCcDesc: 'ছোট ব্যবসায়ীদের জন্য ₹২,০০০ পর্যন্ত ০%; উপরে ~১.৯৯%',
    modeDebitCard: 'ডেবিট কার্ড (POS / BharatQR)',
    modeDebitCardDesc: 'RBI সীমা: ₹২,০০০ পর্যন্ত ০.৪০%; উপরে ০.৯০%',
    modeCreditCard: 'ক্রেডিট কার্ড (Visa / Mastercard)',
    modeCreditCardDesc: 'মানক বাণিজ্যিক হার ~১.৮৫% থেকে ২.৫০% + GST',
    modeCustom: 'কাস্টম গেটওয়ে হার',
    modeCustomDesc: 'আপনার ব্যাংকের সাথে নির্ধারিত বিশেষ হার লিখুন',

    catRetail: 'মুদিখানা ও খুচরা দোকান',
    catSupermarket: 'সুপারমার্কেট ও খাদ্যদ্রব্য (০.৯০% PPI)',
    catFuel: 'পেট্রোল পাম্প ও EV চার্জিং (০.৫০% PPI)',
    catEducationGovt: 'শিক্ষা, সরকারি সেবা ও বিল (০.৫০% PPI)',
    catRestaurant: 'রেস্তোরাঁ ও খাবারের দোকান',
    catEcommerce: 'ই-কমার্স ও অনলাইন অর্ডার',

    calculationSummary: 'কর্তন ও জমার হিসাব',
    customerPays: 'গ্রাহক প্রদান করেছেন',
    baseMdr: 'মূল MDR ফি',
    gstOnMdr: 'MDR-এর উপর ১৮% GST',
    totalDeduction: 'মোট কর্তন',
    netSettlement: 'ব্যাংক অ্যাকাউন্টে জমা নীট অর্থ',
    effectiveRate: 'কার্যকরী খরচ হার',
    zeroMdrApplied: '🎉 ১০০% শূন্য MDR প্রযোজ্য!',
    zeroMdrNotice: 'ভারত সরকারের নিয়মানুযায়ী সাধারণ UPI-তে কোনো MDR কাটা হয় না।',
    interchangeFeeNotice: '₹২,০০০ টাকার বেশি ওয়ালেট লেনদেনের কারণে ইন্টারচেঞ্জ ফি প্রযোজ্য।',
    rupayNotice: '₹২,০০০ টাকার বেশি RuPay ক্রেডিট কার্ড লেনদেনে চার্জ প্রযোজ্য।',
    gstClaimTip: '💡 GST রিটার্ন দাখিলকারী ব্যবসায়ীরা ১৮% GST (₹{gst}) ইনপুট ট্যাক্স ক্রেডিট (ITC) হিসেবে ফেরত পেতে পারেন।',

    copyBreakdown: 'হিসাব কপি করুন',
    copied: 'কপিকৃত!',
    saveCalculation: 'হিসাব সংরক্ষণ করুন',
    savedSuccess: 'সংরক্ষিত হয়েছে!',
    resetValues: 'রিসেট',
    viewDetails: 'বিস্তারিত দেখুন',

    compareAllModes: 'এই টাকার জন্য সব পদ্ধতির তুলনা',
    compareSubtext: 'প্রতিটি পেমেন্ট মাধ্যমে কত টাকা ব্যাংকে পাবেন ও কত কাটবে তা পাশাপাশি দেখুন',
    modeCol: 'পেমেন্ট মাধ্যম',
    rateCol: 'হার (%)',
    feeCol: 'মোট কর্তন (১৮% GST সহ)',
    settlementCol: 'আপনি ব্যাংকে পাবেন',
    statusCol: 'অবস্থা',
    bestChoice: 'সেরা মাধ্যম',

    monthlySimulatorTitle: 'মাসিক ব্যবসায়িক আয় ও ব্যয় সিমুলেটর',
    monthlySimulatorSubtext: 'মাসিক মোট বিক্রি, পেমেন্ট মিশ্রণ এবং সাউন্ডবক্স ভাড়ার পর প্রকৃত মুনাফা জানুন',
    monthlyTurnoverLabel: 'আনুমানিক মাসিক ডিজিটাল বিক্রি (₹)',
    avgTicketSizeLabel: 'গড় বিলের পরিমাণ (₹)',
    soundboxRentalLabel: 'সাউন্ডবক্স / POS মাসিক ভাড়া (₹)',
    soundboxTip: 'বিনামূল্যে মোবাইল নোটিফিকেশন অ্যাপ ব্যবহার করলে ₹০ রাখুন',
    paymentMixLabel: 'পেমেন্ট পদ্ধতির অনুপাত (%)',
    mixTotalMustBe100: 'সব অনুপাতের মোট যোগফল ১০০% হতে হবে',
    monthlyGrossVolume: 'মোট মাসিক বিক্রি',
    monthlyTotalMdr: 'মোট MDR ফি',
    monthlyTotalGst: 'মোট প্রদত্ত GST',
    monthlySoundboxCost: 'সাউন্ডবক্স ভাড়া',
    monthlyNetSettled: 'ব্যাংকে জমা হওয়া নীট টাকা',
    monthlyEffectiveFee: 'গড় খরচের হার',
    annualMdrImpact: 'বার্ষিক MDR ব্যয়ের পূর্বাভাস',
    gstItcPotential: 'সম্ভাব্য GST ফেরত (ITC)',

    rulesTitle: 'NPCI ও RBI-এর অফিসিয়াল নিয়মাবলী',
    rulesSubtext: 'ভারতীয় ব্যবসায়ী ও UPI লেনদেনের জন্য প্রযোজ্য প্রধান নিয়ম',
    rule1Title: 'UPI-তে শূন্য MDR নিয়ম',
    rule1Body: 'পেমেন্ট আইনের ধারা 10A অনুযায়ী ব্যাংক থেকে ব্যাংক সাধারণ UPI লেনদেনে MDR সম্পূর্ণ শূন্য। ব্যাংক কোনো ফি কাটতে পারে না।',
    rule2Title: 'প্রিপেইড ওয়ালেট (PPI) নিয়মাবলী (> ₹২,০০০)',
    rule2Body: '১ এপ্রিল ২০২৩ থেকে কেবল ₹২,০০০ টাকার বেশি ওয়ালেট লেনদেনে ১.১০% ফি ধার্য করা হয়। ₹২,০০০ পর্যন্ত সম্পূর্ণ বিনামূল্যে।',
    rule3Title: 'UPI-তে RuPay ক্রেডিট কার্ড',
    rule3Body: 'ছোট ব্যবসায়ীদের জন্য ₹২,০০০ পর্যন্ত ০% MDR। এর বেশি হলে স্বাভাবিক হার (~১.৯৯% + ১৮% GST) প্রযোজ্য।',
    rule4Title: 'গ্রাহকের উপর বাড়তি সারচার্জ নিষেধ',
    rule4Body: 'UPI লেনদেনের সময় গ্রাহকের কাছ থেকে অতিরিক্ত কোনো চার্জ বা সারচার্জ নেওয়া নিষিদ্ধ।',
    disclaimerText: 'নোট: ব্যাংক ও গেটওয়ে (Paytm, BharatPe, PhonePe, Pine Labs) ভেদে হারের সামান্য পরিবর্তন হতে পারে।',

    savedTitle: 'অফলাইনে সংরক্ষিত হিসাবসমূহ',
    savedEmpty: 'এখনো কোনো হিসাব সংরক্ষণ করা হয়নি। "হিসাব সংরক্ষণ করুন" বোতাম চেপে অফলাইনের জন্য সংরক্ষণ করুন।',
    clearAllSaved: 'ইতিহাস মুছুন',
    deleteItem: 'মুছুন',

    // Top Language & Soundbox Features
    topLanguagePrompt: 'ভাষা নির্বাচন করুন / Choose Language',
    topLanguageHelp: 'ভাষা ও ভয়েস সহায়িকা',
    activeLangBadge: 'সক্রিয়',
    dualLanguageToggle: 'দ্বিভাষিক মোড (বাংলা + Eng)',
    dualLanguageDesc: 'বাংলার পাশাপাশি ইংরেজি ব্যাংকিং শব্দসমূহ (MDR, GST, POS) দেখুন',
    voiceSoundboxBtn: 'সাউন্ডবক্স ভয়েস',
    voiceSoundboxPlaying: 'ভয়েস ঘোষণা চলছে...',
    voiceAutoAnnounce: 'অটো ভয়েস',
    voiceAutoAnnounceDesc: 'হিসাব পরিবর্তনের সাথে সাথেই সাউন্ডবক্সে স্বয়ংক্রিয় ঘোষণা',
    voiceTest: 'ভয়েস পরীক্ষা করুন',
    voiceTestTooltip: 'এই ভাষায় UPI সাউন্ডবক্স ভয়েস ঘোষণার পরীক্ষা নিন',
    selectLanguageModalTitle: 'আপনার ভাষা বেছে নিন / Select Language',
    selectLanguageModalSubtext: 'হিসাব, রসিদ এবং সাউন্ডবক্স ভয়েসের জন্য আপনার পছন্দের ভাষা নির্বাচন করুন।',

    // Merchant Glossary
    glossaryTitle: 'ব্যবসায়ী ব্যাংকিং শব্দকোষ',
    glossarySubtext: 'MDR, GST এবং UPI সংক্রান্ত পারিভাষিক শব্দের সহজ ব্যাখ্যা',
    glossaryMdrTitle: 'MDR (মার্চেন্ট ডিসকাউন্ট রেট) কী?',
    glossaryMdrDesc: 'কার্ড বা ওয়ালেট পেমেন্টে ব্যাংক কর্তৃক কর্তিত সেবা ফি। সাধারণ UPI-তে 0.00% শূন্য MDR প্রযোজ्य।',
    glossaryZeroMdrTitle: 'জিরো MDR নিয়ম (0.00%)',
    glossaryZeroMdrDesc: 'সরকারি নিয়ম অনুযায়ী ব্যাংক থেকে ব্যাংক UPI QR পেমেন্টে ব্যবসায়ীর থেকে কোনো টাকা কাটা নিষিদ্ধ।',
    glossaryPpiTitle: 'PPI ওয়ালেট (Paytm/PhonePe ওয়ালেট) কী?',
    glossaryPpiDesc: 'গ্রাহক ওয়ালেট থেকে পেমেন্ট করলে ₹২,০০০ পর্যন্ত ১০০% বিনামূল্যে; ₹২,০০০-এর বেশি হলে ইন্টারচেঞ্জ ফি প্রযোজ্য।',
    glossaryRupayTitle: 'UPI-তে RuPay ক্রেডিট কার্ড',
    glossaryRupayDesc: 'ক্ষুদ্র ব্যবসায়ীদের জন্য RuPay ক্রেডিট কার্ডে ₹২,০০০ পর্যন্ত লেনদেনে ০% ফি।',
    glossaryGstTitle: 'MDR-এর উপর ১৮% GST',
    glossaryGstDesc: '১৮% GST কেবল ব্যাংকের কর্তিত ফি-এর উপর প্রযোজ্য, মোট বিলের উপর নয়। GST ব্যবসায়ীরা ITC সুবিধা পেতে পারেন।',
  },
};
