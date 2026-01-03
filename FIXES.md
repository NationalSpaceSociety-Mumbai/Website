# NSS Mumbai Website - Fixes & Improvements Log

This document tracks all fixes, improvements, and changes made to the website codebase.

---

## Table of Contents

- [GitHub Pages CSS Not Loading Fix](#github-pages-css-not-loading-fix---january-2026)
- [GitHub Actions Workflow Fix](#github-actions-workflow-fix---january-2026)
- [CSS Consolidation Fix](#css-consolidation-fix---january-2026)
- [Pending Improvements](#pending-improvements)

---

## GitHub Pages CSS Not Loading Fix - January 2026

**Date:** January 3, 2026  
**Issue:** CSS and JS not loading on deployed GitHub Pages site  
**Status:** ✅ Completed

### Problem

After deploying to `https://nationalspacesociety-mumbai.github.io/Website/`, the site appeared without any styling. The browser console showed 404 errors for CSS/JS files.

**Root Cause:** Next.js was generating asset paths starting from root (`/`) instead of the subdirectory (`/Website/`).

Example of broken paths:
```
❌ /_next/static/css/app.css        → 404 Not Found
❌ /_next/static/chunks/main.js     → 404 Not Found
```

Should be:
```
✅ /Website/_next/static/css/app.css
✅ /Website/_next/static/chunks/main.js
```

### Solution

Updated `next.config.js` to include `basePath` and `assetPrefix`:

**Before:**
```javascript
const nextConfig = {
  output: 'export',
  // basePath was commented out
  // basePath: '/nss-mumbai-website',
}
```

**After:**
```javascript
const nextConfig = {
  output: 'export',
  basePath: '/Website',
  assetPrefix: '/Website/',
}
```

### What These Settings Do

| Setting | Purpose |
|---------|--------|
| `basePath` | Prepends `/Website` to all routes and links |
| `assetPrefix` | Prepends `/Website/` to all static assets (CSS, JS, images) |

### Note for Custom Domains

If you later use a custom domain (e.g., `www.nss-mumbai.org`), you should:
1. Remove or comment out `basePath`
2. Remove or comment out `assetPrefix`

---

## GitHub Actions Workflow Fix - January 2026

**Date:** January 3, 2026  
**Issue:** PR build failing with webpack CLI error  
**Status:** ✅ Completed

### Problem

The GitHub Actions workflow `webpack.yml` was incorrectly configured for a Webpack project instead of Next.js:

```
Error: npm warn exec The following package was not found and will be installed: webpack@5.104.1
CLI for webpack must be installed.
Do you want to install 'webpack-cli' (yes/no):
Error: Process completed with exit code 1.
```

### Solution

1. Renamed `webpack.yml` → `build.yml`
2. Updated the workflow to use Next.js build commands

**Before (`webpack.yml`):**
```yaml
- name: Build
  run: |
    npm install
    npx webpack
```

**After (`build.yml`):**
```yaml
- name: Install dependencies
  run: npm ci

- name: Build with Next.js
  run: npm run build

- name: Check build output
  run: |
    echo "Build completed successfully!"
    ls -la out/
```

### Other Improvements

- Removed Node.js 22.x from test matrix (20.x is current LTS)
- Added npm caching for faster installs
- Changed `npm install` to `npm ci` for reproducible builds

---

## CSS Consolidation Fix - January 2026

**Date:** January 3, 2026  
**Issue:** Duplicate CSS/style definitions across multiple files  
**Status:** ✅ Completed

### Problem

The background gradient and base styles were defined in three separate locations, causing:
- Redundancy and maintenance overhead
- Use of `!important` flags to force styles
- Potential style conflicts
- Harder debugging

**Affected Files:**
1. `app/globals.css` — Body styles
2. `app/layout.tsx` — Inline `<style>` tag in `<head>`
3. `tailwind.config.js` — Custom color definitions

### Solution

#### 1. Cleaned `app/layout.tsx`

**Before:**
```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          body {
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%) !important;
            color: white !important;
            min-height: 100vh;
          }
        `}</style>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
```

**After:**
```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
```

#### 2. Enhanced `app/globals.css`

Reorganized the CSS file with proper sections:

| Section | Purpose |
|---------|---------|
| CSS Variables | Design tokens for colors, gradients, effects |
| Reset & Base | Box-sizing, body, html defaults |
| Scrollbar | Custom scrollbar for WebKit + Firefox |
| Selection | Text selection styling |
| Typography | Heading and paragraph defaults |
| Links & Buttons | Reset and transitions |
| Focus States | Accessibility-friendly focus indicators |
| Utility Classes | `.gradient-text`, `.glass`, `.glass-light`, `.glass-dark` |
| Animations | Float, fade-in, slide-up, pulse, twinkle |
| Component Classes | `.card`, `.btn-primary`, `.btn-secondary`, `.section`, `.input` |
| Responsive Utilities | Mobile/desktop visibility helpers |
| Loading States | Skeleton loaders and spinners |

**New CSS Variables Added:**
```css
:root {
  --color-space-dark: #0a0e27;
  --color-space-navy: #1a1f3a;
  --color-space-blue: #2563eb;
  --color-space-cyan: #06b6d4;
  --color-space-purple: #8b5cf6;
  
  --gradient-primary: linear-gradient(135deg, var(--color-space-dark) 0%, var(--color-space-navy) 50%, var(--color-space-dark) 100%);
  --gradient-accent: linear-gradient(90deg, #60a5fa, #a78bfa, #22d3ee);
  --gradient-button: linear-gradient(to right, var(--color-space-blue), var(--color-space-purple));
  
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.18);
  --glass-shadow: rgba(31, 38, 135, 0.37);
}
```

**New Utility Classes Added:**
- `.glass-light` — Lighter glass effect
- `.glass-dark` — Darker glass effect
- `.card` — Reusable card component
- `.card-interactive` — Card with hover effects
- `.btn` — Base button styles
- `.btn-primary` — Primary gradient button
- `.btn-secondary` — Secondary glass button
- `.section` — Standard section padding
- `.section-dark` — Section with dark background
- `.section-title` — Gradient section titles
- `.section-divider` — Decorative divider line
- `.input` — Form input styling
- `.nav-link` — Navigation link styling
- `.skeleton` — Loading skeleton
- `.loading-spinner` — Animated spinner

#### 3. Updated `tailwind.config.js`

**New Additions:**
```javascript
animation: {
  'fade-in': 'fadeIn 0.5s ease-out forwards',
  'slide-up': 'slideUp 0.5s ease-out forwards',
  'gradient': 'gradient-flow 8s linear infinite',
  'twinkle': 'twinkle 3s ease-in-out infinite',
  'spin-slow': 'spin 3s linear infinite',
},
backgroundImage: {
  'space-gradient': 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%)',
  'accent-gradient': 'linear-gradient(90deg, #60a5fa, #a78bfa, #22d3ee)',
  'button-gradient': 'linear-gradient(to right, #2563eb, #8b5cf6)',
},
boxShadow: {
  'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
  'glow-blue': '0 0 20px rgba(37, 99, 235, 0.5)',
  'glow-purple': '0 0 20px rgba(139, 92, 246, 0.5)',
},
```

### Benefits

1. **Single Source of Truth** — All styles now originate from `globals.css` and Tailwind
2. **CSS Variables** — Easy theme updates by changing variables in one place
3. **Reusable Classes** — Reduced code repetition across components
4. **No `!important`** — Removed forced style overrides
5. **Better Organization** — Clear sections make CSS maintainable
6. **Extended Tailwind** — New utilities available throughout the project

---

## Pending Improvements

The following improvements are identified but not yet implemented:

### High Priority

- [ ] **Add Images** — The `public/` folder lacks actual images; add team photos and graphics
- [ ] **Fix ESLint/TypeScript Errors** — Currently suppressed in `next.config.js`
- [ ] **Add Error Boundaries** — Create `error.tsx` for runtime error handling

### Medium Priority

- [ ] **Externalize Content** — Move hardcoded content to JSON/YAML files
- [ ] **Accessibility Audit** — Improve ARIA labels, color contrast, keyboard navigation
- [ ] **Performance Optimization** — Lazy load off-screen content, optimize star animations

### Low Priority

- [ ] **Consolidate Documentation** — Merge the ~25 markdown files into fewer, organized docs
- [ ] **Add Tests** — Implement unit and integration tests
- [ ] **Add Loading States** — Implement suspense boundaries and loading UI

---

## File Change Log

| Date | File | Change Type | Description |
|------|------|-------------|-------------|
| 2026-01-03 | `next.config.js` | Modified | Added basePath and assetPrefix for GitHub Pages |
| 2026-01-03 | `.github/workflows/webpack.yml` | Deleted | Removed incorrect webpack workflow |
| 2026-01-03 | `.github/workflows/build.yml` | Created | New Next.js build workflow |
| 2026-01-03 | `app/layout.tsx` | Modified | Removed inline styles from `<head>` |
| 2026-01-03 | `app/globals.css` | Rewritten | Consolidated and organized all CSS |
| 2026-01-03 | `tailwind.config.js` | Enhanced | Added new animations, gradients, shadows |
| 2026-01-03 | `FIXES.md` | Created | This documentation file |

---

## Contributing

When making fixes or improvements:

1. Document the issue clearly
2. Describe the solution implemented
3. List all files changed
4. Update the "File Change Log" table above
5. Move completed items from "Pending Improvements" to their own section

---

*Last Updated: January 3, 2026*
