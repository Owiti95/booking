import React from "react";

const CartItem = ({item, onRemoveFromCart}) => (
    <div key={item.id} className="cart-item">
        <img src={item.imageUrl} alt={item.course} />
        <p>{item.course} - ${item.price}</p>
        <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
    </div>
);

export default CartItem;