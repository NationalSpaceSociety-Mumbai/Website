# Generate package-lock.json

Run this command in your project directory to generate the lock file:

```bash
cd "D:\Claude\Projects\NSS Mumbai website\Website"
npm install
```

This will create `package-lock.json` which GitHub Actions needs.

Then commit and push:

```bash
git add package-lock.json
git commit -m "Add package-lock.json for GitHub Actions"
git push
```
