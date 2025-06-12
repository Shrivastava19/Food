import React, { useState } from "react";

const CartItem = ({ name, price, image }) => {
  const [quantity, setQuantity] = useState(2);

  return (
    <div className="flex items-center justify-between border-b py-3">
      <img src={image} alt={name} className="w-16 h-16 rounded" />
      <div className="flex-1 px-4">
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-gray-500">${price.toFixed(2)}</div>
      </div>
      <div className="flex items-center">
        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-2">-</button>
        <div className="px-2">Add To {quantity}</div>
        <button onClick={() => setQuantity(quantity + 1)} className="px-2">+</button>
      </div>
      <button className="text-red-500 ml-2">🗑️</button>
    </div>
  );
};

export default CartItem;
