const fs = require('fs');
const path = require('path');
const { 
  Document, 
  Packer, 
  Paragraph, 
  TextRun, 
  HeadingLevel, 
  Table, 
  TableRow, 
  TableCell, 
  WidthType, 
  BorderStyle, 
  AlignmentType,
  ShadingType
} = require('docx');

async function generate() {
  const doc = new Document({
    title: "Privacy Policy - UPI Merchant MDR Calculator",
    description: "Official Privacy Policy for UPI Merchant MDR Calculator",
    sections: [{
      properties: {
        page: {
          margin: {
            top: 1440,    // 1 inch
            bottom: 1440,
            left: 1440,
            right: 1440
          }
        }
      },
      children: [
        // Title
        new Paragraph({
          text: "Privacy Policy",
          heading: HeadingLevel.TITLE,
          alignment: AlignmentType.CENTER,
          spacing: { after: 120 }
        }),
        new Paragraph({
          text: "UPI Merchant MDR Calculator",
          heading: HeadingLevel.HEADING_2,
          alignment: AlignmentType.CENTER,
          spacing: { after: 240 }
        }),

        // Metadata block
        new Paragraph({
          children: [
            new TextRun({ text: "Effective Date: ", bold: true }),
            new TextRun("September 20, 2026\n"),
            new TextRun({ text: "Last Updated: ", bold: true }),
            new TextRun("September 20, 2026\n"),
            new TextRun({ text: "Application Name: ", bold: true }),
            new TextRun("UPI Merchant MDR Calculator (PWA)\n"),
            new TextRun({ text: "Platform: ", bold: true }),
            new TextRun("Web & Progressive Web Application\n"),
            new TextRun({ text: "Contact: ", bold: true }),
            new TextRun("kvakk1988@gmail.com")
          ],
          spacing: { after: 360 }
        }),

        // Section 1
        new Paragraph({
          text: "1. Introduction & Core Privacy Commitment",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 240, after: 120 }
        }),
        new Paragraph({
          children: [
            new TextRun("UPI Merchant MDR Calculator (\"the Application\", \"we\", \"us\", or \"our\") is an independent financial utility designed for Indian retail merchants, shopkeepers, and small businesses to calculate, verify, and simulate Merchant Discount Rates (MDR), interchange fees, and Goods and Services Tax (GST) under regulations issued by the National Payments Corporation of India (NPCI), the Reserve Bank of India (RBI), and the Ministry of Electronics and Information Technology (MeitY).")
          ],
          spacing: { after: 180 }
        }),
        new Paragraph({
          children: [
            new TextRun("We respect your privacy and are deeply committed to protecting your financial and personal confidentiality. "),
            new TextRun({ text: "The Application is architected with a strict Privacy-by-Design philosophy: 100% client-side execution, offline-first operation, and zero data collection.", bold: true })
          ],
          spacing: { after: 280 }
        }),

        // Section 2
        new Paragraph({
          text: "2. Information We DO NOT Collect",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 240, after: 120 }
        }),
        new Paragraph({
          text: "The Application does NOT collect, transmit, store on remote servers, monitor, or monetize any of your data:",
          spacing: { after: 140 }
        }),
        new Paragraph({
          text: "• No Personal Identifiable Information (PII): We do not collect names, email addresses, phone numbers, merchant IDs, physical addresses, or tax IDs (GSTIN/PAN).",
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "• No Financial Account Data: We do not ask for, process, access, or store bank account numbers, IFSC codes, Virtual Payment Addresses (UPI IDs), credit/debit card numbers, CVVs, or transaction PINs.",
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "• No Transaction Telemetry: The bill amounts, volume inputs, payment modes selected, and simulated earnings entered into the calculator are never sent across the internet.",
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "• No Advertising or Behavioral Tracking: There are no third-party advertisements, behavioral trackers, telemetry beacons, Google Analytics, Facebook Pixel, or profiling scripts embedded within the Application.",
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "• No Device Fingerprinting: We do not fingerprint your browser or track your location, device IMEI, or browsing history.",
          spacing: { after: 280 }
        }),

        // Section 3
        new Paragraph({
          text: "3. Local Storage Usage (On Your Device Only)",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 240, after: 120 }
        }),
        new Paragraph({
          text: "The Application uses standard client-side browser storage (localStorage and CacheStorage) strictly to provide necessary user interface preferences and offline capabilities:",
          spacing: { after: 180 }
        }),

        // Table
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({
              tableHeader: true,
              children: [
                new TableCell({
                  shading: { type: ShadingType.CLEAR, fill: "F1F5F9" },
                  children: [new Paragraph({ children: [new TextRun({ text: "Storage Item Key", bold: true })] })],
                  width: { size: 30, type: WidthType.PERCENTAGE }
                }),
                new TableCell({
                  shading: { type: ShadingType.CLEAR, fill: "F1F5F9" },
                  children: [new Paragraph({ children: [new TextRun({ text: "Purpose", bold: true })] })],
                  width: { size: 45, type: WidthType.PERCENTAGE }
                }),
                new TableCell({
                  shading: { type: ShadingType.CLEAR, fill: "F1F5F9" },
                  children: [new Paragraph({ children: [new TextRun({ text: "Network Transmission", bold: true })] })],
                  width: { size: 25, type: WidthType.PERCENTAGE }
                }),
              ]
            }),
            new TableRow({
              children: [
                new TableCell({ children: [new Paragraph({ text: "upi_mdr_lang" })] }),
                new TableCell({ children: [new Paragraph({ text: "Remembers your preferred language (English, Hindi, Telugu, Tamil, Marathi, Bengali)." })] }),
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "No (Device Only)", bold: true })] })] }),
              ]
            }),
            new TableRow({
              children: [
                new TableCell({ children: [new Paragraph({ text: "upi_mdr_dual_mode" })] }),
                new TableCell({ children: [new Paragraph({ text: "Remembers whether you enabled dual English + Regional banking terminology." })] }),
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "No (Device Only)", bold: true })] })] }),
              ]
            }),
            new TableRow({
              children: [
                new TableCell({ children: [new Paragraph({ text: "upi_mdr_auto_voice" })] }),
                new TableCell({ children: [new Paragraph({ text: "Remembers your Soundbox auto-announcement toggle preference." })] }),
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "No (Device Only)", bold: true })] })] }),
              ]
            }),
            new TableRow({
              children: [
                new TableCell({ children: [new Paragraph({ text: "upi_saved_calculations" })] }),
                new TableCell({ children: [new Paragraph({ text: "Stores calculation snapshots you voluntarily save for offline reference." })] }),
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "No (Device Only)", bold: true })] })] }),
              ]
            }),
            new TableRow({
              children: [
                new TableCell({ children: [new Paragraph({ text: "Service Worker Cache" })] }),
                new TableCell({ children: [new Paragraph({ text: "Caches static app files (HTML, CSS, JS, icons) for offline utility." })] }),
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "No (Device Only)", bold: true })] })] }),
              ]
            }),
          ]
        }),

        new Paragraph({
          text: "You retain total control over this data at all times. You can delete all saved calculations at any time by tapping 'Clear History' inside the app, or by clearing your browser's site data.",
          spacing: { before: 180, after: 280 }
        }),

        // Section 4
        new Paragraph({
          text: "4. Web Speech Synthesis & Soundbox Audio",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 240, after: 120 }
        }),
        new Paragraph({
          children: [
            new TextRun("The Application features an offline UPI Soundbox audio simulator that announces settlement totals in your selected language:\n"),
            new TextRun("• Audio chimes are synthesized directly in your browser using the local HTML5 Web Audio API (sine/triangle oscillator synthesis).\n"),
            new TextRun("• Spoken announcements utilize your device's native browser SpeechSynthesis API (window.speechSynthesis).\n"),
            new TextRun("• No microphone access is requested or required.\n"),
            new TextRun("• No voice data or speech audio is recorded, sampled, stored, or transmitted to any external server or third party.")
          ],
          spacing: { after: 280 }
        }),

        // Section 5
        new Paragraph({
          text: "5. Offline Capabilities & Service Workers (PWA)",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 240, after: 120 }
        }),
        new Paragraph({
          text: "When installed or viewed as a Progressive Web App (PWA), the application utilizes a Service Worker to cache necessary static visual and logic assets. This ensures full offline operability in weak reception areas, instant loading, and complete isolation of calculation inputs from network traffic.",
          spacing: { after: 280 }
        }),

        // Section 6
        new Paragraph({
          text: "6. Permissions",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 240, after: 120 }
        }),
        new Paragraph({
          text: "The Application requests minimal to zero device permissions: Internet / Network access is used solely to fetch static web application assets upon initial visit or service worker updates. Microphone, camera, contacts, and geolocation permissions are NEVER requested or used.",
          spacing: { after: 280 }
        }),

        // Section 7
        new Paragraph({
          text: "7. Legal Framework & Regulatory Compliance",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 240, after: 120 }
        }),
        new Paragraph({
          children: [
            new TextRun("This Privacy Policy complies with:\n"),
            new TextRun("• Digital Personal Data Protection Act (DPDP Act), 2023 (India)\n"),
            new TextRun("• Information Technology Act, 2000 and SPDI Rules, 2011 (India)\n"),
            new TextRun("• Section 10A of the Payment and Settlement Systems Act, 2007 (PSS Act)\n"),
            new TextRun("• NPCI & RBI Guidelines on Merchant Discount Rate transparency\n\n"),
            new TextRun("Because the Application does not collect, process, or transmit personal or sensitive data, you are not subject to data profiling, automated tracking, or commercial data sharing.")
          ],
          spacing: { after: 280 }
        }),

        // Section 8 & 9
        new Paragraph({
          text: "8. Children's Privacy",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 240, after: 120 }
        }),
        new Paragraph({
          text: "The Application does not address or solicit information from anyone under the age of 18. We do not knowingly collect personal information from minors.",
          spacing: { after: 280 }
        }),

        new Paragraph({
          text: "9. Changes to This Privacy Policy",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 240, after: 120 }
        }),
        new Paragraph({
          text: "We may update this Privacy Policy from time to time to reflect regulatory updates or feature enhancements. The updated date at the top of this document will reflect any revisions. Changes are effective immediately upon posting.",
          spacing: { after: 280 }
        }),

        // Section 10
        new Paragraph({
          text: "10. Contact & Queries",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 240, after: 120 }
        }),
        new Paragraph({
          children: [
            new TextRun("If you have questions, feedback, or concerns regarding this Privacy Policy or the security of the application, you may contact:\n"),
            new TextRun({ text: "Project: ", bold: true }),
            new TextRun("UPI Merchant MDR Calculator\n"),
            new TextRun({ text: "Email: ", bold: true }),
            new TextRun("kvakk1988@gmail.com\n"),
            new TextRun({ text: "Status: ", bold: true }),
            new TextRun("Open Merchant Transparency & Compliance Tool")
          ],
          spacing: { after: 280 }
        }),
      ]
    }]
  });

  const buffer = await Packer.toBuffer(doc);
  
  // Write to root
  const rootPath = path.resolve(__dirname, '../PRIVACY_POLICY.docx');
  fs.writeFileSync(rootPath, buffer);
  console.log(`Generated: ${rootPath}`);

  // Write to public folder so users can download it directly from the web app
  const publicDir = path.resolve(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const publicPath = path.resolve(publicDir, 'PRIVACY_POLICY.docx');
  fs.writeFileSync(publicPath, buffer);
  console.log(`Generated in public: ${publicPath}`);
}

generate().catch(err => {
  console.error("Error generating docx:", err);
  process.exit(1);
});
