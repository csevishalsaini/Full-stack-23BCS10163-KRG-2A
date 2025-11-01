"use client"

import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Package, Truck, MapPin, Mail } from "lucide-react"

export default function OrderConfirmationPage() {
  const orderNumber = "#ORD-2025-001234"
  const orderDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const orderItems = [
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

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 10
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0b1a] via-[#151f3b] to-[#1c2541] text-[#e6ebff] relative">
      <Header />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        {/*Success Icon */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-tr from-[#6a5acd]/30 to-[#1e90ff]/30 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-[0_0_25px_rgba(110,140,255,0.3)]">
              <CheckCircle className="w-12 h-12 text-[#94b8ff]" />
            </div>
          </div>
          <h1 className="text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#94b8ff] to-[#a57eff]">
            Order Confirmed!
          </h1>
          <p className="text-lg text-[#a4b0d3]/80">
            Thank you for choosing <span className="text-[#94b8ff] font-semibold">ShopVerse</span>
          </p>
        </div>

        {/* Order Summary Info */}
        <Card className="bg-white/5 border border-[#94b8ff]/20 rounded-2xl p-8 backdrop-blur-md mb-10">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <p className="text-sm text-[#a4b0d3]/70">Order Number</p>
              <p className="text-xl font-semibold text-[#94b8ff] mt-1">{orderNumber}</p>
            </div>
            <div>
              <p className="text-sm text-[#a4b0d3]/70">Order Date</p>
              <p className="text-xl font-semibold text-[#e6ebff] mt-1">{orderDate}</p>
            </div>
            <div>
              <p className="text-sm text-[#a4b0d3]/70">Delivery Estimate</p>
              <p className="text-xl font-semibold text-[#e6ebff] mt-1">
                3–5 Business Days
              </p>
            </div>
          </div>
        </Card>

        {/* Status Steps */}
        <Card className="bg-white/5 border border-[#94b8ff]/20 rounded-2xl p-8 mb-10 backdrop-blur-md">
          <h2 className="text-2xl font-bold text-[#94b8ff] mb-8">Order Progress</h2>
          <div className="space-y-6">
            {[
              { label: "Order Placed", desc: "We’ve received your order", icon: CheckCircle, active: true },
              { label: "Processing", desc: "Your items are being packed", icon: Package, active: true },
              { label: "Shipped", desc: "Order is on its way", icon: Truck, active: false },
              { label: "Delivered", desc: "Will be delivered soon", icon: CheckCircle, active: false },
            ].map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-full transition-all ${
                        step.active
                          ? "bg-gradient-to-tr from-[#6a5acd]/40 to-[#1e90ff]/40 shadow-[0_0_15px_rgba(120,150,255,0.4)]"
                          : "bg-[#1c2541]/60 border border-[#a4b0d3]/20"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          step.active ? "text-[#94b8ff]" : "text-[#65749b]"
                        }`}
                      />
                    </div>
                    {i !== 3 && (
                      <div
                        className={`w-1 h-12 ${
                          step.active ? "bg-gradient-to-b from-[#94b8ff]/60 to-transparent" : "bg-[#303a5a]"
                        }`}
                      ></div>
                    )}
                  </div>
                  <div>
                    <p
                      className={`font-semibold ${
                        step.active ? "text-[#e6ebff]" : "text-[#a4b0d3]/70"
                      }`}
                    >
                      {step.label}
                    </p>
                    <p className="text-sm text-[#a4b0d3]/70">{step.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Card>

        {/*  Order Items & Info */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-white/5 border border-[#94b8ff]/20 p-8 rounded-2xl backdrop-blur-md">
              <h2 className="text-2xl font-bold text-[#94b8ff] mb-6">Your Items</h2>
              <div className="space-y-5">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex gap-5 border-b border-[#94b8ff]/10 pb-5 last:border-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg bg-[#1c2541]"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-[#e6ebff]">{item.name}</p>
                      <p className="text-sm text-[#a4b0d3]/80">
                        Qty: {item.quantity}
                      </p>
                      <p className="text-[#94b8ff] font-semibold mt-2">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/5 border border-[#94b8ff]/20 p-6 rounded-2xl backdrop-blur-md">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-[#94b8ff] w-5 h-5" />
                  <h3 className="font-semibold text-[#e6ebff]">Shipping Address</h3>
                </div>
                <p className="text-sm text-[#a4b0d3]/80">
                  John Doe
                  <br /> 123 Main Street
                  <br /> New York, NY 10001
                  <br /> United States
                </p>
              </Card>

              <Card className="bg-white/5 border border-[#94b8ff]/20 p-6 rounded-2xl backdrop-blur-md">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="text-[#94b8ff] w-5 h-5" />
                  <h3 className="font-semibold text-[#e6ebff]">Contact</h3>
                </div>
                <p className="text-sm text-[#a4b0d3]/80">
                  john@example.com
                  <br /> +1 (555) 123-4567
                </p>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <Card className="bg-white/5 border border-[#94b8ff]/20 p-6 rounded-2xl backdrop-blur-md sticky top-24">
            <h3 className="text-xl font-semibold text-[#94b8ff] mb-5">
              Order Summary
            </h3>
            <div className="space-y-4 text-[#a4b0d3]/90 mb-6">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="bg-[#1c2541]/60 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#e6ebff]">Total</span>
                  <span className="text-2xl font-bold text-[#94b8ff]">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <Button className="w-full bg-gradient-to-r from-[#6a5acd] to-[#1e90ff] hover:opacity-90 text-white font-semibold rounded-xl py-3">
                Track Order
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full border border-[#94b8ff]/30 text-[#94b8ff] hover:bg-[#1c2541]/60 rounded-xl py-3 font-semibold"
              >
                <Link href="/products">Continue Shopping</Link>
              </Button>
            </div>
          </Card>
        </div>

        {/*  Support Section */}
        <Card className="bg-white/5 border border-[#94b8ff]/20 p-8 mt-10 text-center rounded-2xl backdrop-blur-md">
          <h3 className="text-xl font-bold text-[#94b8ff] mb-3">Need Assistance?</h3>
          <p className="text-[#a4b0d3]/80 mb-6">
            Questions about your order? We’re here to help 24/7.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Button className="bg-gradient-to-r from-[#1e90ff] to-[#6a5acd] hover:opacity-90 text-white font-semibold rounded-full px-6 py-2">
              Contact Support
            </Button>
            <Button
              asChild
              variant="outline"
              className="border border-[#94b8ff]/30 text-[#94b8ff] hover:bg-[#1c2541]/60 rounded-full px-6 py-2 font-semibold"
            >
              <Link href="/faq">View FAQ</Link>
            </Button>
          </div>
        </Card>
      </div>

      <Footer />
    </main>
  )
}
