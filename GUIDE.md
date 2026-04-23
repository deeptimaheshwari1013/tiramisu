# How to Build & Deploy Your Blog Site
### A complete guide for beginners

---

## What you're building

A personal blog site with:
- **Homepage** with a featured latest post, recent entries list, and about section
- **Individual post pages** at `/posts/post-name`
- **Writing page** listing all posts
- **About** and **Now** pages
- Warm beige aesthetic, serif italic headings, clean typography
- Deploys to Vercel (free hosting) in minutes

**Tech stack:** Next.js (React framework) + TypeScript + CSS Modules

---

## PART 1 — Set up your computer (do once)

### Step 1: Install Node.js

Node.js is the engine that runs JavaScript on your computer.

1. Go to **https://nodejs.org**
2. Click the button that says **"LTS"** (the recommended one)
3. Download and install it like any normal app
4. To verify it worked, open **Terminal** (Mac) or **Command Prompt** (Windows) and type:

```
node --version
```

You should see something like `v20.11.0`. ✅

---

### Step 2: Install Git

Git is how you save and upload your code.

1. Go to **https://git-scm.com/downloads**
2. Download and install for your OS
3. Verify: type `git --version` in Terminal → should show a version number ✅

---

### Step 3: Make a GitHub account

GitHub stores your code online (Vercel will pull from it).

1. Go to **https://github.com** → Sign Up
2. Remember your username and email

---

### Step 4: Make a Vercel account

1. Go to **https://vercel.com** → Sign Up with GitHub
2. That's it for now

---

## PART 2 — Set up the project

### Step 5: Put the code on your computer

You received a ZIP file (or folder) with all the code. Place it somewhere easy, like your Desktop.

The folder is called `blog-site` and looks like this:

```
blog-site/
  src/
    app/
      page.tsx          ← homepage
      page.module.css   ← homepage styles
      layout.tsx        ← shared layout
      globals.css       ← global styles
      posts/[slug]/     ← individual post pages
      writing/          ← all posts page
      about/            ← about page
      now/              ← now page
    data/
      posts.ts          ← YOUR POST DATA (edit this!)
  package.json
  next.config.js
  tsconfig.json
  .gitignore
```

---

### Step 6: Open the project in Terminal

**On Mac:**
- Open Terminal
- Type `cd ` (with a space), then drag the `blog-site` folder into the Terminal window
- Press Enter

**On Windows:**
- Open the `blog-site` folder in File Explorer
- Click the address bar, type `cmd`, press Enter

You should now be inside the project folder.

---

### Step 7: Install dependencies

In Terminal, run:

```
npm install
```

This downloads all the libraries the project needs. It takes 1–2 minutes. ✅

---

### Step 8: Run it locally

```
npm run dev
```

Now open your browser and go to **http://localhost:3000**

You should see your site! 🎉

Press `Ctrl+C` in Terminal to stop it.

---

## PART 3 — Customize it

### Editing your posts

Open `src/data/posts.ts` in any text editor (VS Code is great — free at https://code.visualstudio.com).

Each post looks like this:

```typescript
{
  slug: "what-pointers-actually-are",   // URL: /posts/what-pointers-actually-are
  title: "What pointers actually are — and why I spent 3 hours on one bug",
  date: "April 22, 2026",
  readTime: "5 min read",
  category: "cs notes",                 // shows as tag
  excerpt: "I kept getting a segfault...", // preview text
  emoji: "💻",                          // small icon
  thumbnailColor: "#e8ddd3",            // background color of thumbnail
},
```

**To add a new post:**
1. Copy one of the existing objects
2. Paste it at the TOP of the array (so it shows as latest)
3. Change all the fields
4. Change `slug` to a unique URL-friendly name (no spaces — use dashes)

**To change your name/bio:**
- Open `src/app/page.tsx` and find the "ABOUT ME" section
- Open `src/app/about/page.tsx` to edit the full about page

**To change the site title:**
- Open `src/app/layout.tsx` → change `title` and `description`

**To add full post content:**
- Open `src/app/posts/[slug]/page.tsx`
- Find the `.body` div and replace the placeholder text
- (Advanced: you can check which `post.slug` is being viewed to show different content per post)

---

### Changing colors

Open `src/app/globals.css`. At the top you'll see:

```css
:root {
  --bg: #f7f3ee;         /* page background */
  --accent: #c4874a;     /* orange highlights */
  --text: #3a2e28;       /* main text */
  --text-muted: #9a8878; /* secondary text */
  ...
}
```

Change the hex color codes to whatever you want. Use **https://coolors.co** to pick colors.

---

## PART 4 — Deploy to Vercel

### Step 9: Push code to GitHub

In Terminal (inside `blog-site`):

```bash
git init
git add .
git commit -m "first commit"
```

Now create a new repo on GitHub:
1. Go to **https://github.com/new**
2. Name it `my-blog` (or anything)
3. Click **Create repository**
4. GitHub will show you commands. Run the ones under **"…or push an existing repository"**:

```bash
git remote add origin https://github.com/YOUR_USERNAME/my-blog.git
git branch -M main
git push -u origin main
```

---

### Step 10: Deploy on Vercel

1. Go to **https://vercel.com/dashboard**
2. Click **"Add New Project"**
3. Click **"Import"** next to your `my-blog` repository
4. Leave all settings as default — Vercel auto-detects Next.js
5. Click **"Deploy"**

That's it! In ~1 minute, your site is live at a URL like:
`https://my-blog-yourusername.vercel.app`

---

### Step 11: Updating your site later

Every time you want to update your site:

1. Make your changes locally
2. Test with `npm run dev`
3. Run in Terminal:

```bash
git add .
git commit -m "describe what you changed"
git push
```

Vercel auto-detects the push and redeploys in ~30 seconds. 🚀

---

## Custom domain (optional)

If you want `yourname.com` instead of `.vercel.app`:

1. Buy a domain on **Namecheap** or **Porkbun** (~$10/year)
2. In Vercel dashboard → your project → Settings → Domains
3. Add your domain and follow the DNS instructions

---

## Quick reference

| What you want to do | File to edit |
|---|---|
| Add/edit posts | `src/data/posts.ts` |
| Edit homepage layout | `src/app/page.tsx` |
| Change homepage styles | `src/app/page.module.css` |
| Edit About page | `src/app/about/page.tsx` |
| Edit Now page | `src/app/now/page.tsx` |
| Change colors/fonts | `src/app/globals.css` |
| Change site title | `src/app/layout.tsx` |

---

## Troubleshooting

**"npm: command not found"** → Node.js wasn't installed. Redo Step 1.

**Port 3000 already in use** → Run `npm run dev -- --port 3001` instead.

**Red errors in browser** → Check the Terminal where you ran `npm run dev` for error messages. Usually a typo in the code.

**Vercel build failed** → Click the failed deployment in Vercel dashboard to see the error log. Most common cause: a missing comma or bracket in `posts.ts`.

---

*Good luck! The site is fully yours now.*
