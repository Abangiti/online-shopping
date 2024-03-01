import React from 'react';

export default function Cart({ cartItems }) {
  return (
    <>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </>
  );
}