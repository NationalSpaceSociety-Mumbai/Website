# Quick Start Guide - NSS Mumbai Website

Get the website running locally in under 5 minutes!

## ⚡ Quick Setup

### Prerequisites
```bash
# Check if Node.js is installed (need 18+)
node --version

# Check if npm is installed
npm --version
```

If not installed, download from [nodejs.org](https://nodejs.org/)

### Installation (3 Steps)

1. **Navigate to project:**
```bash
cd "D:\Claude\Projects\NSS Mumbai website\Website"
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open browser:**
Visit [http://localhost:3000](http://localhost:3000)

That's it! 🎉

---

## 🛠️ Available Commands

```bash
# Development (with hot reload)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Check for linting issues
npm run lint
```

---

## 📁 Project Structure (Quick Reference)

```
Website/
├── app/                    # Pages and routes
│   ├── page.tsx           # Home page
│   ├── about/             # About section
│   ├── explore/           # Magazine & Webinars
│   └── contact/           # Contact page
├── components/            # Reusable components
│   ├── Navbar.tsx         # Navigation
│   └── Footer.tsx         # Footer
└── public/                # Static assets
```

---

## 🎨 Making Changes

### Update Homepage Content
Edit: `app/page.tsx`

### Update Navigation
Edit: `components/Navbar.tsx`

### Update Footer
Edit: `components/Footer.tsx`

### Update Styles
Global styles: `app/globals.css`
Tailwind config: `tailwind.config.js`

### Add New Page
1. Create folder in `app/`
2. Add `page.tsx` file
3. Export React component

Example:
```typescript
// app/new-page/page.tsx
export default function NewPage() {
  return <div>New Page Content</div>
}
```

---

## 🎯 Common Tasks

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  space: {
    dark: '#0a0e27',    // Change these
    navy: '#1a1f3a',
    blue: '#2563eb',
    // ...
  }
}
```

### Add Social Media Link
Edit `components/Footer.tsx` and `app/contact/page.tsx`

### Update Team Members
Edit `app/about/team/page.tsx`

### Add Magazine Volume
Edit `app/explore/magazine/page.tsx`

---

## 🐛 Troubleshooting

### Port 3000 Already in Use?
```bash
# Windows
npx kill-port 3000

# Mac/Linux
lsof -ti:3000 | xargs kill
```

Or use different port:
```bash
npm run dev -- -p 3001
```

### Build Errors?
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Styling Not Working?
1. Check if Tailwind CSS classes are correct
2. Make sure `globals.css` is imported in `app/layout.tsx`
3. Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)

---

## 📝 Development Tips

### Hot Reload
Changes are automatically reflected in browser. Just save the file!

### TypeScript Errors
The editor will show errors. Fix them before building.

### Code Formatting
Use Prettier or your editor's formatter:
```bash
npm install --save-dev prettier
```

### VS Code Extensions (Recommended)
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin (Volar)
- Prettier

---

## 🚀 Ready to Deploy?

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

**Quick Deploy to Vercel:**
```bash
npm i -g vercel
vercel
```

---

## 📞 Need Help?

- 📖 [Full Documentation](README.md)
- 🚀 [Deployment Guide](DEPLOYMENT.md)
- 📋 [Changelog](CHANGELOG.md)
- 💬 Contact: NSS Mumbai Team

---

## ✅ Checklist for First Time Setup

- [ ] Node.js 18+ installed
- [ ] Project dependencies installed (`npm install`)
- [ ] Development server running (`npm run dev`)
- [ ] Website opens in browser (localhost:3000)
- [ ] Made a test change and saw it update
- [ ] Reviewed project structure
- [ ] Read through the README

---

**Happy Coding! 🚀✨**

Remember: The future of humanity is space!
