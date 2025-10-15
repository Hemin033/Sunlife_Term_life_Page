# Manulife Vitality Landing Page

A modern, responsive landing page built with Next.js 14 (App Router) for Manulife Vitality life insurance program. Designed to match PolicyAdvisor's brand standards and design system.

## Features

- 🎨 Pixel-perfect design matching the reference
- 📱 Fully responsive across all devices
- ⚡ Built with Next.js 14 App Router
- 🎯 Interactive FAQ accordion
- 💅 Clean, modern UI with smooth animations
- ♿ Accessible and SEO-friendly

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and component styles
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main landing page component
├── package.json
├── tsconfig.json
└── next.config.js
```

## Sections Included

1. **Hero Section** - Eye-catching header with Apple Watch imagery
2. **What is Manulife Vitality** - Program introduction
3. **Active Lifestyle Benefits** - Key benefits and rewards
4. **Client Testimonials** - Social proof with 5-star reviews
5. **Vitality Ready Checklist** - Eligibility criteria
6. **Reward Status Levels** - Bronze, Silver, Gold, Platinum tiers
7. **Insurance Coverage** - Comprehensive health coverage list
8. **Workout Points** - Light, Standard, Advanced workout rewards
9. **Partner Logos** - Featured brand partnerships
10. **FAQ Section** - Interactive accordion with common questions
11. **Footer** - Contact and call-to-action

## Customization

### Colors

The main brand colors are defined in `globals.css`:

- Primary (Manulife Green): `#00825a`
- Secondary (Vitality Pink): `#e91e63`
- Primary Text: `#2d3748`
- Secondary Text: `#4a5568`
- Light Text: `#718096`
- Background: `#f9fafb`
- Hero Background: `#EEFCFE`

### Content

All content is editable in `app/page.tsx`. Update text, images, and links as needed.

### Typography

Following PolicyAdvisor's design standards:
- Font Family: **Lato** (loaded from Google Fonts with fallback to system fonts)
- Font Weights: 300 (Light), 400 (Regular), 700 (Bold), 900 (Black)
- Base Font Size: 16px
- Line Height: 1.6-1.7 for body text
- Headings: Bold (700) with 1.3 line height
- Max Content Width: 1140px

### Contact Information

- Phone: 1-888-601-9980
- Website: [PolicyAdvisor.com](https://www.policyadvisor.com)

## Performance

- Optimized for Core Web Vitals
- Lazy loading for images
- Minimal JavaScript bundle
- CSS optimized for fast rendering

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and confidential.

