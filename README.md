# 🛒 Shopping Cart — Redux Learning Project

🔗 [Live Demo](https://shopping-cart-using-redux-khaki.vercel.app/)

A mini shopping cart application built with React and Redux Toolkit to understand state management through hands-on development.

## Features

* Browse a list of products
* Add products to the shopping cart
* Increase or decrease item quantities
* Apply coupon codes for discounts
* Automatic calculation of subtotal, discount, and final total
* Real-time cart item count displayed in the navbar

## Tech Stack

* React 19
* Redux Toolkit
* React Redux
* Tailwind CSS
* Shadcn UI
* Vite

## What I Learned

* Setting up and configuring Redux Toolkit in a React application
* Creating and organizing Redux slices for feature-based state management
* Managing global state instead of relying on prop drilling
* Using `useSelector` to access store data across components
* Using `useDispatch` to trigger state updates through actions
* Handling complex cart operations such as adding, removing, and updating quantities
* Calculating derived values like cart totals and discounts from store data
* Managing application state in a predictable and scalable way
* Structuring Redux files for maintainability and future feature expansion
* Debugging Redux state changes and understanding application data flow

## Project Structure

```text
src/
  myComponent/
    navbar.jsx       # Navigation bar with cart badge
    products.jsx     # Product listing
    cart.jsx         # Cart dialog and order summary
    cartItem.jsx     # Individual cart item
    quantity.jsx     # Quantity controls

  redux/
    store.js
    slices/
      productSlice.js
```

## Getting Started

```bash
npm install
npm run dev
```
