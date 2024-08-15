import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, handleRemoveFromCart }) => (
  <section py-10 px-8>
    <h2>Cart</h2>
    <div className="flex overflow-x-auto space-x-4 pb-4 py-10 py-8">
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
