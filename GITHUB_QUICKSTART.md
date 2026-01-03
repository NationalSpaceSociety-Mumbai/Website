# 🚀 Quick Start: Deploy to GitHub Pages in 10 Minutes

Follow these steps to get your NSS Mumbai website live on GitHub Pages.

## ✅ Prerequisites Check

Before starting, ensure you have:
- [ ] GitHub account ([Sign up here](https://github.com))
- [ ] Git installed ([Download here](https://git-scm.com/downloads))
- [ ] Node.js 18+ installed ([Download here](https://nodejs.org/))

Verify installation:
```bash
git --version
node --version
npm --version
```

---

## 📦 Step 1: Push to GitHub (5 minutes)

### A. Navigate to Project
```bash
cd "D:\Claude\Projects\NSS Mumbai website\Website"
```

### B. Initialize Git
```bash
git init
git add .
git commit -m "Initial commit: NSS Mumbai website"
```

### C. Create GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `nss-mumbai-website`
3. Description: "Official website for NSS Mumbai - National Space Society Mumbai Chapter"
4. Choose **Public**
5. **Do NOT** check any boxes (no README, no .gitignore, no license)
6. Click **"Create repository"**

### D. Push to GitHub
```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/nss-mumbai-website.git
git branch -M main
git push -u origin main
```

**Done!** Your code is now on GitHub. ✅

---

## 🌐 Step 2: Enable GitHub Pages (3 minutes)

### A. Go to Repository Settings
1. In your GitHub repository, click **Settings**
2. In the left sidebar, click **Pages**

### B. Configure Source
1. Under "Build and deployment"
2. **Source**: Select **"GitHub Actions"**
3. Click **Save** (if prompted)

**That's it!** GitHub Actions will now handle deployment automatically. ✅

---

## ⚡ Step 3: Wait for Deployment (2 minutes)

### A. Monitor Deployment
1. Click the **Actions** tab in your repository
2. You should see a workflow running: "Deploy to GitHub Pages"
3. Click on it to see progress
4. Wait for both "build" and "deploy" to complete (green checkmarks)

### B. Access Your Website
Once deployed, your site will be available at:
```
https://YOUR_USERNAME.github.io/nss-mumbai-website/
```

**Example:**
If your username is `johndoe`:
```
https://johndoe.github.io/nss-mumbai-website/
```

---

## 🎉 Success! Your Website is Live!

### Test Your Website
- [ ] Visit the URL
- [ ] Check all pages load correctly
- [ ] Test navigation
- [ ] Verify links work
- [ ] Check on mobile device

---

## 🌍 Optional: Setup Custom Domain (www.nss-mumbai.org)

### Step 1: Configure DNS
At your domain registrar (where you bought nss-mumbai.org), add these DNS records:

```
Type    Name    Value                                   TTL
A       @       185.199.108.153                        3600
A       @       185.199.109.153                        3600
A       @       185.199.110.153                        3600
A       @       185.199.111.153                        3600
CNAME   www     YOUR_USERNAME.github.io.               3600
```

### Step 2: Configure GitHub Pages
1. Repository Settings → Pages
2. Custom domain: Enter `www.nss-mumbai.org`
3. Click **Save**
4. Wait for DNS check to pass (can take 24-48 hours)
5. Check **"Enforce HTTPS"** once DNS propagates

### Step 3: Wait for DNS Propagation
- Usually takes 1-24 hours
- Can take up to 48 hours
- Check status: [whatsmydns.net](https://www.whatsmydns.net/)

---

## 🔄 Updating Your Website

Every time you want to update the website:

```bash
# 1. Make your changes in the code

# 2. Test locally
npm run dev

# 3. Commit changes
git add .
git commit -m "Update: describe what you changed"

# 4. Push to GitHub
git push

# 5. Wait 2-3 minutes for automatic deployment
```

**That's it!** GitHub Actions automatically rebuilds and deploys your changes.

---

## 🐛 Troubleshooting

### Problem: Build fails in GitHub Actions

**Solution:**
1. Go to Actions tab
2. Click the failed workflow
3. Check error logs
4. Usually it's a missing dependency

Fix and push again:
```bash
npm install
git add package.json package-lock.json
git commit -m "Fix: update dependencies"
git push
```

### Problem: Website shows 404

**Solution:**
1. Check if deployment completed (Actions tab)
2. Wait 5 minutes after deployment
3. Clear browser cache (Ctrl+Shift+R)
4. Verify repository is public

### Problem: CSS/Styling not loading

**Solution:**
Already configured correctly! But if issues persist:
1. Clear browser cache
2. Check browser console (F12) for errors
3. Verify build completed successfully

### Problem: Custom domain not working

**Solution:**
1. DNS takes time to propagate (24-48 hours)
2. Check DNS records are correct
3. Verify CNAME file exists in repository
4. Wait for DNS check in GitHub Pages settings

---

## 📋 Quick Reference

### Important URLs
- **Repository**: `https://github.com/YOUR_USERNAME/nss-mumbai-website`
- **Website**: `https://YOUR_USERNAME.github.io/nss-mumbai-website/`
- **Custom Domain** (after setup): `https://www.nss-mumbai.org`

### Important Commands
```bash
# Local development
npm run dev

# Build locally
npm run build

# Update website
git add .
git commit -m "Your message"
git push
```

### File Locations
```
.github/workflows/deploy.yml  # GitHub Actions workflow
next.config.js                # Next.js configuration
public/CNAME                  # Custom domain file
```

---

## ✅ Verification Checklist

After deployment:
- [ ] Website loads at GitHub Pages URL
- [ ] All pages are accessible
- [ ] Navigation works
- [ ] Images load correctly
- [ ] External links work (blog, social media)
- [ ] Mobile responsive
- [ ] Contact form works

---

## 🎯 What Happens Automatically

Every time you push to GitHub:
1. ✅ GitHub Actions starts
2. ✅ Installs dependencies
3. ✅ Builds your website
4. ✅ Creates static files
5. ✅ Deploys to GitHub Pages
6. ✅ Website is updated (2-3 minutes)

You don't need to do anything except push your code!

---

## 📞 Need Help?

### Check These Resources:
1. **Full Guide**: See `GITHUB_DEPLOYMENT.md`
2. **Actions Logs**: GitHub → Actions tab
3. **Build Status**: Look for green checkmarks
4. **GitHub Docs**: [pages.github.com](https://pages.github.com/)

### Common Issues Documented In:
- `GITHUB_DEPLOYMENT.md` - Detailed troubleshooting
- `README.md` - General project documentation
- `QUICKSTART.md` - Development setup

---

## 🎉 Congratulations!

Your NSS Mumbai website is now:
- ✅ Hosted on GitHub Pages
- ✅ Automatically deployed on every push
- ✅ Free hosting forever
- ✅ Fast and reliable
- ✅ HTTPS enabled
- ✅ Ready for custom domain

**Total Time:** ~10 minutes  
**Cost:** $0 (Free!)  
**Maintenance:** Automatic updates

---

## 🚀 Next Steps

1. **Share your website** with the team
2. **Test thoroughly** on different devices
3. **Setup custom domain** (if needed)
4. **Add Google Analytics** (optional)
5. **Start creating content** - the website is ready!

---

**Remember:** Every push to `main` branch automatically deploys to your website!

**Your website URL:**
```
https://YOUR_USERNAME.github.io/nss-mumbai-website/
```

**Replace `YOUR_USERNAME` with your actual GitHub username.**

---

**Created with ❤️ for NSS Mumbai**  
**Ready to inspire the next generation of space explorers! 🚀✨**
