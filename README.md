# NEXA Studio

A modern, high-end interior design and architecture portfolio website built with React and Tailwind CSS. The project focuses on creating a visually striking, fully responsive experience with smooth animations, fluid typography, and premium aesthetics.

![NEXA Studio Hero Screenshot](src/assets/images/home/homeMain.jpg)

## 🌟 Features

- **Premium Design System**: Sophisticated color palette (earthy browns, creamy whites) and elegant typography (Outfit font) tailored for a luxury brand identity.
- **Fully Responsive Architecture**: Implemented with CSS Grid, Flexbox, fluid typography (`clamp()`), and media queries ensuring a flawless experience across:
  - **Desktop (1024px+)**: Expansive multi-column layouts and immersive hero sections.
  - **Tablet (768px - 1023px)**: Adaptive stacking and refined spacing.
  - **Mobile (< 768px)**: Clean, single-column vertical flows with optimized touch targets.
- **Dynamic Layouts**: 
  - An interactive, image-based grid on the Landing Page.
  - Split-pane designs for Home and Services pages.
  - Sticky glassmorphism Navbar with an animated mobile drawer.
- **Video Integration**: Embedded, auto-playing HTML5 background videos for showcasing featured projects.
- **Modern Routing**: Built on `react-router-dom` for seamless, single-page navigation.

## 🛠️ Technologies Used

- **React 18**
- **Vite** (Build Tool)
- **Tailwind CSS** (Utility-first styling, heavily customized)
- **Vanilla CSS** (For complex responsive Grid layouts and custom animations)
- **Lucide React** (Iconography)
- **React Router DOM v6**

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js and npm installed on your machine.

### Installation

1. **Clone the repository** (if applicable) or download the project files.
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
5. **Open your browser:** Navigate to `http://localhost:5173/` (or the port Vite assigns).

## 📁 Project Structure

```text
src/
├── assets/
│   ├── images/       # High-quality structural and decorative images
│   └── videos/       # Background video assets for the Portfolio
├── components/
│   ├── About.jsx     # Brand story and 'Why Choose Us' section
│   ├── Contact.jsx   # Contact information and inquiry form
│   ├── Footer.jsx    # Responsive grid footer with large branding
│   ├── Home.jsx      # Hero section and portfolio overview
│   ├── Landing.jsx   # Initial entry page with 4-card interactive grid
│   ├── Navbar.jsx    # Top navigation with mobile hamburger menu
│   ├── Portfolio.jsx # Video grid component
│   └── Services.jsx  # Split-pane detailed services showcase
├── styles/
│   ├── about.css
│   ├── contact.css
│   ├── footer.css
│   ├── home.css
│   ├── index.css     # Global styles and Tailwind directives
│   ├── landing.css
│   ├── navbar.css
│   ├── portfolio.css
│   └── services.css
├── App.jsx           # Main routing component
└── main.jsx          # React entry point
```

## 🎨 Responsive Design Details

Recent major updates have polished the mobile and tablet experience:
- **Landing Page**: Transitions from an 8-cell desktop grid to a focused 4-cell (1-column) stack on mobile, hiding decorative-only cells.
- **Home Page**: The hero section flexbox switches from row to column, keeping call-to-action buttons visible above the fold on all devices.
- **About Page**: Complex CSS Grid areas refactored so the "About Us" heading and floating "Our Story" card stack naturally without overlapping.
- **Contact Page**: Side-by-side flex layout breaks into a vertical stack with appropriate padding on mobile.
- **Typography**: Extensive use of CSS `clamp()` ensures text scales beautifully on every device size without fixed pixel breakpoints.

## 📄 License

This project is created as a portfolio and task demonstration. Assets and code belong to the respective creators. All rights reserved.
