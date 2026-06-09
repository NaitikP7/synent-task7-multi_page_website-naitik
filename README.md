# NEXA Studio — Multi-Page Interior Design Portfolio

A premium, multi-page portfolio website for a luxury interior design studio, built with **React 19**, **Vite 8**, and **Framer Motion**. The project features six fully designed pages with smooth page transitions, interactive CSS Grid layouts, embedded HTML5 video showcases, and a mobile-first responsive architecture. Developed as **Task 7 (Multi-Page Website)** for the **Synent Technology Internship Program**.

---

## Table of Contents

- [Objective](#objective)
- [Overview](#overview)
- [Features](#features)
- [Steps Performed](#steps-performed)
- [Tools & Technologies Used](#tools--technologies-used)
- [Project Structure](#project-structure)
- [Page Descriptions](#page-descriptions)
- [Responsive Design](#responsive-design)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [Outcome](#outcome)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## Objective

The primary objective of this project was to design and develop a **multi-page, production-quality website** that demonstrates advanced front-end development skills, including:

- **Client-side routing** — Implementing seamless single-page navigation using React Router DOM v7 with route-based code organization.
- **Page transitions & animations** — Creating smooth enter/exit page transitions using Framer Motion's `AnimatePresence` with custom easing curves.
- **Advanced CSS layouts** — Building complex, responsive grid systems using CSS Grid areas, Flexbox, `clamp()` fluid typography, and custom media queries.
- **Video integration** — Embedding auto-playing, muted HTML5 `<video>` elements as background media for portfolio showcases.
- **Premium design system** — Crafting a sophisticated visual identity with earthy color palettes, luxury typography (Outfit font), glassmorphism effects, and BEM-structured CSS.
- **Multi-page architecture** — Managing a website with six distinct pages, a shared navigation bar, a comprehensive footer, and consistent design language.

This project simulates the creation of a real-world client portfolio website, reinforcing skills in complex layout design, animation, routing, and professional-grade frontend architecture.

---

## Overview

**NEXA Studio** is a luxury interior design portfolio website featuring six pages:

1. **Landing** — A striking full-screen CSS Grid of image tiles acting as interactive navigation cards.
2. **Home** — A hero section with a split-pane layout, call-to-action buttons, and a featured projects video grid.
3. **Services** — A dynamic split-pane showcase where clicking service categories swaps the background video and description in real-time.
4. **About** — A brand story page with a CSS Grid layout, floating "Our Story" card, and a "Why Choose Us" feature grid.
5. **Contact** — A full-screen hero with a background image, gradient overlay, and a glassmorphism contact details panel.
6. **Portfolio** — A horizontal-scroll video card gallery showcasing featured interior design projects.

Every page is wrapped in a Framer Motion `PageTransition` component that provides smooth fade-and-slide animations during route changes. A sticky, glassmorphism-enabled navbar with a mobile hamburger drawer provides consistent navigation across all pages.

---

## Features

### Multi-Page Navigation
- **Six fully designed pages** — Landing, Home, Services, About, Contact, and Portfolio.
- **Client-side routing** with React Router DOM v7 for instant, no-reload page transitions.
- **Animated page transitions** using Framer Motion's `AnimatePresence` with custom cubic-bezier easing curves (0.55s enter, 0.35s exit).
- **Scroll-to-top** utility that automatically scrolls to the top of the page on every route change.
- **404 Not Found** page for unmatched routes.

### Interactive Landing Page
- Full-screen **8-cell CSS Grid** with high-resolution interior design images.
- Four interactive navigation cards (Home, Services, About, Contact) with hover effects.
- Four decorative image tiles hidden on mobile to preserve layout integrity.
- Grid transitions from an 8-cell desktop layout to a focused 4-cell mobile stack.

### Dynamic Services Showcase
- **Split-pane layout** — Video panel on the left, content panel on the right.
- **Five service categories**: Residential Interiors, Commercial Design, Hospitality Spaces, Custom Furniture, Space Planning.
- Clicking a service category dynamically swaps the background video with a cross-fade transition.
- Active service indicator with numbered navigation items and animated dot markers.
- Highlight tags for key competencies (End-to-End Project Management, Bespoke Design Solutions, etc.).

### Video Integration
- **HTML5 `<video>` elements** with `autoPlay`, `muted`, `loop`, and `playsInline` for seamless background playback.
- **10 video assets** — 5 for the portfolio grid, 5 for the services showcase.
- Video poster images as fallback while video loads.
- Programmatic video loading (`videoRef.current.load()`) when the active service changes.

### Premium Design System
- **Earthy color palette** — Warm browns (#b87333, #683818, #5a3520), creamy whites (#f4ede6, #faf5ef), muted grays.
- **Outfit font** — Modern, clean typography from Google Fonts.
- **Fluid typography** — Extensive use of CSS `clamp()` ensuring text scales beautifully without fixed pixel breakpoints.
- **Glassmorphism effects** — Backdrop blur, semi-transparent backgrounds, and layered card depth on the navbar and contact panel.
- **BEM CSS methodology** — Structured class naming (`navbar__link--active`, `services-nav__item`, `footer__contact-icon`) for maintainable, scalable styles.

### Responsive Architecture
- **Mobile-first approach** with three primary breakpoints (mobile, tablet, desktop).
- Sticky navbar with **animated hamburger menu** and full-screen mobile drawer.
- CSS Grid areas dynamically restructured across breakpoints.
- All images and videos maintain aspect ratios with `object-fit: cover`.

### Footer
- Responsive **4-column grid** footer with brand description, quick links, services list, and contact information.
- Large "NEXA" watermark text for visual branding.
- Social media icons (Instagram, Pinterest, LinkedIn, Facebook) with hover effects.
- Copyright notice and attribution.

---

## Steps Performed

### 1. Project Initialization & Tooling
- Scaffolded the React project using **Vite 8** with the `@vitejs/plugin-react` plugin.
- Installed core dependencies: `react@19`, `react-router-dom@7`, `framer-motion@12`, `tailwindcss@4`, and `lucide-react`.
- Configured the `@tailwindcss/vite` plugin and set up the `browserslist` for cross-browser compatibility.

### 2. Design System & Visual Identity
- Established a luxury-brand color palette (earthy browns, creamy whites, warm accents).
- Selected and integrated the **Outfit** font from Google Fonts for consistent typography.
- Defined a global CSS foundation in `index.css` with Tailwind directives and custom properties.
- Created nine page-specific CSS files following **BEM naming conventions** for scalable, maintainable styling.

### 3. Routing & Page Transition Architecture
- Set up **React Router DOM v7** with `Routes` and `Route` components in `App.jsx`.
- Implemented `AnimatePresence` from Framer Motion with `mode='wait'` for sequential page transitions.
- Created a reusable `PageTransition` wrapper component with custom `motion.div` variants:
  - **Enter**: `opacity: 0 → 1`, `y: 30 → 0` (0.55s, custom ease `[0.23, 1, 0.32, 1]`).
  - **Exit**: `opacity: 1 → 0`, `y: 0 → -20` (0.35s, ease `[0.4, 0, 0.2, 1]`).
- Built a `ScrollToTop` utility component using `useLocation` to reset scroll position on route changes.

### 4. Component Development (14 Components)
- **Landing.jsx** — Full-screen CSS Grid with 8 tiles (4 navigable, 4 decorative), using `useNavigate` for programmatic routing.
- **Home.jsx** — Split-pane hero section with CTA buttons, `useRef` for smooth scroll to the portfolio section, and embedded `Portfolio` grid.
- **Services.jsx** — Dynamic split-pane with `useState` for active service index, `useRef` for video element control, `useCallback` for debounced transitions, and keyboard accessibility (`onKeyDown`).
- **About.jsx** — CSS Grid layout with floating "Our Story" glassmorphism card and a 4-card "Why Choose Us" feature grid.
- **Contact.jsx** — Full-screen background hero with gradient overlay and a glassmorphism contact details panel using Lucide icons (Phone, Mail, MapPin, Clock).
- **Portfolio.jsx** — Horizontal-scroll video card grid rendering `Card` components from a `videos` data array.
- **Navbar.jsx** — Sticky navbar with scroll-aware glassmorphism, active link indicators, desktop link list, CTA button, and animated hamburger with full-screen mobile drawer.
- **Footer.jsx** — 4-column responsive grid with brand info, quick links, services, contact details, social media icons, and copyright.
- **Card.jsx** / **CardContent.jsx** — Reusable video card components for the portfolio grid.
- **PageTransition.jsx** — Framer Motion wrapper for animated route transitions.
- **ScrollToTop.jsx** — Utility component resetting scroll on navigation.
- **NotFound.jsx** — 404 fallback page for unmatched routes.
- **videos.js** — Data module exporting an array of 5 video objects (Aurelia, Ivory Haven, The Urban Oasis, Dusk till Dawn, Artisan 21).

### 5. Video Integration & Asset Management
- Sourced and organized 10 MP4 video files across two directories (`assets/videos/` and `assets/videos/services/`).
- Curated high-resolution JPG images for landing page tiles, service posters, contact hero, and about page backgrounds.
- Implemented programmatic video loading in `Services.jsx` using `useRef` and `useEffect` to reload video when the active service changes.

### 6. Responsive Design Implementation
- **Landing Page** — 8-cell grid → 4-cell (1-column) mobile stack; decorative cells hidden.
- **Home Page** — Hero flexbox row → column; CTA buttons remain above the fold.
- **About Page** — CSS Grid areas restructured so heading and floating card stack naturally on mobile.
- **Services Page** — Split-pane → stacked layout with video on top, content below.
- **Contact Page** — Side-by-side flex → vertical stack with adjusted padding.
- **Footer** — 4-column grid → stacked single-column layout on mobile.
- **Navbar** — Desktop links hidden; hamburger menu and full-screen mobile drawer activated.
- **Typography** — `clamp()` used extensively for fluid font sizing across all pages.

### 7. Polish & Accessibility
- Added `aria-label` attributes to the hamburger button, navigation links, and social media icons.
- Implemented keyboard navigation (`onKeyDown` for Enter/Space) on the services category list.
- Used `role="button"` and `tabIndex={0}` for interactive non-button elements.
- Applied `rel="noopener noreferrer"` on external links for security.

---

## Tools & Technologies Used

| Technology / Tool          | Role                                                                      |
| -------------------------- | ------------------------------------------------------------------------- |
| **React 19**               | UI library for building the component-based, reactive interface           |
| **Vite 8**                 | Modern build tool and development server with Hot Module Replacement       |
| **React Router DOM v7**    | Client-side routing for seamless multi-page navigation                    |
| **Framer Motion 12**       | Animation library for page transitions with `AnimatePresence`             |
| **Tailwind CSS 4**         | Utility-first CSS framework for rapid responsive styling                  |
| **Vanilla CSS (BEM)**      | Custom stylesheets for complex Grid layouts, animations, and page-specific designs |
| **Lucide React**           | Icon library providing navigation, contact, and UI icons                  |
| **HTML5 Video**            | Native `<video>` elements for auto-playing background video showcases     |
| **CSS Grid & Flexbox**     | Advanced layout systems for responsive multi-column designs               |
| **CSS `clamp()`**          | Fluid typography that scales smoothly across all viewport sizes           |
| **Google Fonts (Outfit)**  | Premium typography for the luxury brand identity                          |
| **JavaScript (ES6+)**      | Core language with hooks, refs, callbacks, and module imports             |
| **ESLint**                 | Static analysis for code quality and consistency                          |
| **Git & GitHub**           | Version control and repository hosting                                    |
| **VS Code**                | Primary code editor and development environment                           |

---

## Project Structure

```text
synent-task7-multi_page_website-naitik/
├── public/                             # Static assets
├── src/
│   ├── assets/
│   │   ├── images/                     # High-resolution images for pages and tiles
│   │   │   ├── home/                   # Home page hero imagery
│   │   │   ├── contact/                # Contact page background
│   │   │   ├── card-background.jpg     # Landing page card background
│   │   │   ├── tile5.jpg – tile12.jpg  # Landing page grid tile images
│   │   │   └── ...
│   │   └── videos/                     # Video assets
│   │       ├── services/               # Service-specific background videos
│   │       │   ├── commercial.mp4
│   │       │   ├── hospitality.mp4
│   │       │   ├── furniture.mp4
│   │       │   └── space.mp4
│   │       ├── video1.mp4 – video5.mp4 # Portfolio showcase videos
│   │       └── ...
│   ├── components/
│   │   ├── About.jsx                   # Brand story and "Why Choose Us" section
│   │   ├── Card.jsx                    # Video card component for portfolio
│   │   ├── CardContent.jsx             # Card content sub-component
│   │   ├── Contact.jsx                 # Contact page with glassmorphism panel
│   │   ├── Footer.jsx                  # 4-column responsive footer
│   │   ├── Home.jsx                    # Hero section and portfolio overview
│   │   ├── Landing.jsx                 # Interactive 8-cell CSS Grid entry page
│   │   ├── Navbar.jsx                  # Sticky navbar with mobile drawer
│   │   ├── NotFound.jsx                # 404 fallback page
│   │   ├── PageTransition.jsx          # Framer Motion page transition wrapper
│   │   ├── Portfolio.jsx               # Horizontal-scroll video grid
│   │   ├── ScrollToTop.jsx             # Scroll reset utility on route change
│   │   ├── Services.jsx                # Dynamic split-pane services showcase
│   │   └── videos.js                   # Video data module (5 project entries)
│   ├── styles/
│   │   ├── about.css                   # About page CSS Grid and card styles
│   │   ├── contact.css                 # Contact page hero and panel styles
│   │   ├── footer.css                  # Footer grid and watermark styles
│   │   ├── home.css                    # Home hero section and portfolio styles
│   │   ├── index.css                   # Global styles and Tailwind directives
│   │   ├── landing.css                 # Landing page grid layout styles
│   │   ├── navbar.css                  # Navbar, hamburger, and mobile drawer styles
│   │   ├── portfolio.css               # Portfolio card grid styles
│   │   └── services.css                # Services split-pane and navigation styles
│   ├── App.css                         # Application-level styles
│   ├── App.jsx                         # Root component with routing configuration
│   └── main.jsx                        # React DOM entry point with BrowserRouter
├── dist/                               # Production build output
├── index.html                          # HTML template
├── package.json                        # Dependencies and npm scripts
├── vite.config.js                      # Vite build configuration
├── eslint.config.js                    # ESLint configuration
└── README.md
```

---

## Page Descriptions

### Landing Page (`/`)
A full-screen, interactive CSS Grid serving as the entry point. Eight image tiles are arranged in a complex grid — four are clickable navigation cards (Home, Services, About, Contact) with hover overlays, and four are purely decorative. On mobile, decorative tiles are hidden and the layout collapses to a focused single-column stack.

### Home Page (`/home`)
Features a split-pane hero section with a large interior design image on the left and branded text content on the right. Includes "Explore" (smooth scrolls to the portfolio section) and "Get in Touch" (navigates to Contact) CTA buttons. Below the hero, a "Featured Projects" section displays a horizontal-scroll video card grid.

### Services Page (`/services`)
A dynamic split-pane showcase with a video panel on the left and a content panel on the right. Five service categories are listed in a numbered navigation menu. Clicking a category triggers a cross-fade video transition and updates the description. Highlight tags display key competencies.

### About Page (`/about`)
A CSS Grid layout with three areas: a large background image with a floating "Our Story" glassmorphism card, a large gradient "About Us" heading, and a "Why Choose Us" section with four numbered feature cards.

### Contact Page (`/contact`)
A full-screen hero section with a background image and gradient overlay. The left side displays heading text and a tagline. The right side features a glassmorphism panel with contact details (Phone, Email, Office, Working Hours) using Lucide icons.

### Portfolio Page (`/portfolio`)
A dedicated page rendering the horizontal-scroll video card grid, showcasing five featured interior design projects (Aurelia, Ivory Haven, The Urban Oasis, Dusk till Dawn, Artisan 21).

---

## Responsive Design

The website is built with a **mobile-first approach** and adapts across three primary breakpoints:

| Breakpoint       | Viewport Width   | Key Layout Changes                                                  |
| ---------------- | ---------------- | ------------------------------------------------------------------- |
| Mobile           | < 768px          | Single-column stacks, hidden decorative tiles, hamburger menu, fluid `clamp()` typography |
| Tablet           | 768px – 1023px   | Adaptive stacking, refined spacing, centered content areas          |
| Desktop          | ≥ 1024px         | Full multi-column Grid layouts, split-pane designs, expanded navbar |

### Per-Page Responsive Highlights
- **Landing**: 8-cell grid → 4-cell single-column stack; decorative cells hidden.
- **Home**: Hero row → column; CTA buttons remain above the fold on all devices.
- **About**: CSS Grid areas refactored for natural stacking without overlap.
- **Services**: Split-pane → stacked layout (video on top, content below).
- **Contact**: Side-by-side → vertical stack with adjusted padding.
- **Footer**: 4-column grid → single-column layout on mobile.

---

## Setup & Installation

### Prerequisites

- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher)

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/synent-task7-multi_page_website-naitik.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd synent-task7-multi_page_website-naitik
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Open the application:**

   Navigate to `http://localhost:5173` in your browser (or the port Vite assigns).

### Build for Production

```bash
npm run build
```

The optimized output will be generated in the `dist/` directory. To preview the production build:

```bash
npm run preview
```

---

## Usage

1. **Landing page** — Click any of the four navigation cards (Home, Services, About, Contact) to navigate to the respective page.
2. **Home page** — Click "Explore" to smooth-scroll to the featured projects section, or "Get in Touch" to navigate to the Contact page.
3. **Services page** — Click any service category in the numbered list to switch the background video and view its description.
4. **About page** — Read the brand story and explore the "Why Choose Us" feature cards.
5. **Contact page** — View contact details including phone, email, office address, and working hours.
6. **Navigation** — Use the sticky navbar to navigate between pages. On mobile, tap the hamburger icon to open the full-screen menu drawer.

---

## Outcome

### Final Result
A fully realized, **6-page premium portfolio website** that showcases advanced front-end development skills in React, demonstrating the ability to architect, design, and implement a production-quality multi-page web application with smooth animations, video integration, and responsive design.

### Key Achievements
- **Complete multi-page architecture** — Six distinct, fully designed pages connected through React Router with animated transitions, providing a seamless single-page application experience.
- **Advanced animation system** — Framer Motion-powered page transitions with custom cubic-bezier easing curves, creating a polished, app-like navigation feel.
- **Dynamic content rendering** — The Services page dynamically swaps background videos and descriptions based on user interaction, demonstrating complex state management with `useCallback`, `useRef`, and `useEffect`.
- **Sophisticated CSS Grid layouts** — Complex grid-area-based designs for the Landing page (8-cell interactive grid), About page (3-area asymmetric layout), and Footer (4-column responsive grid).
- **HTML5 video integration** — 10 embedded video assets with auto-play, loop, and programmatic loading, used for both portfolio showcases and service background media.
- **Premium design system** — A cohesive luxury-brand visual identity with earthy color palettes, Outfit typography, glassmorphism effects, and BEM-structured CSS across nine dedicated stylesheets.
- **Full responsive coverage** — Every page, component, and typographic element adapts fluidly across mobile, tablet, and desktop viewports using CSS `clamp()`, Grid restructuring, and media queries.
- **Accessibility considerations** — ARIA labels, keyboard navigation support, semantic HTML, and `rel="noopener noreferrer"` on external links.

### Skills Demonstrated
- React Router DOM for client-side multi-page routing
- Framer Motion for declarative page transition animations
- Complex CSS Grid and Flexbox layout systems
- React hooks: `useState`, `useEffect`, `useRef`, `useCallback`
- HTML5 Video API with programmatic control
- BEM CSS methodology for scalable stylesheets
- Fluid typography with CSS `clamp()`
- Responsive design across mobile, tablet, and desktop
- Component architecture with 14 focused, reusable components
- Accessibility best practices (ARIA, keyboard navigation)

---

## Future Enhancements

- Contact form with email submission (EmailJS or backend integration)
- Project detail pages with full case studies and image galleries
- Blog or journal section for design insights
- Intersection Observer-based scroll animations
- Dark mode toggle
- CMS integration for dynamic content management
- SEO optimization with meta tags and Open Graph data
- Performance optimization with lazy loading for images and videos

---

## License

This project was designed and developed by **Naitik Patel** as part of the **Synent Technology Internship Program**. All rights reserved.
