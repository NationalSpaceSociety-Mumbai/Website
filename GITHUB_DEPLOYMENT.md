# GitHub Pages Deployment Guide - NSS Mumbai Website

Complete guide for deploying the NSS Mumbai website to GitHub Pages.

## 🚀 Quick Deploy to GitHub Pages

### Prerequisites
- GitHub account
- Git installed locally
- Node.js 18+ installed

---

## 📦 Step-by-Step Deployment

### Step 1: Prepare the Repository

#### A. Initialize Git (if not already done)
```bash
cd "D:\Claude\Projects\NSS Mumbai website\Website"
git init
git add .
git commit -m "Initial commit: NSS Mumbai website"
```

#### B. Create GitHub Repository
1. Go to [GitHub](https://github.com)
2. Click "New Repository"
3. Name it: `nss-mumbai` (or any name you prefer)
4. **Do NOT** initialize with README (we already have files)
5. Click "Create Repository"

#### C. Connect and Push
```bash
# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/nss-mumbai.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

### Step 2: Build for GitHub Pages

#### Build the Static Site
```bash
# Install dependencies (if not already done)
npm install

# Build the static export
npm run build
```

This creates an `out/` folder with your static website.

---

### Step 3: Configure GitHub Pages

#### Option A: Using GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "18"
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build with Next.js
        run: npm run build
        
      - name: Add .nojekyll file
        run: touch ./out/.nojekyll
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**To use this:**
1. Create the file in your repository
2. Commit and push:
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Actions deployment"
   git push
   ```

3. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"
   - Save

#### Option B: Manual Deployment with gh-pages branch

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "touch out/.nojekyll && gh-pages -d out -t true"

# Build and deploy
npm run build
npm run deploy
```

Then in GitHub:
- Settings → Pages
- Source: "Deploy from a branch"
- Branch: "gh-pages" / (root)

---

### Step 4: Configure Custom Domain (Optional)

#### For www.nss-mumbai.org:

1. **Add CNAME file** in `public/` folder:
```bash
echo "www.nss-mumbai.org" > public/CNAME
```

2. **Configure DNS** at your domain registrar:
```
Type    Name    Value
CNAME   www     YOUR_USERNAME.github.io
```

3. **In GitHub Settings:**
   - Pages → Custom domain
   - Enter: `www.nss-mumbai.org`
   - Save and wait for DNS check

4. **Enable HTTPS** (checkbox will appear after DNS propagates)

---

## 🔧 Troubleshooting

### CSS/Assets Not Loading?

The site is configured to work without a base path. If you see issues:

1. Check `next.config.js`:
```javascript
basePath: '',
```

2. Ensure `.nojekyll` file exists in output:
```bash
touch out/.nojekyll
```

### 404 Errors on Page Refresh?

GitHub Pages doesn't support Next.js dynamic routing natively. The static export handles this.

### Build Fails?

```bash
# Clear cache and rebuild
rm -rf .next out node_modules
npm install
npm run build
```

---

## 📝 Deployment Checklist

Before deploying:
- [ ] All content is finalized
- [ ] All links tested
- [ ] Build completes successfully (`npm run build`)
- [ ] `.nojekyll` file will be created
- [ ] Repository is public (or Pages enabled for private)
- [ ] GitHub Actions workflow added (if using)
- [ ] Custom domain DNS configured (if using)

---

## 🔄 Updating the Site

### Manual Update Process:
```bash
# 1. Make your changes
# 2. Test locally
npm run dev

# 3. Build
npm run build

# 4. Commit and push
git add .
git commit -m "Update: description of changes"
git push

# 5. If using GitHub Actions, it will auto-deploy
# 6. If using gh-pages branch, run:
npm run deploy
```

### Automatic Updates (with GitHub Actions):
1. Make changes locally
2. Commit and push to main branch
3. GitHub Actions automatically builds and deploys
4. Wait 2-3 minutes for deployment

---

## 🌐 Access Your Site

After deployment, your site will be available at:

**Without custom domain:**
```
https://YOUR_USERNAME.github.io/REPO_NAME/
```

**With custom domain:**
```
https://www.nss-mumbai.org
```

---

## ⚡ GitHub Actions Setup (Detailed)

### Step 1: Create Workflow Directory
```bash
mkdir -p .github/workflows
```

### Step 2: Create Workflow File
Copy the workflow YAML provided above to:
`.github/workflows/deploy.yml`

### Step 3: Enable GitHub Pages
1. Repository Settings
2. Pages section (left sidebar)
3. Source: "GitHub Actions"
4. Save

### Step 4: Push to Trigger
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions workflow"
git push
```

### Step 5: Monitor Deployment
- Go to "Actions" tab in GitHub
- Watch the workflow run
- Check for any errors

---

## 📊 Performance Tips

### Optimize for GitHub Pages:
1. All images already optimized (`unoptimized: true`)
2. Static export (`output: 'export'`)
3. Trailing slashes configured
4. No API routes (not supported by static export)

---

## 🔐 Security Notes

- Repository can be public (no sensitive data)
- No API keys needed
- All links are external or static
- Contact form uses Google Forms (external)

---

## 📞 Support

### Common Issues:

**Site not updating?**
- Clear browser cache (Ctrl+Shift+R)
- Check GitHub Actions completed successfully
- Verify changes were pushed to main branch

**Custom domain not working?**
- Verify DNS propagation (can take 24-48 hours)
- Check CNAME record is correct
- Ensure CNAME file exists in repository

**Build errors in Actions?**
- Check Node version (should be 18+)
- Verify all dependencies are in package.json
- Review error logs in Actions tab

---

## 🎯 Quick Commands Reference

```bash
# Local development
npm run dev

# Build static site
npm run build

# View build output
cd out && npx serve

# Deploy (if using gh-pages)
npm run deploy

# Push to GitHub
git add .
git commit -m "Your message"
git push
```

---

## ✅ Verification Steps

After deployment:
1. Visit your GitHub Pages URL
2. Test all navigation links
3. Check responsive design on mobile
4. Verify external links work
5. Test contact form
6. Check social media links
7. Verify custom domain (if configured)

---

## 🚀 Alternative: Using Vercel or Netlify

While this guide focuses on GitHub Pages, you can also deploy to:

**Vercel (Recommended for Next.js):**
```bash
npm i -g vercel
vercel
```

**Netlify:**
- Connect GitHub repository
- Build command: `npm run build`
- Publish directory: `out`

Both support custom domains and automatic deployments from GitHub.

---

## 📋 GitHub Pages Limitations

Be aware of these limitations:
- Static sites only (no server-side rendering)
- No API routes
- Build happens on push, not on-demand
- 1GB repository size limit
- 100GB bandwidth per month (soft limit)

For most websites, including NSS Mumbai, these limitations are not a concern.

---

## 🎉 Success!

Once deployed, your website will be live and accessible to everyone!

**Remember:**
- Every push to main triggers a rebuild (with GitHub Actions)
- Changes take 2-3 minutes to appear
- Custom domains require DNS propagation time
- Site is automatically HTTPS enabled

---

**Need help?** Check the [Actions tab](https://github.com/YOUR_USERNAME/REPO_NAME/actions) for deployment logs.

**Last Updated:** January 3, 2025  
**Compatible with:** GitHub Pages, GitHub Actions  
**Status:** Ready for Deployment ✅
