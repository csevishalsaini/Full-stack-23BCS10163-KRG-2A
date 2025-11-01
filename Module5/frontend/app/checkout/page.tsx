"use client";

import type React from "react";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CheckoutSteps from "@/components/checkout-steps";
import ShippingForm from "@/components/shipping-form";
import PaymentForm from "@/components/payment-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/context/cart-context";

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const { items: cartItems, loading } = useCart();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    paymentMethod: "card",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentMethodChange = (method: string) => {
    setFormData((prev) => ({ ...prev, paymentMethod: method }));
  };

  const handleNextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handlePlaceOrder = () => {
    console.log("Order placed:", { formData, cartItems });
    setCurrentStep(4);
  };

  // Totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = cartItems.length > 0 ? 10 : 0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <main className="min-h-screen bg-[#242e2d] text-[#e3ecf3]">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-2 text-[#adc2d3]">Checkout</h1>
          <p className="text-[#e3ecf3]/80">
            Complete your purchase securely and effortlessly.
          </p>
        </div>

        <CheckoutSteps currentStep={currentStep} />

        {currentStep === 4 ? (
          // ✅ Order Confirmation
          <div className="max-w-2xl mx-auto mt-12">
            <Card className="bg-[#e3ecf3] border-0 p-8 text-center rounded-2xl shadow-[0_0_25px_rgba(173,194,211,0.3)]">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#3b707d]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[#3b707d]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-[#242e2d] mb-2">
                  Order Confirmed!
                </h2>
                <p className="text-[#3b707d] mb-6">
                  Thank you for your purchase. A confirmation email has been
                  sent to{" "}
                  <span className="font-semibold text-[#242e2d]">
                    {formData.email || "your inbox"}
                  </span>
                  .
                </p>
              </div>

              <div className="bg-[#adc2d3]/20 rounded-lg p-6 mb-6 text-left text-[#242e2d]">
                <p className="text-sm font-medium mb-1">Order Number</p>
                <p className="text-2xl font-bold mb-2">#ORD-2025-001234</p>
                <p className="text-sm">Track your order anytime on your account.</p>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-[#3b707d] hover:bg-[#2e5e6a] text-[#e3ecf3] rounded-full py-3 font-semibold">
                  View Order Details
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-full border border-[#3b707d] text-[#3b707d] hover:bg-[#adc2d3]/30 py-3 font-semibold"
                >
                  Continue Shopping
                </Button>
              </div>
            </Card>
          </div>
        ) : (
          // ✅ Main Form + Sidebar
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              {currentStep === 1 && (
                <ShippingForm
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              )}
              {currentStep === 2 && (
                <PaymentForm
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handlePaymentMethodChange={handlePaymentMethodChange}
                />
              )}
              {currentStep === 3 && (
                <Card className="bg-[#3b707d]/10 border border-[#adc2d3]/30 p-8 rounded-2xl">
                  <h2 className="text-2xl font-bold text-[#adc2d3] mb-6">
                    Review Your Order
                  </h2>
                  <div className="space-y-4 text-[#e3ecf3]/90">
                    <div className="bg-[#3b707d]/20 rounded-lg p-4">
                      <h3 className="font-semibold text-[#adc2d3] mb-2">
                        Shipping Address
                      </h3>
                      <p className="text-sm">
                        {formData.firstName} {formData.lastName}
                        <br />
                        {formData.address}
                        <br />
                        {formData.city}, {formData.state} {formData.zipCode}
                        <br />
                        {formData.country}
                      </p>
                    </div>
                    <div className="bg-[#3b707d]/20 rounded-lg p-4">
                      <h3 className="font-semibold text-[#adc2d3] mb-2">
                        Payment Method
                      </h3>
                      <p className="text-sm">
                        {formData.paymentMethod === "card"
                          ? `Credit Card ending in ${formData.cardNumber.slice(
                              -4
                            )}`
                          : formData.paymentMethod === "upi"
                          ? "UPI Payment"
                          : "Cash on Delivery"}
                      </p>
                    </div>
                    <div className="bg-[#adc2d3]/20 rounded-lg p-4">
                      <p className="text-sm font-semibold text-[#242e2d]">
                        ✓ All information verified. Ready to place your order.
                      </p>
                    </div>
                  </div>
                </Card>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8">
                {currentStep > 1 && (
                  <Button
                    onClick={handlePreviousStep}
                    variant="outline"
                    className="flex-1 rounded-full border border-[#adc2d3]/40 bg-transparent hover:bg-[#3b707d]/30 text-[#adc2d3] py-3 font-semibold"
                  >
                    Back
                  </Button>
                )}
                {currentStep < 3 && (
                  <Button
                    onClick={handleNextStep}
                    className="flex-1 bg-gradient-to-r from-[#3b707d] to-[#adc2d3] hover:opacity-90 text-[#e3ecf3] rounded-full py-3 font-semibold"
                  >
                    Continue
                  </Button>
                )}
                {currentStep === 3 && (
                  <Button
                    onClick={handlePlaceOrder}
                    className="flex-1 bg-gradient-to-r from-[#3b707d] to-[#adc2d3] hover:opacity-90 text-[#e3ecf3] rounded-full py-3 font-semibold"
                  >
                    Place Order
                  </Button>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-[#3b707d]/10 border border-[#adc2d3]/30 p-6 sticky top-24 rounded-2xl">
                <h3 className="text-xl font-bold text-[#adc2d3] mb-6">
                  Order Summary
                </h3>
                <div className="space-y-4 mb-6 max-h-[350px] overflow-y-auto">
                  {loading ? (
                    <p className="text-[#adc2d3]/80 text-sm">Loading cart...</p>
                  ) : cartItems.length > 0 ? (
                    cartItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between gap-3 border-b border-[#adc2d3]/20 pb-3"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={item.product.imageUrl}
                            alt={item.product.title}
                            className="w-12 h-12 rounded-md object-cover"
                          />
                          <div>
                            <p className="text-sm font-semibold text-[#e3ecf3]">
                              {item.product.title}
                            </p>
                            <p className="text-xs text-[#adc2d3]/70">
                              Qty: {item.quantity}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm font-semibold text-[#adc2d3]">
                          ₹{(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-[#adc2d3]/80 text-center">
                      Your cart is empty
                    </p>
                  )}
                </div>

                {/* Totals */}
                <div className="space-y-3 mb-6 text-[#e3ecf3]/90">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span className="font-semibold">₹{shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax (10%)</span>
                    <span className="font-semibold">₹{tax.toFixed(2)}</span>
                  </div>

                  <div className="bg-[#3b707d]/30 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-[#adc2d3]">Total</span>
                      <span className="text-2xl font-bold text-[#adc2d3]">
                        ₹{total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#adc2d3]/70 text-center">
                  ✓ Secure checkout with SSL encryption
                </p>
              </Card>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
