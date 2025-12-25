import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

const App = () => {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="app-container">
      {!showProducts ? (
        <div className="landing-content">
          <h1>Welcome to Paradise Nursery</h1>
          <p>Your one-stop shop for healthy and beautiful plants.</p>
          <button onClick={() => setShowProducts(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
};

export default App;
