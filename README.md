# 🌟 Portfolio Website

A modern, interactive portfolio website built with React and 3D animations to showcase my work, skills, and experience.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?logo=vite)

## ✨ Features

- **🎨 Interactive 3D Elements** - Immersive 3D house model using Spline and Three.js
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **⚡ Smooth Animations** - Framer Motion powered transitions and scroll effects
- **🎯 Smooth Navigation** - React Scroll integration for seamless section transitions
- **📬 Contact Form** - Integrated with Web3Forms for easy communication
- **💼 Project Showcase** - Dynamic project cards displaying work portfolio
- **🏢 Work Experience** - Interactive tabs showing professional background
- **🌈 Modern UI/UX** - Clean design with gradient backgrounds and glassmorphism effects

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Component-based UI library
- **Vite** - Lightning-fast build tool and dev server
- **SCSS** - Advanced styling with nested rules and variables

### 3D & Animation
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber
- **Spline** - 3D design and animation tool integration
- **Framer Motion** - Animation library for React

### Navigation & Forms
- **React Scroll** - Smooth scrolling between sections
- **React Router DOM** - Client-side routing
- **Web3Forms** - Form submission handling

## 📋 Sections

1. **Introduction** - 3D interactive house model showcase
2. **About Me** - Personal introduction with profile image and key highlights
3. **Work Experience** - Interactive tabs displaying professional background
4. **Projects** - Portfolio of completed projects with descriptions
5. **Contact** - Contact form for visitor inquiries

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd Portfolio-website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🎨 Styling

The project uses SCSS for styling with:
- Component-scoped styles
- Mobile-first responsive design
- CSS variables for consistent theming
- Smooth transitions and hover effects

## 📬 Contact Form Setup

The contact form uses Web3Forms. To set up your own:

1. Get your access key from [Web3Forms](https://web3forms.com)
2. Replace the access key in `/components/contact/Contact.jsx`
3. The form handles success/error states automatically

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Deploy Options
- **Vercel** - Recommended for React apps
- **Netlify** - Easy continuous deployment
- **GitHub Pages** - Free hosting for static sites

## 📂 Project Structure

```
Portfolio-website/
├── components/
│   ├── 3DComponents/          # 3D model components
│   ├── about-me/              # About section
│   ├── buttons/               # Reusable button components
│   ├── contact/               # Contact form
│   ├── LoadingScreen/         # Initial loading animation
│   ├── navbar/                # Navigation bar
│   ├── projectCard/           # Project showcase
│   └── work-experiences/      # Work experience tabs
├── public/
│   └── icons/                 # Static assets and icons
├── src/
│   ├── App.jsx                # Main app component
│   ├── App.scss               # Global styles
│   └── main.jsx               # App entry point
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
└── vite.config.js             # Vite configuration
```

## 🎯 Key Features Breakdown

### 3D Interactive Elements
- Custom 3D house model created with Spline
- Interactive camera controls
- Optimized for performance

### Smooth Scroll Navigation
- Scroll-to-section functionality
- Active section highlighting
- Smooth scroll behavior

### Animation System
- Scroll-triggered animations
- Fade-in effects on view
- Hover state transitions

## 🔧 Configuration

### Vite Config
The project uses Vite for fast development and optimized builds. Configuration can be modified in `vite.config.js`.

### ESLint
Code quality is maintained with ESLint. Rules are defined in `eslint.config.js`.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**

- Portfolio: [Your Website]
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Built with ❤️ using React and modern web technologies
