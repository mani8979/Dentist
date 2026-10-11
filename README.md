# SmileCraft Dental Studio — Modern React Dental Clinic Website

A complete, high-performance, fully responsive dental clinic website engineered with **React 18**, **Vite**, and modern responsive CSS.

Designed and architected as a client-ready showcase project that developers and agencies can use to demonstrate web development, React UI component architecture, accessibility (WCAG 2.1 AA), and conversion rate optimization (CRO) capabilities to dental clinic owners and healthcare practices.

---

## 🌟 Visual & Technical Highlights

- **Framework**: React 18 + Vite
- **Brand Identity**: *SmileCraft Dental Studio* — "Your Smile. Our Passion."
- **Location**: Beach Road, Visakhapatnam, Andhra Pradesh, India *(fictional sample clinic location)*.
- **Design Aesthetic**: Clean medical white backgrounds, deep teal primary (`#0a6c74`), soft aqua & mint secondary tones, dark navy headings, generous whitespace, subtle elevation shadows, and rounded cards.
- **Responsive Architecture**: Zero horizontal scrolling across all viewports (tested from 320px to 1920px).
- **Mobile Navigation Drawer**: Viewport overlay drawer with smooth CSS morphing hamburger toggle and dedicated `✕` close button.
- **Interactive Modals**: Detailed treatment procedure modal with auto-booking pre-selection, appointment submission confirmation dialog, and demo privacy policy modal.
- **Typography**: Google Fonts pairing — **Manrope** (Headings) and **Inter** (Body text).
- **Icons**: Font Awesome 6.5.1 CDN with inline SVG fallbacks.

---

## 📁 Project Architecture

```text
Dental/
├── index.html                      # Root HTML entry point with SEO & Schema.org metadata
├── package.json                    # Project dependencies and npm scripts
├── vite.config.js                  # Vite configuration
├── public/                         # Public assets served at root
│   └── assets/
│       ├── favicon/
│       │   └── favicon.svg         # SVG dental clinic logo favicon
│       └── images/                 # High-resolution clinic photography
│           ├── hero-dental.jpg
│           ├── about-clinic.jpg
│           ├── why-choose-us.jpg
│           ├── dentist-aarav.jpg
│           ├── dentist-priya.jpg
│           ├── dentist-vikram.jpg
│           ├── patient-1.jpg
│           ├── patient-2.jpg
│           └── patient-3.jpg
├── src/
│   ├── main.jsx                    # React entry point
│   ├── App.jsx                     # Root application component with state & modal control
│   ├── data/
│   │   └── clinicData.js           # Centralized clinic data (treatments, team, reviews, FAQs)
│   ├── components/
│   │   ├── TopBar.jsx              # Compact single-line mobile contact & emergency bar
│   │   ├── Header.jsx              # Sticky header with desktop navigation & hamburger button
│   │   ├── MobileDrawer.jsx        # Accessible mobile overlay drawer with focus trapping
│   │   ├── ServiceModal.jsx        # Procedure details & step-by-step treatment modal
│   │   ├── AppointmentSuccessModal.jsx # Form submission confirmation dialog
│   │   ├── PrivacyModal.jsx        # Demo privacy policy modal
│   │   ├── MobileStickyBar.jsx     # Mobile bottom quick actions ("Call Clinic", "Book Visit")
│   │   └── BackToTop.jsx           # Floating back to top button
│   ├── sections/
│   │   ├── HeroSection.jsx         # Hero section with headline, CTAs, and floating cards
│   │   ├── TrustBarSection.jsx     # 4 Core patient benefits
│   │   ├── AboutSection.jsx        # Clinic philosophy, clinic photo, and 3 key benefits
│   │   ├── TreatmentsSection.jsx   # 8 Dental treatment cards with modal triggers
│   │   ├── WhyChooseUsSection.jsx  # 6 Clinic features and sterilization badge
│   │   ├── DentistsSection.jsx     # 3 Specialist doctor profiles with consultation actions
│   │   ├── TestimonialsSection.jsx # Accessible touch/swipe testimonials carousel
│   │   ├── AppointmentSection.jsx  # Real-time validated booking form with treatment pre-selection
│   │   ├── FaqSection.jsx          # Accessible FAQ accordion with smooth toggle
│   │   ├── ContactSection.jsx      # Clinic address, phone, WhatsApp, hours & map embed
│   │   ├── CtaBannerSection.jsx    # High-impact closing CTA banner
│   │   └── Footer.jsx              # Footer links, clinic info, and copyright
│   └── styles/
│       └── index.css               # Design tokens, reset, components, and responsive media queries
└── dist/                           # Production build output
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Create Production Build
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🔍 Key Features

| Section | Key Capabilities |
|---|---|
| **Top Contact Bar** | Working hours, demo phone number, location, emergency badge with pulsing dot. |
| **Header & Nav** | Sticky header, brand logo, desktop navigation, animated hamburger toggle with morphing lines to `✕`. |
| **Mobile Drawer** | True viewport overlay drawer, dedicated close button, keyboard focus trap, auto-close on resize or link click. |
| **Hero Section** | Above-the-fold value proposition, dual CTAs, trust highlights, floating badges. |
| **Trust & Benefits** | 4 horizontal benefit cards (Patient-Centered Care, Modern Tech, Comfortable Environment, Clear Explanations). |
| **About the Clinic** | High-res clinic photo, patient-first care philosophy, 3 core benefit points. |
| **Treatments (8)** | Cards for General Dentistry, Cleaning, Cosmetic, Whitening, Implants, Aligners, Root Canal, and Pediatric Dentistry. Interactive modal with treatment steps and direct pre-selection booking button. |
| **Why Choose Us?** | Split visual layout with 6 clear clinic practice highlights (sterilization, transparent pricing, unhurried care). |
| **Meet Our Dentists** | 3 specialist profiles with qualifications, clinical focus, bios, and direct consultation booking links. |
| **Testimonials** | Accessible carousel with Prev/Next buttons, pagination dots, touch swipe support, and star ratings. |
| **Appointment Booking** | High-conversion form with date verification (prevents past dates), 10-digit phone check, email validation, slot picker, and demo submission modal. |
| **FAQ Accordion** | 6 common dental patient questions with smooth keyboard-accessible expand/collapse. |
| **Contact & Location** | Multi-card layout with address, telephone, email, hours, Google Maps link, and responsive map embed. |
| **Final CTA Banner** | High-impact closing banner driving appointment requests and WhatsApp conversations. |
| **Footer** | Clinic description, quick navigation, treatments index, contact info, demo privacy policy modal, and dynamic copyright year. |

---

## 📱 Mobile Responsiveness & Overflow Protection

- **No Horizontal Scrolling**: Tested across 320px, 360px, 375px, 390px, 414px, 768px, 1024px, 1280px, 1440px, 1920px.
- **Overlay Drawer**: Drawer uses `position: fixed` with clean backdrop, preventing layout shifts or horizontal scrollbar expansion.
- **Fluid Typography**: Uses CSS `clamp()` for headings and spacing to adapt seamlessly to any device width.
- **Touch-Friendly Controls**: Minimum 44x44px touch targets on mobile interactive controls.

---

## 📄 License

This project is created for demonstration and portfolio purposes.
