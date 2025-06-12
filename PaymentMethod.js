import React from "react";

const PaymentMethod = () => {
  return (
    <div className="mt-4">
      <h3 className="font-semibold mb-2">Payment Method</h3>
      <div className="flex items-center space-x-2 border p-2 rounded">
        <span>💳</span>
        <span>Credit/Debit Card</span>
      </div>
    </div>
  );
};

export default PaymentMethod;
