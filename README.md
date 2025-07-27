# 🍕 HomeSlice Pizza - Your Custom Pizza Ordering App

A modern and responsive web application built with React, Vite, and Tailwind CSS, allowing users to browse a delicious pizza menu, customize their orders, manage a shopping cart, and complete a seamless checkout process.

## ✨ Features

* **User Authentication:** Secure login and signup functionality to personalize the user experience.
* **Interactive Menu:** Browse a diverse range of pizzas with descriptions, prices, and images.
* **Pizza Customization:**
    * Select from various pizza sizes (Small, Medium, Large, Extra Large).
    * Add or remove a variety of delicious toppings to your chosen pizza.
    * Dynamically calculated price based on size and toppings.
* **Shopping Cart Management:**
    * Add customized pizzas to your cart.
    * Adjust quantities of items directly in the cart.
    * Remove items from the cart.
    * View real-time total price calculation.
* **Smooth Checkout Process:**
    * Proceed to a dedicated checkout screen for order confirmation.
    * Simulated order completion with an estimated delivery time.
* **Responsive Design:** Optimized user interface for seamless experience across various devices (mobile, tablet, desktop) thanks to Tailwind CSS.
* **Navigation & UI Enhancements:**
    * Sticky header navigation for easy access to menu and cart.
    * Mobile-friendly sidebar navigation.
    * "Scroll to Top" button for quick navigation on long pages.
    * Integration with FontAwesome for crisp, scalable icons.

## 🚀 Technologies Used

* **Frontend Framework:** [React.js](https://react.dev/) (with Hooks for state management)
* **Build Tool:** [Vite](https://vitejs.dev/) - A fast development server and build tool for modern web projects.
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
* **Icons:** [FontAwesome](https://fontawesome.com/) - For a rich set of vector icons.
* **JavaScript:** ES6+

## 📸 Screenshots

*(You would typically add screenshots here after deploying or running the app locally)*
![Pizza with Olives](https://images.unsplash.com/photo-1627916719586-7a716c526d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
*Placeholder image - Replace with actual app screenshots.*

## 🔧 Installation & Setup

Follow these steps to get a copy of the project up and running on your local machine.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/alyelhady9/home-slice-pizza.git](https://github.com/alyelhady9/home-slice-pizza.git)
    cd YOUR_REPO_NAME
    ```
    (Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub details)

2.  **Install dependencies:**
    ```bash
    npm install
    # OR
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # OR
    yarn dev
    ```
    The application will typically be available at `http://localhost:5173/` (or another port if 5173 is in use).

## 💡 Usage

* **Browse Menu:** Navigate through the list of available pizzas.
* **Add to Cart:** Click the "Add to Cart" button on any pizza.
    * If you're not logged in, an authentication modal will appear.
    * If logged in, a customization modal will open for size and topping selection.
* **Customize:** Choose your preferred size and add/remove toppings. The price updates dynamically.
* **Confirm Order:** Once satisfied, add the customized pizza to your cart.
* **Cart Management:** Click the cart icon in the header to view/manage your cart items.
* **Checkout:** Proceed to checkout from the cart, confirm your order, and receive an estimated delivery time.

---