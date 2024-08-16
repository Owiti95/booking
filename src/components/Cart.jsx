//Display cart contents(cards) 
import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, handleRemoveFromCart }) => (
  <section className="p-6 bg-gray-100 min-h-screen">
    <h2 className="text-3xl font-bold mb-6">Cart</h2>
    <div className="flex flex-wrap gap-4">
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
