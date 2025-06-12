import React from "react";
import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";
import PaymentMethod from "./components/PaymentMethod";

function App() {
  return (
    <div className="min-h-screen bg-pink-50 p-4 text-gray-800">
      <h1 className="text-center text-2xl font-semibold mb-4">Item Carts</h1>
      <div className="max-w-xl mx-auto bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-2">Your Food Cart</h2>
        <CartItem name="Grilled Salmon" price={96} image="https://via.placeholder.com/60" />
        <CartItem name="Meat vegetable" price={65.08} image="https://via.placeholder.com/60" />
        <div className="my-4">
          <input type="text" placeholder="Add Your Promo Code" className="w-full p-2 border rounded" />
        </div>
        <CartSummary />
        <PaymentMethod />
      </div>
    </div>
  );
}

export default App;
