# HomeHarvest

A premium startup landing page for HomeHarvest - a home-cooked meal delivery platform.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animations
- **Lucide React** - Beautiful icons

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your hero image:**
   Place your custom hero image in the `public` folder as `hero-image.jpg`

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
homeharvest/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles & Tailwind
│   │   ├── layout.tsx       # Root layout with fonts
│   │   └── page.tsx         # Main landing page
│   ├── components/
│   │   ├── Button.tsx       # Reusable button component
│   │   ├── Logo.tsx         # Brand logo component
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx       # Site footer
│   │   ├── FeatureCard.tsx  # Feature display card
│   │   ├── StepCard.tsx     # How it works step card
│   │   ├── UserCard.tsx     # User type card
│   │   ├── PhoneMockup.tsx  # Phone mockup component
│   │   └── SectionHeading.tsx
│   └── sections/
│       ├── Hero.tsx         # Hero banner section
│       ├── Features.tsx     # Product features
│       ├── HowItWorks.tsx   # 3-step process
│       ├── ForWho.tsx       # User segments
│       ├── AppScreenshots.tsx # App carousel
│       ├── Benefits.tsx     # Value propositions
│       ├── Testimonials.tsx # Customer reviews
│       └── DownloadCTA.tsx  # App download section
├── public/
│   └── hero-image.jpg       # Your custom hero image
├── tailwind.config.ts       # Tailwind configuration
└── package.json
```

## Customization

### Brand Colors
Edit `tailwind.config.ts` to change the primary (orange) and secondary (green) colors:

```ts
colors: {
  primary: {
    DEFAULT: '#FF6B35',
    // ... shades
  },
  secondary: {
    DEFAULT: '#22A45D',
    // ... shades
  },
}
```

### Hero Image
Replace `public/hero-image.jpg` with your custom hero banner image. The image will be displayed as a full-width background with gradient overlays for text readability.

### Content
All text content is stored directly in the section components. Edit the respective files in `src/sections/` to customize:

- Headlines and descriptions
- Feature lists
- Testimonials
- Statistics

## Building for Production

```bash
npm run build
npm start
```

## License

© 2026 HomeHarvest. All rights reserved.
