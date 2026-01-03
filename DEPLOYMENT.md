# Deployment Guide - NSS Mumbai Website

This guide will help you deploy the NSS Mumbai website to various hosting platforms.

## 📦 Pre-Deployment Checklist

Before deploying, ensure:
- [ ] All dependencies are installed (`npm install`)
- [ ] Project builds successfully (`npm run build`)
- [ ] All links and external resources are working
- [ ] Environment variables are configured (if any)

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest option for Next.js applications and offers free hosting.

#### Steps:
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign up
3. Click "Import Project"
4. Select your repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

#### Custom Domain:
1. In Vercel dashboard, go to your project settings
2. Navigate to "Domains"
3. Add `www.nss-mumbai.org`
4. Follow DNS configuration instructions

**Build Command:** `npm run build`  
**Output Directory:** `.next`  
**Install Command:** `npm install`

---

### Option 2: Netlify

Another excellent option with free hosting.

#### Steps:
1. Push code to Git repository
2. Go to [netlify.com](https://netlify.com) and sign up
3. Click "New site from Git"
4. Connect your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
6. Click "Deploy site"

#### Custom Domain:
1. Go to "Domain settings" in Netlify
2. Add custom domain `www.nss-mumbai.org`
3. Update DNS records as instructed

---

### Option 3: Traditional Hosting (cPanel/Shared Hosting)

For traditional hosting providers.

#### Steps:
1. Build the project locally:
```bash
npm run build
```

2. Export static site (add to `package.json`):
```json
"scripts": {
  "export": "next export"
}
```

3. Run export:
```bash
npm run build && npm run export
```

4. Upload the `out` folder to your hosting via FTP/cPanel

**Note:** Some Next.js features may not work with static export. Vercel/Netlify is recommended for full functionality.

---

### Option 4: AWS Amplify

For AWS infrastructure.

#### Steps:
1. Push code to Git
2. Go to AWS Amplify Console
3. Connect repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Output directory:** `.next`
5. Deploy

---

### Option 5: Docker Deployment

For containerized deployment.

#### Create `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

#### Build and Run:
```bash
docker build -t nss-mumbai .
docker run -p 3000:3000 nss-mumbai
```

---

## 🔧 Environment Configuration

If you need environment variables:

### Create `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://www.nss-mumbai.org
NEXT_PUBLIC_CONTACT_EMAIL=contact@nss-mumbai.org
```

Add these variables in your hosting platform's environment settings.

---

## 🌐 DNS Configuration

To point `www.nss-mumbai.org` to your hosting:

### For Vercel/Netlify:
1. Add CNAME record:
   - **Name:** `www`
   - **Value:** `[your-project].vercel.app` or `[your-project].netlify.app`

2. Add A record (for root domain):
   - **Name:** `@`
   - **Value:** (Provided by hosting platform)

### Typical DNS Records:
```
Type    Name    Value                           TTL
A       @       76.76.21.21                     3600
CNAME   www     nss-mumbai.vercel.app          3600
```

---

## ✅ Post-Deployment Checklist

After deployment:
- [ ] Test all pages and navigation
- [ ] Verify external links (blog, social media, etc.)
- [ ] Check mobile responsiveness
- [ ] Test contact forms
- [ ] Verify SSL certificate is active
- [ ] Test page load speeds
- [ ] Check SEO meta tags

---

## 🔄 Continuous Deployment

Most platforms support automatic deployment:

1. **Vercel/Netlify:** Automatically deploys on Git push
2. **Setup:** 
   - Connect Git repository
   - Enable auto-deployment
   - Every push to `main` branch triggers deployment

---

## 📊 Performance Optimization

Before going live:

1. **Optimize Images:**
```bash
npm install sharp
```

2. **Enable Compression:** Already configured in Next.js

3. **Configure Caching:** Set in hosting platform headers

4. **Use CDN:** Vercel and Netlify include CDN by default

---

## 🐛 Troubleshooting

### Build Fails:
- Check Node.js version (18+ required)
- Clear cache: `rm -rf .next node_modules && npm install`
- Check for TypeScript errors: `npm run build`

### 404 Errors:
- Ensure `not-found.tsx` exists
- Check route configuration
- Verify file naming conventions

### Styling Issues:
- Clear browser cache
- Verify Tailwind CSS build
- Check `globals.css` is imported in layout

---

## 📞 Support

For deployment issues:
- Vercel: [vercel.com/support](https://vercel.com/support)
- Netlify: [netlify.com/support](https://netlify.com/support)
- GitHub Issues: Create an issue in the repository

---

## 🔐 Security Considerations

- Enable HTTPS (automatic with Vercel/Netlify)
- Set security headers in hosting platform
- Keep dependencies updated: `npm audit fix`
- Use environment variables for sensitive data

---

**Recommended:** Deploy to Vercel for the best Next.js experience and easiest setup.

**Current Status:** Ready for deployment ✅
