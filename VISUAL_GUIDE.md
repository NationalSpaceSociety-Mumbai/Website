# Visual Guide - NSS Mumbai Website

A visual reference for the design system and components used throughout the website.

## 🎨 Color Palette

### Primary Colors
```
Blue (#2563eb)      ████████  Primary action color, links
Purple (#8b5cf6)    ████████  Secondary highlights
Cyan (#06b6d4)      ████████  Accent color
```

### Background Colors
```
Space Dark (#0a0e27)   ████████  Main background
Navy (#1a1f3a)         ████████  Secondary background
Black/40               ████████  Overlay effects
```

### Text Colors
```
White (#ffffff)        ████████  Primary text
Gray-300 (#d1d5db)     ████████  Secondary text
Gray-400 (#9ca3af)     ████████  Tertiary text
Blue-400 (#60a5fa)     ████████  Link text
```

### Gradient Combinations
```
Blue to Purple         ████████ → ████████  Primary gradient
Purple to Pink         ████████ → ████████  Secondary gradient
Cyan to Blue          ████████ → ████████  Accent gradient
Blue→Purple→Cyan      ████████ → ████████ → ████████  Text gradient
```

---

## 🎭 Component Styles

### Glass Cards
```
Background: bg-white/10
Backdrop: backdrop-blur-md
Border: border border-white/20
Shadow: Custom box-shadow
```

Visual effect:
```
┌─────────────────────────────┐
│  Frosted glass effect       │
│  Semi-transparent           │
│  Blurred background         │
│  Subtle border              │
└─────────────────────────────┘
```

### Buttons

**Primary Button:**
```tsx
<button className="
  px-8 py-4
  bg-gradient-to-r from-blue-600 to-purple-600
  rounded-full
  text-white font-semibold
  hover:from-blue-700 hover:to-purple-700
  transition-all transform hover:scale-105
">
  Click Me
</button>
```

Visual:
```
┌──────────────────┐
│  ▶ Button Text  │  ← Gradient background
└──────────────────┘  ← Rounded edges
     ↑
  Hover: scales up slightly
```

**Secondary Button:**
```tsx
<button className="
  px-8 py-4
  glass
  rounded-full
  text-white font-semibold
  hover:bg-white/20
  transition-all
">
  Secondary
</button>
```

---

## 📐 Layout Structure

### Page Layout
```
┌─────────────────────────────────────────────────┐
│  Navbar (Fixed, Glass Effect)                   │
├─────────────────────────────────────────────────┤
│                                                  │
│  pt-32 (Push content below navbar)             │
│                                                  │
│  ┌───────────────────────────────────────────┐ │
│  │  max-w-6xl mx-auto                        │ │
│  │                                            │ │
│  │  Page Content                              │ │
│  │                                            │ │
│  └───────────────────────────────────────────┘ │
│                                                  │
│  pb-20 (Bottom padding)                         │
│                                                  │
├─────────────────────────────────────────────────┤
│  Footer                                          │
└─────────────────────────────────────────────────┘
```

### Section Structure
```
┌─────────────────────────────┐
│  Section Title (Centered)    │ ← text-5xl or text-6xl
│  ──────                      │ ← Gradient underline
│                              │
│  Subtitle text               │ ← text-xl text-gray-300
│                              │
│  mb-16 spacing               │
│                              │
│  ┌──────────┐ ┌──────────┐  │
│  │  Card 1  │ │  Card 2  │  │ ← Grid layout
│  └──────────┘ └──────────┘  │
└─────────────────────────────┘
```

---

## ✨ Animations

### Float Animation
```css
@keyframes float {
  0%, 100%  { transform: translateY(0px); }
  50%       { transform: translateY(-20px); }
}
```
Used for: Rocket icons, hero elements

### Gradient Shift
```css
@keyframes gradient-shift {
  0%, 100%  { background-position: 0% 50%; }
  50%       { background-position: 100% 50%; }
}
```
Used for: Gradient text effects

### Fade In
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
```
Used for: Page content entrance

### Hover Effects
```
Scale Up:     transform: scale(1.05)
Color Shift:  bg-blue-600 → bg-blue-700
Opacity:      opacity-0 → opacity-100
```

---

## 🎯 Icons

### Icon Sizes
- Small: `w-4 h-4` (16px)
- Medium: `w-6 h-6` (24px)
- Large: `w-8 h-8` (32px)
- Hero: `w-20 h-20` (80px)

### Icon Containers
```
Circle Background:
┌─────┐
│  ✦  │  ← Icon
└─────┘
  ↑
bg-gradient-to-r from-blue-600 to-purple-600
rounded-full
w-16 h-16
```

---

## 📱 Responsive Breakpoints

```
Mobile:     < 768px   (1 column)
Tablet:     768px+    (2 columns)
Desktop:    1024px+   (3-4 columns)
Wide:       1280px+   (Full layout)
```

### Grid Layouts
```
Mobile (< 768px):
┌──────────────┐
│   Card 1     │
├──────────────┤
│   Card 2     │
├──────────────┤
│   Card 3     │
└──────────────┘

Tablet (768px+):
┌─────────┬─────────┐
│ Card 1  │ Card 2  │
├─────────┼─────────┤
│ Card 3  │ Card 4  │
└─────────┴─────────┘

Desktop (1024px+):
┌──────┬──────┬──────┐
│ C1   │ C2   │ C3   │
├──────┼──────┼──────┤
│ C4   │ C5   │ C6   │
└──────┴──────┴──────┘
```

---

## 🎨 Typography

### Heading Hierarchy
```
H1: text-6xl (60px)  - Page titles
H2: text-5xl (48px)  - Section headers
H3: text-4xl (36px)  - Subsections
H4: text-2xl (24px)  - Card titles
H5: text-xl (20px)   - Small headers
```

### Font Weights
```
Regular:  font-normal  - Body text
Medium:   font-medium  - Emphasized text
Semibold: font-semibold - Buttons
Bold:     font-bold    - Headers
```

### Text Colors by Context
```
Headers:    text-white
Body:       text-gray-300
Links:      text-blue-400
Muted:      text-gray-400
Emphasis:   gradient-text
```

---

## 🌟 Special Effects

### Gradient Text
```tsx
<h1 className="gradient-text">
  Creating Spacefaring Civilization
</h1>
```
Effect: Animated gradient that shifts colors

### Glass Effect
```tsx
<div className="glass p-8 rounded-2xl">
  Content
</div>
```
Effect: Frosted glass with subtle transparency

### Hover Glow
```css
.glow {
  box-shadow: 
    0 0 20px rgba(37, 99, 235, 0.5),
    0 0 40px rgba(139, 92, 246, 0.3);
}
```
Effect: Blue-purple glow around elements

---

## 📊 Common Patterns

### Hero Section
```
1. Large title with gradient text
2. Subtitle with mission statement
3. Call-to-action buttons
4. Floating icon animation
5. Starry background
```

### Content Card
```
1. Glass background effect
2. Icon in gradient circle
3. Bold title
4. Description text
5. Hover scale effect
```

### Navigation
```
1. Fixed position at top
2. Glass background
3. Logo on left
4. Menu items with dropdowns
5. CTA button on right
6. Mobile hamburger menu
```

---

## 🎯 Best Practices

### Spacing
- Use multiples of 4: 4, 8, 12, 16, 20, 24...
- Consistent gaps in grids: gap-4, gap-6, gap-8
- Section padding: py-16, py-20

### Colors
- Always maintain good contrast
- Use gradients for visual interest
- Keep backgrounds dark for space theme
- Use white/light gray for text

### Animations
- Keep duration 200-500ms
- Use ease-in-out timing
- Don't overuse - be purposeful
- Test on slower devices

### Responsive
- Test at all breakpoints
- Mobile-first approach
- Touch-friendly targets (44px+)
- Readable font sizes on mobile

---

## 🖼️ Component Checklist

When creating a new component:

- [ ] Responsive at all breakpoints
- [ ] Consistent spacing (multiples of 4)
- [ ] Glass effect for cards (if applicable)
- [ ] Smooth hover transitions
- [ ] Accessible colors (good contrast)
- [ ] Semantic HTML structure
- [ ] Consistent with design system
- [ ] Tested in light/dark modes

---

## 📸 Page Layouts

### Standard Page
```
1. Header with icon + title + gradient underline
2. Subtitle/description
3. Main content (cards/grid)
4. Call-to-action section at bottom
```

### Card Grid Page
```
1. Page header
2. Featured card (larger, highlighted)
3. Grid of secondary cards (2-3 columns)
4. Newsletter/CTA section
```

---

**Note:** All measurements are in pixels unless otherwise specified. Tailwind classes automatically handle responsive sizing.

**Quick Reference:**
- px = horizontal padding
- py = vertical padding
- w = width
- h = height
- text-* = font size
- gap = spacing between grid items

**For more details, see the actual components in the codebase!**
