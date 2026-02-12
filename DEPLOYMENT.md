# Quick Start Guide - Deploy Your Portfolio in 5 Minutes

## Option 1: Deploy to Vercel (Recommended - Completely Free)

### Step 1: Commit Your Code
\\\ash
git add .
git commit -m "Add Pankaj Katkar portfolio website"
git push origin main
\\\

### Step 2: Go Live on Vercel
1. Visit https://vercel.com/sign-up
2. Sign up with GitHub
3. Click "New Project"
4. Select your \company-website\ repository
5. Click "Deploy"

**That's it!** Your website is now live with a free URL like:
\https://company-website.vercel.app\

 Free hosting
 Free SSL/HTTPS
 Automatic deployments
 Fast global CDN

---

## Option 2: Deploy to GitHub Pages (Free, Static Only)

1. Edit \package.json\:
\\\json
{
  "homepage": "https://yourusername.github.io/company-website"
}
\\\

2. Install gh-pages:
\\\ash
npm install --save-dev gh-pages
\\\

3. Add to \package.json\ scripts:
\\\json
"scripts": {
  "deploy": "next build && gh-pages -d out"
}
\\\

4. Deploy:
\\\ash
npm run deploy
\\\

---

## Option 3: Deploy to Netlify (Free)

1. Visit https://app.netlify.com/signup
2. Connect your GitHub account
3. Click "New site from Git"
4. Select your repository
5. Build command: \
pm run build\
6. Publish directory: \.next\
7. Click "Deploy site"

---

## Custom Domain (Optional - ~\-15/year)

After deploying to Vercel:

1. Buy a domain (Namecheap, GoDaddy, etc.)
2. In Vercel Dashboard:
   - Go to Project Settings
   - Click "Domains"
   - Enter your custom domain
   - Update DNS records (Vercel provides instructions)

Your site will be live at your custom domain in 24-48 hours!

---

## Local Testing Before Deploy

\\\ash
npm run dev
\\\

Visit http://localhost:3000 to preview

---

## After Deployment

 Test all pages load correctly
 Check contact form works
 Test on mobile devices
 Share your portfolio URL

Your portfolio is now ready to showcase your QA expertise!
