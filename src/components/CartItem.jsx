//puts the information of individual selected item/course
import React from "react";
// Define the `CartItem` functional component, which takes `item` and `onRemoveFromCart` as props.
const CartItem = ({item, onRemoveFromCart}) => (
    // Render the cart item with styling and functionality.
    <div key={item.id} className="shadow">
        {/* Image of the cart item */}
        <img src={item.imageUrl} alt={item.course} className="w-42 rounded-lg mb-3" />
        {/* Display course name and price */}
        <p className="mb-3">{item.course} - ${item.price}</p>
        <button onClick={() => onRemoveFromCart(item.id)} className="px-1 py-1 bg-lime-700 text-white font-semibold rounded hover:bg-lime-900 transition-colors duration-300">Remove</button>
    </div>
);

export default CartItem;