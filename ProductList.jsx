import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 299,
    description: "A low maintenance indoor plant."
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 399,
    description: "Improves air quality and easy to grow."
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 499,
    description: "A beautiful flowering indoor plant."
  }
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="product-list">
      <h2>Our Plants</h2>

      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ₹{product.price}</p>

          <button onClick={() => dispatch(addItem(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
