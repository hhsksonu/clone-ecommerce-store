# E-commerce Store - Project Overview

## What This Project Does

This is a fully functional e-commerce web application where users can:
- Browse and search for products
- Filter products by categories
- Sort products by price
- View detailed product information
- Add products to shopping cart
- Manage cart (update quantities, remove items)
- Sign up and log in with email/password
- Complete a mock checkout process

## Technologies Used

### Frontend
- **React 18** - JavaScript library for building UI
- **React Router v6** - Client-side routing
- **Context API** - State management for cart and authentication
- **CSS3** - Styling and responsive design
- **Axios** - HTTP client for API requests

### Backend Services
- **Firebase Authentication** - User authentication
- **Platzi Fake Store API** - Product data source

### Deployment
- **Netlify/Vercel** - Hosting platforms

## Key Features Implemented

### 1. Product Listing (Home Page)
- Fetches products from API on page load
- Displays products in a responsive grid layout
- Shows product image, title, price
- "Add to Cart" button on each product card

### 2. Product Search & Filters
- Search bar to filter products by name
- Category dropdown to filter by category
- Price sorting (low to high, high to low)
- All filters work together

### 3. Product Details Page
- Displays full product information
- Shows larger product image
- Category information
- Complete description
- Add to cart functionality
- Back button to return to listing

### 4. Shopping Cart
- View all cart items
- Update quantities using input field
- Remove items from cart
- See total price calculation
- Empty cart message when no items
- Cart persists using localStorage
- Cart count shown in navbar

### 5. Checkout Process
- Collects shipping information
- Mock payment form (demo only)
- Order summary with item list and total
- Form validation
- Success message on order placement
- Clears cart after successful checkout

### 6. Authentication
- Sign up with email and password
- Login functionality
- Firebase authentication integration
- Protected routes (redirect if not logged in)
- User email displayed in navbar when logged in
- Logout functionality

### 7. Responsive Design
- Works on desktop, tablet, and mobile
- Adaptive grid layout for products
- Mobile-friendly navigation
- Responsive forms and buttons

## Project Architecture

### Component Structure
```
App (Router + Providers)
├── Navbar (always visible)
├── Home (product listing)
├── ProductDetails (single product)
├── Cart (shopping cart)
├── Checkout (order form)
├── Login (authentication)
└── Signup (registration)
```

### Context Providers
- **AuthContext** - Manages user authentication state
- **CartContext** - Manages shopping cart state

### State Management
- Used Context API instead of Redux (simpler for this project size)
- Cart state persisted to localStorage
- Auth state managed by Firebase

## File Organization

```
src/
├── components/          # Reusable components
│   ├── Navbar.js       # Navigation bar
│   ├── ProductCard.js  # Product card component
│   └── *.css          # Component styles
├── pages/              # Page components
│   ├── Home.js        # Product listing page
│   ├── ProductDetails.js
│   ├── Cart.js
│   ├── Checkout.js
│   ├── Login.js
│   ├── Signup.js
│   └── *.css          # Page styles
├── context/           # Context providers
│   ├── AuthContext.js
│   └── CartContext.js
├── firebase.js       # Firebase configuration
├── App.js           # Main app component
└── index.js        # Entry point
```

## API Endpoints Used

### Products
- `GET https://api.escuelajs.co/api/v1/products` - Get all products
- `GET https://api.escuelajs.co/api/v1/products/:id` - Get single product

### Categories
- `GET https://api.escuelajs.co/api/v1/categories` - Get all categories

## Learning Outcomes

Through this project, I learned:
- How to structure a React application
- Working with React Router for navigation
- Using Context API for state management
- Integrating third-party APIs
- Firebase authentication setup and usage
- Managing cart state with localStorage
- Creating responsive layouts with CSS
- Handling forms and validation
- Deploying React apps to production

## Challenges Faced & Solutions

1. **Cart Persistence**: Solved by saving cart to localStorage
2. **Auth State Management**: Used Firebase's onAuthStateChanged listener
3. **Product Image Loading**: Some API images are slow, handled with error states
4. **Routing on Deployment**: Fixed with redirect rules in netlify.toml

## Future Enhancements (If I Had More Time)

- Add product reviews and ratings
- Implement wish list functionality
- Add user profile page
- Show order history
- Add more payment options
- Implement real-time inventory
- Add product recommendations
- Better error handling and loading states
- Add unit tests

## Performance Considerations

- Images lazy load naturally with browser defaults
- Cart state optimized with localStorage
- React's virtual DOM handles UI updates efficiently
- Could add React.memo for product cards if needed

## Security Notes

- Firebase handles authentication securely
- Environment variables used for sensitive data
- Cart is client-side only (no sensitive data)
- Checkout is mock (no real payment processing)

## Browser Compatibility

Tested and working on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Time Spent

Approximately 8-10 hours total:
- Planning and setup: 1 hour
- Component development: 4 hours
- Styling and responsive design: 2 hours
- Firebase integration: 1 hour
- Testing and bug fixes: 1-2 hours
- Documentation: 1 hour

---

This project demonstrates my ability to build a complete, functional web application using modern React practices and integrating with external services.
