# Deployment Guide

This guide covers deploying your e-commerce app to Netlify and Vercel.

## Option 1: Deploy to Netlify (Recommended)

Netlify is super easy to use and has great free tier.

### Method A: Using Netlify Website (Easiest)

1. **Build your project**
   ```bash
   npm run build
   ```

2. **Go to Netlify**
   - Visit [netlify.com](https://www.netlify.com/)
   - Sign up or login (you can use GitHub account)

3. **Deploy**
   - Drag and drop the `build` folder to Netlify's deploy zone
   - Or click "Add new site" > "Deploy manually"

4. **Add Environment Variables**
   - After deployment, go to Site settings > Build & deploy > Environment
   - Add all your Firebase variables:
     - `REACT_APP_FIREBASE_API_KEY`
     - `REACT_APP_FIREBASE_AUTH_DOMAIN`
     - `REACT_APP_FIREBASE_PROJECT_ID`
     - `REACT_APP_FIREBASE_STORAGE_BUCKET`
     - `REACT_APP_FIREBASE_MESSAGING_SENDER_ID`
     - `REACT_APP_FIREBASE_APP_ID`

5. **Redeploy**
   - After adding environment variables, trigger a new deploy
   - Go to Deploys tab > Trigger deploy > Clear cache and deploy site

### Method B: Using Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Initialize and deploy**
   ```bash
   netlify init
   ```
   Follow the prompts and select:
   - Create & configure a new site
   - Choose your team
   - Site name (optional)
   - Build command: `npm run build`
   - Publish directory: `build`

4. **Add environment variables**
   ```bash
   netlify env:set REACT_APP_FIREBASE_API_KEY your_api_key
   netlify env:set REACT_APP_FIREBASE_AUTH_DOMAIN your_auth_domain
   # ... repeat for all variables
   ```

5. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Method C: Connect GitHub Repository

1. Push your code to GitHub
2. Go to Netlify Dashboard
3. Click "Add new site" > "Import an existing project"
4. Connect to GitHub and select your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
6. Add environment variables in Site settings
7. Click "Deploy site"

Now Netlify will auto-deploy whenever you push to GitHub!

## Option 2: Deploy to Vercel

Vercel is also excellent and very popular for React apps.

### Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   Follow the prompts:
   - Set up and deploy
   - Link to existing project? No
   - Project name: ecommerce-store
   - Directory: ./ (just press enter)
   - Override settings? No

4. **Add environment variables**
   Go to Vercel Dashboard > Your Project > Settings > Environment Variables
   Add all your Firebase variables

5. **Redeploy**
   ```bash
   vercel --prod
   ```

### Using Vercel Website

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com/)
3. Sign up/login with GitHub
4. Click "Add New" > "Project"
5. Import your repository
6. Vercel auto-detects it's a React app
7. Add environment variables
8. Click "Deploy"

## Post-Deployment Checklist

After deploying, make sure to:

- [ ] Test user signup functionality
- [ ] Test user login functionality
- [ ] Test adding products to cart
- [ ] Test checkout flow
- [ ] Test on mobile device
- [ ] Check all images load properly
- [ ] Verify routing works (refresh on different pages)

## Common Deployment Issues

### Issue: "Page not found" on refresh
**Solution**: Already handled! The `netlify.toml` file includes redirect rules.

### Issue: Firebase auth not working
**Solution**: Make sure all environment variables are added correctly in Netlify/Vercel dashboard.

### Issue: API calls failing
**Solution**: Check browser console for CORS errors. Platzi API should work fine, but if it doesn't, the API might be down.

### Issue: Build fails
**Solution**: 
- Check if all dependencies are in `package.json`
- Make sure Node version is compatible
- Check build logs for specific errors

## Updating Your Deployed Site

### For Netlify (Manual Deploy)
- Run `npm run build` locally
- Drag and drop the new `build` folder to Netlify

### For Netlify/Vercel (GitHub Integration)
- Just push your changes to GitHub
- Automatic deployment will trigger

### For CLI Deployments
- Run `netlify deploy --prod` or `vercel --prod`

## Custom Domain (Optional)

Both Netlify and Vercel give you a free subdomain, but you can add your own:

1. Buy a domain from Namecheap, GoDaddy, etc.
2. In Netlify/Vercel dashboard, go to Domain settings
3. Add your custom domain
4. Update your domain's DNS records as instructed
5. Wait for DNS propagation (can take up to 48 hours)

## Tips

- Always test locally before deploying: `npm run build && serve -s build`
- Keep your `.env` file safe and never commit it
- Use environment variables for all sensitive data
- Monitor your Firebase usage to stay within free tier
- Check deployment logs if something goes wrong

---

Congrats on deploying your first React app! 🎉
