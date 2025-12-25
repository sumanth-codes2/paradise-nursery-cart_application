import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

const CartItem = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const calculateTotalAmount = () => {
    return items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id}>
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>

              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: item.quantity - 1,
                    })
                  )
                }
              >
                -
              </button>

              <span> {item.quantity} </span>

              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: item.quantity + 1,
                    })
                  )
                }
              >
                +
              </button>

              <button onClick={() => dispatch(removeItem(item.id))}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total Amount: ₹{calculateTotalAmount()}</h3>
        </>
      )}
    </div>
  );
};

export default CartItem;
