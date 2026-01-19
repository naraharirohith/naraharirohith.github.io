# Rohith Narahari - Portfolio

A visually stunning portfolio website featuring an anime-desi fusion aesthetic - where Studio Ghibli meets Indian art.

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** GitHub Pages

## Features

- Anime-inspired UI with soft gradients and vibrant colors
- Indian cultural elements: mandala patterns, rangoli designs, traditional motifs
- Holi-inspired color palette (oranges, teals, magentas, golds)
- Glass morphism cards with subtle pattern overlays
- Dark/Light mode toggle (festival vibes vs night temple aesthetic)
- Animated floating particles (sakura petals, marigolds, geometric shapes)
- Smooth page transitions and hover effects
- Fully responsive design
- Fast loading with optimized animations

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

The static files will be generated in the `out` directory.

## Deployment

This portfolio is configured for GitHub Pages deployment:

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Site will be available at `https://naraharirohith.github.io`

### Manual Deployment

1. Go to your repository Settings > Pages
2. Under "Build and deployment", select "GitHub Actions"
3. Push your code to trigger the deployment workflow

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles, animations, patterns
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page component
├── components/
│   ├── ThemeProvider.tsx       # Dark/Light mode context
│   ├── ParticlesBackground.tsx # Animated floating particles
│   ├── Navigation.tsx          # Responsive navbar
│   ├── HeroSection.tsx         # Hero with animated workspace
│   ├── AboutSection.tsx        # About with mandala cards
│   ├── ProjectsSection.tsx     # Projects with anime episode cards
│   ├── SkillsSection.tsx       # Skills with stat cards
│   ├── ExperienceSection.tsx   # Timeline with story arc design
│   ├── AchievementsSection.tsx # Achievements badges
│   └── ContactSection.tsx      # Contact with fusion frame
```

## Customization

### Colors

Edit `tailwind.config.ts` to modify the color palette:
- `saffron` - Primary orange tones
- `magenta` - Accent pink/purple
- `sacred` - Blue tones
- `gold` - Highlight gold
- `teal` - Secondary accent
- `temple` - Neutral grays (dark mode base)

### Content

Update the content in each component file under `src/components/`.

## License

MIT License - Feel free to use this as inspiration for your own portfolio!
