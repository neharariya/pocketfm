"use client";

import { useState } from "react";

const StorePage = () => {
  const [walletBalance, setWalletBalance] = useState(0); // Wallet balance state
  const [couponCode, setCouponCode] = useState(""); // Coupon code state

  // Handle applying coupon code
  const applyCoupon = () => {
    // Add your logic to apply coupon
    alert(`Coupon "${couponCode}" applied successfully!`);
  };

  return (
    <div className="bg-black text-white min-h-screen px-6 py-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Pocket FM</h1>
        <div className="flex items-center">
          <span className="mr-2">0 Coins</span>
          <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-black font-bold">
            🪙
          </div>
        </div>
      </div>

      {/* Wallet and Coupon Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg">Use Your Wallet Money</span>
          <div className="flex items-center bg-gray-800 px-4 py-2 rounded-md">
            <span>₹{walletBalance.toFixed(2)}</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Enter Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={applyCoupon}
            className="bg-blue-600 px-6 py-2 rounded-md font-medium hover:bg-blue-500"
          >
            Apply
          </button>
        </div>
      </div>

      {/* Trial Pack Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">
          🔥 Trial Pack | Limited Time Offer
        </h2>
        <div className="bg-green-800 text-white flex items-center justify-between p-4 rounded-md">
          <div>
            <h3 className="text-lg font-bold">100 Coins + 120 Free</h3>
            <p className="text-sm">120% bonus</p>
          </div>
          <button className="bg-green-600 px-6 py-2 rounded-md font-bold text-white">
            ₹25
          </button>
        </div>
      </div>

      {/* Coin Packs Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Coin Packs</h2>
        {[
          { coins: 80, bonus: 120, price: 39 },
          { coins: 160, bonus: 320, price: 79 },
          { coins: 240, bonus: 480, price: 119 },
          { coins: 400, bonus: 800, price: 199 },
        ].map((pack, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white flex items-center justify-between p-4 rounded-md mb-4"
          >
            <div>
              <h3 className="text-lg font-bold">
                {pack.coins} Coins + {pack.bonus} Free
              </h3>
              <p className="text-sm">{(pack.bonus / pack.coins) * 100}% bonus</p>
            </div>
            <button className="bg-red-600 px-6 py-2 rounded-md font-bold text-white">
              ₹{pack.price}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorePage;
