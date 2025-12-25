import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plantCategories = {
  Indoor: [
    { id: 1, name: "Aloe Vera", price: 299, img: "https://via.placeholder.com/100" },
    { id: 2, name: "Snake Plant", price: 399, img: "https://via.placeholder.com/100" },
    { id: 3, name: "Peace Lily", price: 499, img: "https://via.placeholder.com/100" },
    { id: 4, name: "ZZ Plant", price: 450, img: "https://via.placeholder.com/100" },
    { id: 5, name: "Spider Plant", price: 350, img: "https://via.placeholder.com/100" },
    { id: 6, name: "Rubber Plant", price: 550, img: "https://via.placeholder.com/100" }
  ],
  Outdoor: [
    { id: 7, name: "Rose", price: 200, img: "https://via.placeholder.com/100" },
    { id: 8, name: "Hibiscus", price: 250, img: "https://via.placeholder.com/100" },
    { id: 9, name: "Jasmine", price: 180, img: "https://via.placeholder.com/100" },
    { id: 10, name: "Bougainvillea", price: 300, img: "https://via.placeholder.com/100" },
    { id: 11, name: "Tulsi", price: 150, img: "https://via.placeholder.com/100" },
    { id: 12, name: "Money Plant", price: 220, img: "https://via.placeholder.com/100" }
  ]
};

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="product-list">
      <h2>Plant Categories</h2>

      {Object.keys(plantCategories).map((category) => (
        <div key={category}>
          <h3>{category}</h3>

          <div className="products">
            {plantCategories[category].map((plant) => (
              <div key={plant.id} className="product-card">
                <img src={plant.img} alt={plant.name} />
                <h4>{plant.name}</h4>
                <p>₹{plant.price}</p>
                <button onClick={() => dispatch(addItem(plant))}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
