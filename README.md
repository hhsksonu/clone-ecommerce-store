# ShopEasy - E-commerce Web Application

## Live Demo
🔗 **[https://eshopsk.netlify.app/](https://eshopsk.netlify.app/)**

## Features

- Browse products from different categories
- Search products by name
- Filter products by category
- Sort products by price (low to high / high to low)
- View detailed product information
- Add products to cart with beautiful toast notifications
- Update cart quantities
- Remove items from cart
- Mock checkout process
- User authentication (Login/Signup) using Firebase
- Responsive design for mobile and desktop

## Tech Stack

- **React** - Frontend framework
- **React Router** - For navigation between pages
- **Context API** - For state management (Cart & Auth)
- **Axios** - For API calls
- **Firebase Authentication** - For user login/signup
- **CSS** - For styling
- **Platzi Fake Store API** - For product data

## API Used

This project uses the Platzi Fake Store API to fetch product data:
- Products: `https://api.escuelajs.co/api/v1/products`
- Categories: `https://api.escuelajs.co/api/v1/categories`

## Project Structure
```
ecommerce-store/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── ProductCard.js
│   │   ├── Toast.js
│   │   └── (CSS files)
│   ├── pages/
│   │   ├── Home.js
│   │   ├── ProductDetails.js
│   │   ├── Cart.js
│   │   ├── Checkout.js
│   │   ├── Login.js
│   │   ├── Signup.js
│   │   └── (CSS files)
│   ├── context/
│   │   ├── CartContext.js
│   │   └── AuthContext.js
│   ├── firebase.js
│   ├── App.js
│   └── index.js
└── package.json
```

## How to Run Locally

### Prerequisites
- Node.js installed on your machine
- A Firebase project (for authentication)

### Steps

1. **Clone the repository**
```bash
   git clone https://github.com/hhsksonu/clone-ecommerce-store.git
   cd ecommerce-store
```

2. **Install dependencies**
```bash
   npm install
```

3. **Set up Firebase**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Email/Password authentication in Authentication section
   - Copy your Firebase config details

4. **Create environment file**
   - Create a `.env` file in the root directory
   - Copy contents from `.env.example`
   - Replace the values with your Firebase credentials:
```
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
```

5. **Run the application**
```bash
   npm start
```
   The app will open at `http://localhost:3000`

## Deployment

This project is deployed on Netlify. To deploy your own version:

### Deploy to Netlify

1. Build the project:
```bash
   npm run build
```

2. **Option A: Drag & Drop**
   - Go to [Netlify](https://www.netlify.com/)
   - Drag the `build` folder to the deploy zone

3. **Option B: GitHub Integration**
   - Push your code to GitHub
   - Connect your repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `build`

4. **Add Environment Variables**
   - Go to Site settings → Build & deploy → Environment
   - Add all your `REACT_APP_FIREBASE_*` variables

### Deploy to Vercel

1. Install Vercel CLI:
```bash
   npm install -g vercel
```

2. Deploy:
```bash
   vercel
```

3. Add environment variables in Vercel dashboard

## Firebase Setup Guide

1. Go to Firebase Console and create a new project
2. In the Authentication section, enable Email/Password sign-in method
3. Go to Project Settings > General
4. Scroll down to "Your apps" section
5. Click on the web icon to add a web app
6. Copy the config object values to your `.env` file

## Known Issues / Future Improvements

- Payment integration is not real (it's just a mock checkout)
- Could add user profile page
- Could add order history
- Could add product reviews and ratings
- Could improve loading states with skeleton screens

## What I Learned

While building this project, I got hands-on experience with:
- React hooks (useState, useEffect, useContext)
- React Router for navigation
- Context API for global state management
- Firebase authentication
- Working with external APIs
- Responsive CSS design
- Local storage for cart persistence
- Creating reusable components
- Deploying to production

## Screenshots

![Homepage](https://eshopsk.netlify.app/)
*Product listing page with search and filters*

---

**Note**: This is a practice project and uses fake data from Platzi API. The checkout process doesn't actually charge anything.

**Live Site**: [https://eshopsk.netlify.app/](https://eshopsk.netlify.app/)