import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: Number(e.target.value)
      })
    );
  };

  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>Price: ₹{item.price}</p>

      <label>
        Quantity:
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
        />
      </label>

      <button onClick={() => dispatch(removeItem(item.id))}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
