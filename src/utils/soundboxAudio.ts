/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageCode } from '../types';

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Play authentic UPI Soundbox notification chime (2-tone or 3-tone pleasant POS ding)
 */
export function playSoundboxChime(): Promise<void> {
  return new Promise((resolve) => {
    try {
      const ctx = getAudioContext();
      if (!ctx) {
        resolve();
        return;
      }

      const now = ctx.currentTime;
      const notes = [
        { freq: 784, start: 0.0, dur: 0.12 }, // G5
        { freq: 1046.5, start: 0.12, dur: 0.14 }, // C6
        { freq: 1318.5, start: 0.26, dur: 0.28 }, // E6
      ];

      notes.forEach((note) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(note.freq, now + note.start);

        // Envelope
        gain.gain.setValueAtTime(0, now + note.start);
        gain.gain.linearRampToValueAtTime(0.28, now + note.start + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + note.start + note.dur);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + note.start);
        osc.stop(now + note.start + note.dur + 0.05);
      });

      setTimeout(() => {
        resolve();
      }, 550);
    } catch {
      resolve();
    }
  });
}

export interface SoundboxSpeechPayload {
  amount: number;
  netPayout: number;
  deduction: number;
  isZeroMdr: boolean;
  lang: LanguageCode;
  speed?: number; // 0.8 to 1.2
}

/**
 * Build announcement text in the merchant's chosen native language
 */
export function buildAnnouncementText(payload: SoundboxSpeechPayload): string {
  const { amount, netPayout, deduction, isZeroMdr, lang } = payload;
  const roundedAmount = Math.round(amount);
  const roundedNet = Math.round(netPayout);
  const roundedDeduction = Math.round(deduction);

  switch (lang) {
    case 'te': // Telugu
      if (isZeroMdr) {
        return `రూపాయలు ${roundedAmount} చెల్లింపు అందింది. జీరో ఎండీఆర్. మీ బ్యాంకు ఖాతాలో నికరంగా రూపాయలు ${roundedNet} జమ అవుతాయి.`;
      }
      return `రూపాయలు ${roundedAmount} చెల్లింపు అందింది. రుసుము రూపాయలు ${roundedDeduction}. మీ ఖాతాలో నికరంగా రూపాయలు ${roundedNet} జమ అవుతాయి.`;

    case 'hi': // Hindi
      if (isZeroMdr) {
        return `रुपये ${roundedAmount} का भुगतान प्राप्त हुआ। शून्य एमडीआर। आपके बैंक खाते में पूरे रुपये ${roundedNet} जमा होंगे।`;
      }
      return `रुपये ${roundedAmount} का भुगतान प्राप्त हुआ। शुल्क रुपये ${roundedDeduction}। आपके बैंक खाते में शुद्ध रुपये ${roundedNet} प्राप्त होंगे।`;

    case 'ta': // Tamil
      if (isZeroMdr) {
        return `ரூபாய் ${roundedAmount} பணம் பெறப்பட்டது. ஜீரோ கட்டணம். உங்கள் வங்கிக் கணக்கில் ரூபாய் ${roundedNet} வரவு வைக்கப்படும்.`;
      }
      return `ரூபாய் ${roundedAmount} பணம் பெறப்பட்டது. கட்டணம் ரூபாய் ${roundedDeduction}. நிகர வரவு ரூபாய் ${roundedNet}.`;

    case 'mr': // Marathi
      if (isZeroMdr) {
        return `रुपये ${roundedAmount} चे पेमेंट मिळाले. शून्य एमडीआर. तुमच्या बँक खात्यात रुपये ${roundedNet} जमा होतील.`;
      }
      return `रुपये ${roundedAmount} चे पेमेंट मिळाले. शुल्क रुपये ${roundedDeduction}. खात्यात जमा रुपये ${roundedNet}.`;

    case 'bn': // Bengali
      if (isZeroMdr) {
        return `টাকা ${roundedAmount} পেমেন্ট পাওয়া গেছে। জিরো এমডিআর। আপনার ব্যাঙ্ক অ্যাকাউন্টে টাকা ${roundedNet} জমা হবে।`;
      }
      return `টাকা ${roundedAmount} পেমেন্ট পাওয়া গেছে। চার্জ টাকা ${roundedDeduction}। নিট জমা টাকা ${roundedNet}।`;

    case 'en': // English
    default:
      if (isZeroMdr) {
        return `Payment of rupees ${roundedAmount} received. Zero MDR applied. Net settlement to bank is rupees ${roundedNet}.`;
      }
      return `Payment of rupees ${roundedAmount} received. Fee is rupees ${roundedDeduction}. Net payout to bank is rupees ${roundedNet}.`;
  }
}

/**
 * Get greeting text for language preview / voice test
 */
export function getLanguagePreviewSpeech(lang: LanguageCode): string {
  switch (lang) {
    case 'te':
      return 'నమస్కారం! యూపీఐ మర్చంట్ క్యాలిక్యులేటర్‌కు స్వాగతం. తెలుగు భాష ఎంచుకోబడింది.';
    case 'hi':
      return 'नमस्ते! यूपीआई मर्चेंट कैलकुलेटर में आपका स्वागत है। हिंदी भाषा चुनी गई है।';
    case 'ta':
      return 'வணக்கம்! யுபிஐ வணிகர் கணக்கீட்டாளருக்கு வரவேற்கிறோம். தமிழ் மொழி தேர்ந்தெடுக்கப்பட்டது.';
    case 'mr':
      return 'नमस्कार! यूपीआय मर्चंट कॅल्क्युलेटरमध्ये आपले स्वागत आहे. मराठी भाषा निवडली आहे.';
    case 'bn':
      return 'নমস্কার! ইউপিআই মার্চেন্ট ক্যালকুলেটরে স্বাগতম। বাংলা ভাষা নির্বাচন করা হয়েছে।';
    case 'en':
    default:
      return 'Welcome to the UPI Merchant Calculator. English language selected.';
  }
}

/**
 * Maps app language code to speech synthesis BCP-47 tag
 */
export function getSpeechLangCode(lang: LanguageCode): string {
  switch (lang) {
    case 'te': return 'te-IN';
    case 'hi': return 'hi-IN';
    case 'ta': return 'ta-IN';
    case 'mr': return 'mr-IN';
    case 'bn': return 'bn-IN';
    case 'en':
    default: return 'en-IN';
  }
}

/**
 * Speak text with Web Speech API after sounding chime
 */
export async function speakSoundboxAnnouncement(
  payload: SoundboxSpeechPayload,
  onStart?: () => void,
  onEnd?: () => void
): Promise<void> {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    if (onEnd) onEnd();
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  // Play realistic UPI chime first
  await playSoundboxChime();

  if (onStart) onStart();

  const textToSpeak = buildAnnouncementText(payload);
  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  
  const bcp47 = getSpeechLangCode(payload.lang);
  utterance.lang = bcp47;
  utterance.rate = payload.speed || 0.95; // Slightly measured pace for shop acoustics
  utterance.pitch = 1.05; // Slightly cheerful announcement tone

  // Attempt to locate a matching regional voice if available
  const voices = window.speechSynthesis.getVoices();
  const matchedVoice = voices.find(
    (v) => v.lang === bcp47 || v.lang.startsWith(payload.lang)
  );
  if (matchedVoice) {
    utterance.voice = matchedVoice;
  }

  utterance.onend = () => {
    if (onEnd) onEnd();
  };

  utterance.onerror = () => {
    if (onEnd) onEnd();
  };

  window.speechSynthesis.speak(utterance);
}

/**
 * Test voice for specific language
 */
export async function playVoiceTest(
  lang: LanguageCode,
  onStart?: () => void,
  onEnd?: () => void
): Promise<void> {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    if (onEnd) onEnd();
    return;
  }

  window.speechSynthesis.cancel();
  await playSoundboxChime();

  if (onStart) onStart();

  const text = getLanguagePreviewSpeech(lang);
  const utterance = new SpeechSynthesisUtterance(text);
  const bcp47 = getSpeechLangCode(lang);

  utterance.lang = bcp47;
  utterance.rate = 0.95;

  const voices = window.speechSynthesis.getVoices();
  const matchedVoice = voices.find(
    (v) => v.lang === bcp47 || v.lang.startsWith(lang)
  );
  if (matchedVoice) {
    utterance.voice = matchedVoice;
  }

  utterance.onend = () => {
    if (onEnd) onEnd();
  };

  utterance.onerror = () => {
    if (onEnd) onEnd();
  };

  window.speechSynthesis.speak(utterance);
}
