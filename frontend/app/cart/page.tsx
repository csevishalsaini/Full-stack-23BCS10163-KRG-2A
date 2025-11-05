"use client"

import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { useState } from "react"

export default function CartPage() {
  const { items: cartItems, updateQuantity, removeItem, loading } = useCart()
  const [updatingItemId, setUpdatingItemId] = useState<number | null>(null)

  // Totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )
  const shipping = cartItems.length > 0 ? 10 : 0
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  // Handle quantity updates with visual feedback
  const handleQuantityChange = async (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return
    try {
      setUpdatingItemId(productId)
      await updateQuantity(productId, newQuantity)
    } finally {
      setUpdatingItemId(null)
    }
  }

  return (
    <main className="min-h-screen bg-[#1d2525] text-[#f3f8fa]">
      <Header />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 text-[#f3f8fa] drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)]">
            Shopping Cart
          </h1>
          <p className="text-[#b8c7ce]">
            {cartItems.length} items in your cart
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-16 text-[#b8c7ce] text-lg">
            Loading your cart...
          </div>
        )}

        {!loading && cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <Card
                  key={item.product.id}
                  className="bg-[#2c3b3b] border border-[#3b707d]/40 p-6 rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(173,194,211,0.2)] transition-all"
                >
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Image */}
                    <Link
                      href={`/product/${item.product.id}`}
                      className="flex-shrink-0"
                    >
                      <img
                        src={item.product.imageUrl || "/placeholder.svg"}
                        alt={item.product.title}
                        className="w-28 h-28 rounded-xl object-cover hover:opacity-85 transition-opacity"
                      />
                    </Link>

                    {/* Details */}
                    <div className="flex-1">
                      <Link
                        href={`/product/${item.product.id}`}
                        className="hover:text-[#adc2d3] transition-colors"
                      >
                        <h3 className="font-semibold text-xl mb-2 text-[#f3f8fa]">
                          {item.product.title}
                        </h3>
                      </Link>
                      <p className="text-[#b8c7ce] text-sm mb-2 capitalize">
                        {item.product.category?.toLowerCase()}
                      </p>
                      <p className="font-bold text-[#adc2d3] text-lg">
                        ₹{item.product.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity + Actions */}
                    <div className="flex flex-col items-end justify-between">
                      <div className="flex items-center gap-3 bg-[#3b707d]/30 rounded-lg p-2">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.product.id, item.quantity - 1)
                          }
                          disabled={
                            item.quantity <= 1 || updatingItemId === item.product.id
                          }
                          className="w-8 h-8 flex items-center justify-center hover:bg-[#3b707d]/50 rounded transition-colors disabled:opacity-40"
                        >
                          <Minus className="w-4 h-4 text-[#f3f8fa]" />
                        </button>

                        <span className="w-8 text-center font-semibold text-[#f3f8fa]">
                          {updatingItemId === item.product.id ? (
                            <span className="animate-pulse">...</span>
                          ) : (
                            item.quantity
                          )}
                        </span>

                        <button
                          onClick={() =>
                            handleQuantityChange(item.product.id, item.quantity + 1)
                          }
                          disabled={updatingItemId === item.product.id}
                          className="w-8 h-8 flex items-center justify-center hover:bg-[#3b707d]/50 rounded transition-colors disabled:opacity-40"
                        >
                          <Plus className="w-4 h-4 text-[#f3f8fa]" />
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.product.id)}
                        disabled={updatingItemId === item.product.id}
                        className="text-red-400 hover:text-red-500 transition-colors mt-4 flex items-center gap-2 disabled:opacity-40"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span className="text-sm">Remove</span>
                      </button>

                      {/* Item Total */}
                      <p className="font-bold text-[#adc2d3] text-lg mt-4">
                        ₹{(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}

              {/* Continue Shopping */}
              <Button
                asChild
                variant="outline"
                className="w-full mt-8 rounded-full border border-[#adc2d3]/40 bg-[#3b707d]/20 hover:bg-[#3b707d]/40 text-[#adc2d3] py-3 font-semibold transition-all"
              >
                <Link href="/products">Continue Shopping</Link>
              </Button>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <Card className="bg-[#2c3b3b] border border-[#3b707d]/40 p-6 rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.4)] sticky top-24">
                <h3 className="text-2xl font-bold text-[#f3f8fa] mb-6">
                  Order Summary
                </h3>

                <div className="space-y-4 mb-6 text-[#b8c7ce]">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span className="text-[#f3f8fa] font-semibold">
                      ₹{subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span className="text-[#f3f8fa] font-semibold">
                      ₹{shipping.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax (10%)</span>
                    <span className="text-[#f3f8fa] font-semibold">
                      ₹{tax.toFixed(2)}
                    </span>
                  </div>

                  <div className="bg-[#3b707d]/20 rounded-lg p-4 border border-[#adc2d3]/30">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-[#adc2d3]">Total</span>
                      <span className="text-2xl font-bold text-[#f3f8fa]">
                        ₹{total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-[#3b707d] to-[#adc2d3] hover:opacity-90 text-[#1d2525] rounded-full py-3 font-semibold"
                >
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>

                <div className="mt-6 pt-6 border-t border-[#3b707d]/40">
                  <p className="text-xs text-[#b8c7ce] text-center">
                    ✓ Secure checkout with SSL encryption
                  </p>
                </div>
              </Card>
            </div>
          </div>
        ) : (
          !loading && (
            <div className="text-center py-24">
              <ShoppingBag className="w-16 h-16 text-[#adc2d3] mx-auto mb-6 opacity-70" />
              <h2 className="text-3xl font-bold text-[#f3f8fa] mb-3">
                Your cart is empty
              </h2>
              <p className="text-[#b8c7ce] mb-8">
                Start shopping to add items to your cart
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-[#3b707d] to-[#adc2d3] hover:opacity-90 text-[#1d2525] rounded-full px-8 py-3 font-semibold transition-all"
              >
                <Link href="/products">Start Shopping</Link>
              </Button>
            </div>
          )
        )}
      </div>

      <Footer />
    </main>
  )
}
