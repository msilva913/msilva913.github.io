# mariorafaelsilva.com — Static Site

A clean, self-contained academic website built with plain HTML/CSS/JS.
No frameworks, no build step, no dependencies beyond Google Fonts (loaded via CDN).

---

## Files

```
index.html              → Home / Overview
research.html           → Working papers & publications
teaching.html           → Teaching overview & evaluations
teaching-econ7800.html  → ECON 7800 syllabus
cv.html                 → Curriculum vitae
resources.html          → Data, computation, writing tools
influences.html         → Key intellectual influences
css/style.css           → All styles
nav.js                  → Shared navigation & footer (injected)
```

---

## Deploying to GitHub Pages (step-by-step)

### Step 1 — Create a GitHub account (if needed)
Go to https://github.com and sign up. Your existing account is github.com/msilva913.

### Step 2 — Create a new repository
1. Click the **+** icon (top right) → **New repository**
2. Name it exactly: `msilva913.github.io`
   (GitHub Pages requires this format: `USERNAME.github.io`)
3. Set it to **Public**
4. Do NOT initialize with a README
5. Click **Create repository**

### Step 3 — Upload the site files
**Option A — via the GitHub web interface (easiest):**
1. Open the new empty repository
2. Click **uploading an existing file**
3. Drag and drop ALL files from this folder, including the `css/` subfolder
4. Important: GitHub's uploader handles folders — just drag the entire site folder contents
5. Add a commit message like "Initial site" and click **Commit changes**

**Option B — via Git on your computer:**
```bash
cd /path/to/this/site/folder
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/msilva913/msilva913.github.io.git
git push -u origin main
```

### Step 4 — Enable GitHub Pages
1. In your repository, go to **Settings** → **Pages** (left sidebar)
2. Under **Source**, select: Deploy from a branch
3. Branch: `main`, folder: `/ (root)`
4. Click **Save**
5. After ~60 seconds, your site will be live at https://msilva913.github.io

### Step 5 — Point your custom domain (mariorafaelsilva.com)
1. In GitHub Pages settings (same page as Step 4), enter your custom domain:
   `mariorafaelsilva.com`
2. Check **Enforce HTTPS**
3. In your domain registrar (wherever you bought the domain), update the DNS records:

   **Add four A records** pointing to GitHub's servers:
   ```
   A   @   185.199.108.153
   A   @   185.199.109.153
   A   @   185.199.110.153
   A   @   185.199.111.153
   ```

   **Add a CNAME record:**
   ```
   CNAME   www   msilva913.github.io
   ```

4. DNS changes take 10 minutes to 48 hours to propagate.
   Once propagated, https://mariorafaelsilva.com will serve this site.

---

## Updating the site later

**To edit content:** Open any `.html` file in a text editor, make changes, save, re-upload to GitHub (drag and drop again, or use git push). Changes go live within ~30 seconds.

**To add your CV PDF:**
1. Place your CV file as `cv.pdf` in the root folder
2. In `cv.html`, update the download button href from `#` to `cv.pdf`

**To add paper links:**
In `research.html`, find the `<a href="#">` placeholders under each paper and replace `#` with the actual URL (journal page, SSRN, personal PDF, etc.).

---

## Notes

- The site uses Google Fonts (EB Garamond + DM Sans) loaded via CDN. It works offline but will fall back to Georgia/system-ui.
- `nav.js` injects the header and footer on every page — edit it once to update navigation everywhere.
- No cookies, no tracking, no external dependencies other than fonts.
