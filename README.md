# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




Product List App
This project is a Product List Application built using ReactJS, Redux, and Vite. The app fetches products in batches from the Dummy JSON API and displays them progressively without pagination. It also includes a search functionality to filter products based on the user's input.

Features:
Fetch products in batches (e.g., 1-10, 11-20) from the API.
Displays products based on selected categories; shows all products if no category is selected.
Search products using keywords.
Clickable product cards that open a modal with product details and options to "Buy Now" or "Add to Cart."
Query parameters for storing the selected category and search input.
Functional components throughout the app.
UI follows a light brown "brownie" aesthetic with Material-UI enhancements.
Error handling and limitations noted in comments within the App.js file.
Technologies Used:
ReactJS
Redux
Vite
Material-UI
Setup Instructions:
Clone the repository.
Run npm install to install dependencies.
Start the development server using npm run dev.
