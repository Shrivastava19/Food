import React from "react";

const CartSummary = () => {
  return (
    <div className="border-t pt-3">
      <div className="flex justify-between">
        <span>Grilled Salmon</span>
        <span>$192</span>
      </div>
      <div className="flex justify-between">
        <span>Meat vegetable</span>
        <span>$102</span>
      </div>
      <div className="flex justify-between font-bold mt-2">
        <span>Total</span>
        <span>$292</span>
      </div>
    </div>
  );
};

export default CartSummary;
