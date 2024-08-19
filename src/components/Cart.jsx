//Display cart contents(cards) 
import React from 'react';
import CartItem from './CartItem';
// Define the `Cart` functional component, which takes `cart` and `handleRemoveFromCart` as props.
const Cart = ({ cart, handleRemoveFromCart }) => (
  // Create a section to contain the cart content with padding, background color, and minimum height.
  <section className="p-6 bg-gray-100 min-h-screen">
    <h2 className="text-3xl font-bold mb-6">Cart</h2>
    <div className="flex flex-wrap gap-4">
      {/* Conditional rendering based on whether the cart is empty */}
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
