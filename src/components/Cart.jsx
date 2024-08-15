import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, handleRemoveFromCart }) => (
  <section>
    <h2>Cart</h2>
    <div className="cart-container">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onRemoveFromCart={handleRemoveFromCart}
          />
        ))
      )}
    </div>
  </section>
);

export default Cart;
