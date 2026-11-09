# UYAR TECHNOLOGIES – PREMIUM LEAD GENERATION LANDING PAGE

High-converting, production-ready landing page for **Uyar Technologies Private Limited**, engineered specifically for Meta (Facebook & Instagram) ad campaigns and organic business traffic.

## 🌟 Brand Overview

- **Company:** Uyar Technologies Private Limited
- **Tagline:** Think Higher. Build Smarter.
- **Headquarters:** K.S. Rangasamy College of Technology, IDEA Lab, Ground Floor, Thiruchengodu - 637 215, Tamil Nadu, India.
- **Official Contact:** +91 79040 75373 | uyartechnologies26@gmail.com
- **Website:** [www.uyartechnologies.com](https://www.uyartechnologies.com)

---

## 🚀 Key Features & Implementation Highlights

1. **Design System & Taste Skill Compliance:**
   - Pure white and light neutral grounds (`#ffffff`, `#f8fafc`).
   - Deep royal purple & indigo brand accents (`#6b21a8`, `#7c3aed`) matching authentic company identity.
   - High visual hierarchy, consistent 8px spacing, and quiet micro-interactions (2px hover lifts, smooth button states).
   - Zero AI-generated visual fluff or generic gradient clutter.

2. **Real Completed Projects Showcase:**
   - **SK Catering Services** (`skcateringservices.com`)
   - **Master Mind Learning Solutions** (`mastermindlearningsolution.com`)
   - **Suknesh Techcenter** (`sukneshtechcenter.com`)
   - **OneRoute India Logistics** (`onerouteindia.com`)
   - **Sri Sai Wire Netting** (`srisaiwirenetting.in`)
   - **Tamil Nadu Shia Muslim Jamaat** (`tamilnadushiamuslimjamaat.in`)
   - **Red Angle Studio** (`redanglestudio.in`)
   - **SK Technologies** (`sktechnologies.online`)

3. **High-Conversion Lead Generation Form:**
   - Full Name, Business Email, 10-digit Indian Phone Number (`^[6-9]\d{9}$`), Company Name, Service Required dropdown, Budget dropdown, Project Message.
   - Clear field-level validation and error messages.
   - Loading states, duplicate submission prevention, and celebration feedback (canvas-confetti).
   - Reusable `submitProjectEnquiry` service (`src/services/api.ts`) with configurable backend URL and local fallback persistence.

4. **Meta Pixel (Facebook / Instagram Ads) Tracking:**
   - Configurable via `VITE_META_PIXEL_ID`.
   - Initialized once with safe fallback when missing in local development.
   - Tracks `PageView` on page load.
   - Tracks `ViewContent` on service and project modal inspection.
   - **STRICT CRO ENFORCEMENT:** Fires `Lead` ONLY after backend confirms successful enquiry receipt (never on simple button clicks or failed forms).
   - Passes `eventID` for Meta Conversions API (CAPI) deduplication.

---

## 🛠️ Environment Configuration

Create or modify your `.env` file:

```env
# Optional Backend API base URL (e.g., https://api.uyartechnologies.com)
VITE_API_BASE_URL=

# Meta Pixel ID for Facebook & Instagram Ad Tracking
VITE_META_PIXEL_ID=
```

---

## 💻 Development & Build Scripts

```bash
# Install dependencies
npm install

# Start local Vite development server
npm run dev

# Compile TypeScript and build for production
npm run build

# Preview production build locally
npm run preview
```
