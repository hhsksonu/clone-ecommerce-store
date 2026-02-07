# ShopEasy - E-commerce Web Application

This is my React-based e-commerce project that I built as a pre-interview assignment. It's a fully functional online shopping app where users can browse products, add them to cart, and complete a mock checkout.

## Live Demo
[Add your deployed link here after deployment]

## Features

- Browse products from different categories
- Search products by name
- Filter products by category
- Sort products by price (low to high / high to low)
- View detailed product information
- Add products to cart
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
   git clone [your-repo-url]
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

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Install Netlify CLI (if not already installed):
   ```bash
   npm install -g netlify-cli
   ```

3. Deploy:
   ```bash
   netlify deploy --prod
   ```

4. Make sure to add your environment variables in Netlify dashboard under Site settings > Build & deploy > Environment

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
- Could improve error handling in some places
- Product images sometimes take time to load

## What I Learned

While building this project, I got hands-on experience with:
- React hooks (useState, useEffect, useContext)
- React Router for navigation
- Context API for global state management
- Firebase authentication
- Working with external APIs
- Responsive CSS design
- Local storage for cart persistence

## Screenshots

[Add screenshots of your app here after deployment]

## Contact

Feel free to reach out if you have any questions!

---

**Note**: This is a practice project and uses fake data from Platzi API. The checkout process doesn't actually charge anything.
