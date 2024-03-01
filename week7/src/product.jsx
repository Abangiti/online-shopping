import React, { useState } from 'react';
import h3 from './assets/h3.png';
import h4 from './assets/h4.png';
import h6 from './assets/h6.png';
import './Product.css'; // Import the CSS file

export default function Product() {
  const [quantities, setQuantities] = useState([1, 1, 1]); // Initial quantities for each product
  const [cartItems, setCartItems] = useState([]);

  const handlePlus = (index) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] += 1;
    setQuantities(updatedQuantities);
  };

  const handleMinus = (index) => {
    const updatedQuantities = [...quantities];
    if (updatedQuantities[index] > 0) {
      updatedQuantities[index] -= 1;
      setQuantities(updatedQuantities);
    }
  };

  const handleAddToCart = (index) => {
    const selectedProduct = {
      name: products[index].name,
      price: products[index].price,
      quantity: quantities[index]
    };
    setCartItems([...cartItems, selectedProduct]);
  };

  const handleRemoveFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const products = [
    { name: 'Apple Headset', price: 99.0, image: h3 },
    { name: 'Razer Headset', price: 203.0, image: h4 },
    { name: 'Sony Headset', price: 105.0, image: h6 }
  ];

  const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  return (
    <>
      <h1>Headset</h1>

      {products.map((product, index) => (
        <div className="contain" key={index}>
          <div className="img">
            <img className="ear-image" src={product.image} alt="Product Image" />
          </div>
          <div className="word">
            <h2>{product.name}</h2>
            <h3>${product.price}</h3>
            <div className="di">
              <button className="btn" onClick={() => handleMinus(index)}>-</button>
              <input type="text" className="intt" value={quantities[index]} readOnly />
              <button className="btn" onClick={() => handlePlus(index)}>+</button>
              <button id="btn" onClick={() => handleAddToCart(index)}>ADD TO CART</button>
            </div>
          </div>
        </div>
      ))}

      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price} (Quantity: {item.quantity})
                <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total Price: ${getTotalPrice()}</p>
        </>
      )}
    </>
  );
}