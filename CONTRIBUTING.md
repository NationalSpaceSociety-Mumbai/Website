# Contributing to NSS Mumbai Website

Thank you for your interest in contributing to the NSS Mumbai website! This guide will help you get started.

## 🤝 How to Contribute

### Types of Contributions

1. **Bug Fixes** - Report or fix bugs
2. **Feature Additions** - Propose and implement new features
3. **Content Updates** - Update text, images, or information
4. **Documentation** - Improve guides and documentation
5. **Design Improvements** - Enhance UI/UX

## 🚀 Getting Started

### 1. Setup Development Environment

```bash
# Clone or navigate to repository
cd "D:\Claude\Projects\NSS Mumbai website\Website"

# Install dependencies
npm install

# Start development server
npm run dev
```

### 2. Create a Branch

```bash
# Create a new branch for your feature
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/bug-description
```

### 3. Make Your Changes

- Write clean, readable code
- Follow existing code style
- Test your changes thoroughly
- Update documentation if needed

### 4. Test Your Changes

```bash
# Run the development server
npm run dev

# Build for production
npm run build

# Check for TypeScript errors
npm run lint
```

### 5. Commit Your Changes

```bash
# Stage your changes
git add .

# Commit with descriptive message
git commit -m "feat: add new feature description"
```

### Commit Message Format

Use conventional commit messages:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

Examples:
```
feat: add team member bio section
fix: correct navigation dropdown behavior
docs: update deployment guide
style: improve button hover effects
```

## 📝 Code Style Guidelines

### TypeScript/React

```typescript
// Use functional components
export default function ComponentName() {
  return <div>Content</div>
}

// Use meaningful variable names
const userData = fetchUserData()

// Add comments for complex logic
// Calculate the orbital period based on altitude
const orbitalPeriod = calculatePeriod(altitude)
```

### Tailwind CSS

```tsx
// Use Tailwind utility classes
<div className="flex items-center gap-4">

// For custom styles, use globals.css
// Avoid inline styles unless necessary

// Group related classes
<div className="
  flex items-center justify-center
  w-full h-full
  bg-blue-500 text-white
  hover:bg-blue-600
  transition-all
">
```

### File Naming

- Components: `PascalCase.tsx` (e.g., `Navbar.tsx`)
- Pages: `page.tsx` in appropriate folder
- Utilities: `camelCase.ts`
- Styles: `kebab-case.css`

## 🎨 Design Guidelines

### Colors

Stick to the space theme:
```css
/* Primary Colors */
Blue: #2563eb
Purple: #8b5cf6
Cyan: #06b6d4

/* Background Colors */
Dark: #0a0e27
Navy: #1a1f3a
```

### Typography

- Headers: Use gradient text effect
- Body: Regular weight, good contrast
- Links: Use blue-400 or purple-400

### Spacing

- Consistent padding: 4, 6, 8, 12, 16, 20
- Use Tailwind spacing scale
- Maintain visual hierarchy

### Animations

- Keep animations subtle and purposeful
- Use ease-in-out transitions
- Duration: 200-500ms for most effects

## 📁 Project Structure

```
app/
├── about/           # About section pages
├── explore/         # Magazine and webinar pages
├── contact/         # Contact page
├── globals.css      # Global styles
├── layout.tsx       # Root layout
└── page.tsx         # Home page

components/
├── Navbar.tsx       # Navigation component
└── Footer.tsx       # Footer component
```

### Adding a New Page

1. Create folder in `app/`
2. Add `page.tsx` file
3. Export React component
4. Update navigation in `Navbar.tsx`

Example:
```tsx
// app/new-page/page.tsx
'use client'

export default function NewPage() {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Your content */}
      </div>
    </div>
  )
}
```

## 🧪 Testing Guidelines

### Before Submitting

- [ ] Code builds without errors (`npm run build`)
- [ ] No TypeScript errors
- [ ] All pages load correctly
- [ ] Links work properly
- [ ] Mobile responsive
- [ ] Animations work smoothly
- [ ] No console errors

### Browser Testing

Test on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📦 Pull Request Process

1. **Update Documentation**: If needed, update README or other docs
2. **Test Thoroughly**: Ensure everything works
3. **Create PR**: 
   - Clear title
   - Detailed description
   - Screenshots if UI changes
   - Link to related issues
4. **Address Reviews**: Respond to feedback
5. **Merge**: Once approved, PR will be merged

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Design improvement

## Testing
- [ ] Tested locally
- [ ] Tested on mobile
- [ ] No TypeScript errors
- [ ] Build successful

## Screenshots
(If applicable)
```

## 🐛 Bug Reports

### Before Reporting

1. Check if bug already reported
2. Try to reproduce consistently
3. Test on latest version
4. Clear browser cache

### Bug Report Template

```markdown
**Describe the bug**
Clear description of what's wrong

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What should happen

**Screenshots**
If applicable

**Environment**
- Browser: [e.g., Chrome 120]
- OS: [e.g., Windows 11]
- Screen size: [e.g., 1920x1080]
```

## 💡 Feature Requests

### Before Requesting

1. Check if feature already exists
2. Check if already requested
3. Consider if aligns with project goals

### Feature Request Template

```markdown
**Feature Description**
What feature do you want?

**Use Case**
Why is this feature needed?

**Proposed Solution**
How should it work?

**Alternatives**
Any alternative solutions?
```

## 📚 Resources

### Learning
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Tools
- [VS Code](https://code.visualstudio.com/)
- [React Developer Tools](https://react.dev/learn/react-developer-tools)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## 🤔 Questions?

- Check documentation in project root
- Review existing code for examples
- Ask in project discussions
- Contact NSS Mumbai team

## 📜 Code of Conduct

- Be respectful and constructive
- Welcome newcomers
- Focus on the project goals
- Help others learn and grow

## ⭐ Recognition

Contributors will be recognized in:
- Project documentation
- Release notes
- Special thanks section

## 📝 License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

## 🚀 Quick Contribution Workflow

```bash
# 1. Create branch
git checkout -b feature/my-feature

# 2. Make changes
# ... edit files ...

# 3. Test
npm run dev
npm run build

# 4. Commit
git add .
git commit -m "feat: add my feature"

# 5. Push
git push origin feature/my-feature

# 6. Create Pull Request
# ... on GitHub/GitLab ...
```

---

**Thank you for contributing to NSS Mumbai! 🚀✨**

Together, we're building a platform that inspires the next generation of space explorers!
