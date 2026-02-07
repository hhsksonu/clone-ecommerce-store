# Firebase Setup Guide

This guide will help you set up Firebase Authentication for this project.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click on "Add project" or "Create a project"
3. Enter a project name (e.g., "ecommerce-store")
4. Click Continue
5. You can disable Google Analytics for this project (optional)
6. Click "Create project"

## Step 2: Enable Authentication

1. In your Firebase project dashboard, click on "Authentication" in the left sidebar
2. Click on "Get Started"
3. Go to the "Sign-in method" tab
4. Click on "Email/Password"
5. Enable the first toggle (Email/Password)
6. Click "Save"

## Step 3: Get Your Firebase Configuration

1. Click on the gear icon (⚙️) next to "Project Overview" in the sidebar
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click on the web icon `</>` to add a web app
5. Give your app a nickname (e.g., "ShopEasy Web")
6. You don't need to set up Firebase Hosting for now
7. Click "Register app"

## Step 4: Copy Your Config

You will see something like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};
```

## Step 5: Add Config to Your Project

1. In your project root, create a `.env` file
2. Copy the values from Firebase config to your `.env` file:

```
REACT_APP_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=123456789012
REACT_APP_FIREBASE_APP_ID=1:123456789012:web:abcdef123456
```

3. Make sure `.env` is in your `.gitignore` file (it already is!)

## Step 6: Test Authentication

1. Run your app: `npm start`
2. Go to the signup page
3. Create a new account with email and password
4. You should be logged in and redirected to home page
5. Check Firebase Console > Authentication > Users to see your new user

## Important Notes

- Never commit your `.env` file to GitHub
- When deploying to Netlify/Vercel, add these environment variables in their dashboard
- Firebase has a free tier that's more than enough for this project
- Keep your Firebase API key safe, but note that it's okay to expose it in frontend apps (Firebase has security rules to protect your data)

## Troubleshooting

### "Firebase config not found" error
- Make sure your `.env` file is in the root directory (same level as package.json)
- Make sure all variable names start with `REACT_APP_`
- Restart your development server after creating/modifying `.env`

### "Email already in use" error
- This email is already registered. Try logging in instead or use a different email

### "Weak password" error
- Firebase requires passwords to be at least 6 characters long

## Security Rules (Optional Advanced Setup)

If you want to add Firestore database later, you should set up security rules. For now, authentication alone doesn't require any security rules.

---

That's it! Your Firebase authentication should now be working. If you face any issues, check the Firebase Console for error messages.
