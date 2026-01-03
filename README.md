# NSS Mumbai Website

A modern, responsive website for the National Space Society - Mumbai Chapter, built with Next.js, React, and Tailwind CSS.

## 🚀 Overview

This website serves as the digital presence for NSS Mumbai, showcasing our mission to advance space exploration and education. The site features:

- **Modern UI/UX**: Clean, space-themed design with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Components**: Engaging user experience with hover effects and transitions
- **Content-Rich**: Comprehensive information about NSS Mumbai's activities, team, and resources

## 📋 Features

- 🏠 **Home Page**: Hero section with mission statement, recent activities, podcasts, and blog posts
- 📚 **About Section**: 
  - Organization overview and mission
  - Team page with leadership information
  - Advisory board details
  - Collaboration partnerships
- 🔍 **Explore Section**:
  - Magazine archive (8 volumes)
  - Webinars and events
  - Podcast episodes
- 📧 **Contact Page**: Contact form, social media links, and newsletter subscription
- 📱 **Blog Integration**: Links to NSS Mumbai's external blog

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **UI Library**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd "D:\Claude\Projects\NSS Mumbai website\Website"
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
Website/
├── app/
│   ├── about/
│   │   ├── team/
│   │   ├── advisory/
│   │   └── collaboration/
│   ├── explore/
│   │   ├── magazine/
│   │   └── webinar/
│   ├── contact/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── public/
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Design Features

- **Space-Themed Color Palette**: Deep blues, purples, and cyans
- **Glassmorphism Effects**: Modern glass-like UI elements
- **Smooth Animations**: Floating elements, gradient shifts, and hover effects
- **Gradient Text**: Animated gradient text for headings
- **Responsive Navigation**: Mobile-friendly dropdown menus
- **Custom Scrollbar**: Themed scrollbar matching the design

## 🔗 External Links

- Blog: [https://nssmumbai.blogspot.com/](https://nssmumbai.blogspot.com/)
- Podcast: [Spotify](https://open.spotify.com/show/57Nh01m6jJgAqhCTOaQjsJ)
- Events: [Linktree](https://linktr.ee/NSS_USA_Mumbai)
- Social Media:
  - [LinkedIn](https://www.linkedin.com/company/nssusamumbai)
  - [Twitter](https://twitter.com/nss_mumbai)
  - [Facebook](https://www.facebook.com/NSSUSA.Mumbai/)
  - [Instagram](https://www.instagram.com/nationalspacesociety_mumbai/)
  - [YouTube](https://www.youtube.com/@nationalspacesociety_mumbai)

## 📄 Pages

1. **Home** (`/`): Landing page with hero section, stats, activities, and blog posts
2. **About** (`/about`): Mission, vision, and organizational overview
3. **Our Team** (`/about/team`): Leadership and team member information
4. **Advisory Board** (`/about/advisory`): Advisory board members and responsibilities
5. **Collaboration** (`/about/collaboration`): Partnership and collaboration information
6. **Magazine** (`/explore/magazine`): Magazine archive and latest editions
7. **Webinar** (`/explore/webinar`): Upcoming and past webinar recordings
8. **Contact** (`/contact`): Contact form and social media links

## 🎯 Key Components

### Navbar
- Fixed position navigation bar
- Dropdown menus for Explore and About sections
- Mobile-responsive hamburger menu
- Glass morphism effect

### Footer
- Organization information
- Quick links
- Social media icons
- Contact information

### Glass Effect Cards
Reusable glass-morphism cards throughout the site for content sections

## 🌟 Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme:
```javascript
colors: {
  space: {
    dark: '#0a0e27',
    navy: '#1a1f3a',
    blue: '#2563eb',
    cyan: '#06b6d4',
    purple: '#8b5cf6',
  }
}
```

### Animations
Modify animations in `app/globals.css` or `tailwind.config.js`

## 📝 Content Updates

To update content:
1. Navigate to the respective page file in `app/`
2. Edit the text, links, or data arrays
3. Save and the changes will reflect immediately in development mode

## 🤝 Contributing

This website represents NSS Mumbai's digital presence. For contributions or suggestions, please contact the NSS Mumbai team.

## 📧 Contact

**NSS Mumbai**
- Location: Mumbai, Maharashtra, India - 421301
- Website: [www.nss-mumbai.org](https://www.nss-mumbai.org)

## 📜 License

© 2025 National Space Society - Mumbai Chapter. All rights reserved.
A chapter of the National Space Society (USA)

---

**Built with ❤️ for space exploration and education**
