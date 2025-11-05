"use client"

import { Card } from "@/components/ui/card"

const cartItems = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 129.99,
    quantity: 1,
    image: "/premium-wireless-headphones.png",
  },
  {
    id: 2,
    name: "Elegant Summer Dress",
    price: 79.99,
    quantity: 2,
    image: "/elegant-summer-dress-fashion.jpg",
  },
]

export default function OrderSummary() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 10
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  return (
    <Card className="bg-[#2c3b3b] border border-[#3b707d]/40 p-6 rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.4)] sticky top-24 text-[#f3f8fa]">
      <h3 className="text-2xl font-bold text-[#f3f8fa] mb-6">
        Order Summary
      </h3>

      {/* 🛍️ Cart Items */}
      <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 pb-4 border-b border-[#3b707d]/30"
          >
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              className="w-16 h-16 rounded-lg object-cover bg-[#3b707d]/20"
            />
            <div className="flex-1">
              <p className="font-semibold text-[#f3f8fa] text-sm line-clamp-2">
                {item.name}
              </p>
              <p className="text-[#b8c7ce] text-xs mt-1">
                Qty: {item.quantity}
              </p>
              <p className="font-bold text-[#adc2d3] text-sm mt-1">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 💰 Pricing Breakdown */}
      <div className="space-y-3 border-t border-[#3b707d]/30 pt-6">
        <div className="flex justify-between text-sm">
          <span className="text-[#b8c7ce]">Subtotal</span>
          <span className="text-[#f3f8fa] font-semibold">
            ${subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-[#b8c7ce]">Shipping</span>
          <span className="text-[#f3f8fa] font-semibold">
            ${shipping.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-[#b8c7ce]">Tax (10%)</span>
          <span className="text-[#f3f8fa] font-semibold">
            ${tax.toFixed(2)}
          </span>
        </div>

        {/* ✅ Total */}
        <div className="bg-[#3b707d]/20 rounded-lg p-4 mt-4 border border-[#adc2d3]/30">
          <div className="flex justify-between items-center">
            <span className="font-bold text-[#adc2d3]">Total</span>
            <span className="text-2xl font-bold text-[#f3f8fa]">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* 🎟️ Promo Code */}
      <div className="mt-6 pt-6 border-t border-[#3b707d]/40">
        <input
          type="text"
          placeholder="Enter promo code"
          className="w-full px-4 py-2 rounded-lg bg-[#3b707d]/20 border border-[#adc2d3]/30 focus:ring-2 focus:ring-[#3b707d] text-[#f3f8fa] placeholder-[#b8c7ce] text-sm outline-none transition-all"
        />
        <button className="w-full mt-2 bg-gradient-to-r from-[#3b707d] to-[#adc2d3] hover:opacity-90 text-[#1d2525] rounded-full py-2 font-semibold text-sm transition-all">
          Apply Code
        </button>
      </div>
    </Card>
  )
}
