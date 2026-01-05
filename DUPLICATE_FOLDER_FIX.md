# 🚨 CRITICAL ISSUE FOUND: Duplicate Folder Structure

## Problem Identified:

You have **DUPLICATE page structures** causing conflicts:

```
app/
├── (nss)/              ❌ DUPLICATE - Remove this!
│   ├── about/
│   ├── contact/
│   ├── explore/
│   ├── layout.tsx      ❌ Extra Navbar/Footer
│   └── page.tsx
├── about/              ✅ Keep these
├── contact/
├── explore/
├── galaxy/
├── layout.tsx          ✅ Main layout
└── page.tsx
```

## The Issue:

The `app/(nss)/layout.tsx` file has:
- Navbar component
- Footer component

The `app/layout.tsx` file ALSO has:
- Navbar component  
- Footer component

This causes **DOUBLE rendering** of Navbar and Footer!

---

## ✅ SOLUTION: Delete the (nss) Folder

### Step 1: Delete Duplicate Folder

```bash
cd "D:\OneDrive - National Space Society\Website\Website"

# Delete the duplicate (nss) folder
rm -rf app/(nss)
```

Or manually delete: `D:\OneDrive - National Space Society\Website\Website\app\(nss)`

### Step 2: Verify Structure

After deletion, you should have:
```
app/
├── about/
│   ├── advisory/page.tsx
│   ├── collaboration/page.tsx
│   ├── team/page.tsx
│   └── page.tsx
├── contact/page.tsx
├── explore/
│   ├── magazine/page.tsx
│   └── webinar/page.tsx
├── globals.css
├── layout.tsx
└── page.tsx
```

### Step 3: Commit and Push

```bash
git add .
git commit -m "Fix: Remove duplicate (nss) folder structure"
git push
```

---

## Additional Issue: build.yml uses npm ci

The `build.yml` workflow uses `npm ci` which requires package-lock.json.

### Fix build.yml:

Change line 28 in `.github/workflows/build.yml`:

```yaml
# Change this:
- name: Install dependencies
  run: npm ci

# To this:
- name: Install dependencies
  run: npm install
```

---

## Complete Fix Commands:

```bash
cd "D:\OneDrive - National Space Society\Website\Website"

# 1. Delete duplicate folder
rm -rf "app/(nss)"

# 2. Test locally
npm install
npm run dev

# 3. If works, commit
git add .
git commit -m "Fix: Remove duplicate folder structure"
git push
```

---

## Why This Happened:

The `(nss)` folder is a Next.js **route group**. It was probably created by mistake. Route groups don't affect URLs but they create an extra layout layer, which is causing the double Navbar/Footer.

---

## ✅ After Fix:

- One Navbar (from app/layout.tsx)
- One Footer (from app/layout.tsx)  
- Clean page structure
- Build should succeed on GitHub

---

**Delete the `app/(nss)` folder now and push again!**
