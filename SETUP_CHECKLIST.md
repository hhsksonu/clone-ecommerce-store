# Setup Checklist

Follow this checklist to get your project up and running!

## Pre-Deployment Checklist

### 1. Initial Setup
- [ ] Extract/download the project files
- [ ] Open terminal in project folder
- [ ] Run `npm install` to install dependencies
- [ ] Wait for installation to complete (might take 2-3 minutes)

### 2. Firebase Setup
- [ ] Go to [Firebase Console](https://console.firebase.google.com/)
- [ ] Create a new project (name it whatever you want)
- [ ] Enable Email/Password authentication
- [ ] Copy your Firebase configuration values
- [ ] Create `.env` file in project root
- [ ] Paste your Firebase config into `.env` file
- [ ] Double-check all environment variables are correct

### 3. Local Testing
- [ ] Run `npm start` in terminal
- [ ] Check if app opens at http://localhost:3000
- [ ] Test browsing products
- [ ] Test adding items to cart
- [ ] Test signup functionality
- [ ] Test login functionality
- [ ] Test checkout process
- [ ] Check responsive design on mobile (use browser dev tools)

### 4. Git Setup (If Not Already Done)
- [ ] Initialize git: `git init`
- [ ] Create repository on GitHub
- [ ] Add remote: `git remote add origin [your-repo-url]`
- [ ] Add files: `git add .`
- [ ] Commit: `git commit -m "Initial commit - E-commerce project"`
- [ ] Push: `git push -u origin main`

## Deployment Checklist

### Option A: Netlify Deployment
- [ ] Create account on Netlify
- [ ] Choose deployment method (drag & drop or GitHub)
- [ ] If using GitHub, connect your repository
- [ ] Set build command: `npm run build`
- [ ] Set publish directory: `build`
- [ ] Add all environment variables in Netlify dashboard
- [ ] Deploy site
- [ ] Test deployed site
- [ ] Copy live URL

### Option B: Vercel Deployment
- [ ] Create account on Vercel
- [ ] Connect GitHub repository
- [ ] Vercel auto-detects React app
- [ ] Add environment variables in Vercel dashboard
- [ ] Deploy
- [ ] Test deployed site
- [ ] Copy live URL

## Post-Deployment Checklist

### Update Documentation
- [ ] Add live demo URL to README.md
- [ ] Test all features on live site
- [ ] Take screenshots of your app
- [ ] Add screenshots to README.md (optional)
- [ ] Update GitHub repository with changes

### Testing Deployed Site
- [ ] Visit your live URL
- [ ] Test on desktop browser
- [ ] Test on mobile device
- [ ] Create a new account
- [ ] Add products to cart
- [ ] Complete checkout
- [ ] Verify Firebase is working (check Firebase Console > Authentication > Users)

### Final Touches
- [ ] Update README with your contact info
- [ ] Add any additional notes about features
- [ ] Share your project link!

## Common Issues & Quick Fixes

### "npm install" fails
- Try deleting `node_modules` folder and `package-lock.json`
- Run `npm install` again

### Environment variables not working
- Make sure `.env` file is in root directory (same level as package.json)
- Make sure all variables start with `REACT_APP_`
- Restart development server after changing `.env`

### Firebase auth not working
- Check Firebase Console to ensure Email/Password is enabled
- Verify all environment variables are correct
- Check browser console for error messages

### Build fails during deployment
- Check if all dependencies are in package.json
- Make sure there are no syntax errors
- Check deployment logs for specific error

### Site deployed but blank page
- Check browser console for errors
- Verify environment variables are added in hosting platform
- Check if build completed successfully

## You're Done! 🎉

Once all checkboxes are ticked, you have:
- ✅ A working e-commerce website
- ✅ User authentication
- ✅ Shopping cart functionality
- ✅ Live deployed site
- ✅ GitHub repository
- ✅ Complete documentation

Share your project link and celebrate! 🚀
