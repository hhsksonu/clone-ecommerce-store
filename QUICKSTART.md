# Quick Start Guide

Get your e-commerce app running in 5 minutes!

## 1. Install Dependencies
```bash
npm install
```

## 2. Set Up Firebase
- Create a Firebase project at console.firebase.google.com
- Enable Email/Password authentication
- Copy your config values

## 3. Create .env File
Create a `.env` file in the root folder and add:
```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## 4. Run the App
```bash
npm start
```

App will open at http://localhost:3000

## 5. Test It Out
- Browse products on home page
- Click on a product to see details
- Add items to cart
- Create an account (signup)
- Complete checkout

## Need Help?
- Check `FIREBASE_SETUP.md` for detailed Firebase instructions
- Check `README.md` for full documentation
- Check `DEPLOYMENT.md` for deployment help

That's it! You're ready to go! 🚀
