"use client"

import type React from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CreditCard, Smartphone, Truck } from "lucide-react"

interface PaymentFormProps {
  formData: any
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  handlePaymentMethodChange: (method: string) => void
}

export default function PaymentForm({
  formData,
  handleInputChange,
  handlePaymentMethodChange,
}: PaymentFormProps) {
  return (
    <Card className="bg-[#2c3b3b] border border-[#3b707d]/40 p-8 rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.4)] text-[#f3f8fa]">
      <h2 className="text-2xl font-bold text-[#f3f8fa] mb-6">
        Payment Method
      </h2>

      <div className="space-y-6">
        {/* Payment Method Selection */}
        <div className="space-y-3">
          {[
            { id: "card", label: "Credit/Debit Card", icon: CreditCard },
            { id: "upi", label: "UPI Payment", icon: Smartphone },
            { id: "cod", label: "Cash on Delivery", icon: Truck },
          ].map(({ id, label, icon: Icon }) => (
            <label
              key={id}
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.paymentMethod === id
                  ? "border-[#adc2d3] bg-[#3b707d]/25"
                  : "border-[#3b707d]/40 hover:border-[#adc2d3]/40 hover:bg-[#3b707d]/10"
              }`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value={id}
                checked={formData.paymentMethod === id}
                onChange={(e) => handlePaymentMethodChange(e.target.value)}
                className="w-4 h-4 accent-[#adc2d3]"
              />
              <Icon className="w-5 h-5 ml-3 text-[#adc2d3]" />
              <span className="ml-3 font-semibold text-[#f3f8fa]">
                {label}
              </span>
            </label>
          ))}
        </div>

        {/* Card Details */}
        {formData.paymentMethod === "card" && (
          <div className="space-y-4 pt-6 border-t border-[#3b707d]/40">
            <div>
              <label className="block text-sm font-medium text-[#adc2d3] mb-2">
                Cardholder Name
              </label>
              <Input
                type="text"
                name="cardName"
                value={formData.cardName}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-lg bg-[#3b707d]/20 border border-[#3b707d]/40 focus:ring-2 focus:ring-[#3b707d] text-[#f3f8fa] placeholder-[#b8c7ce] outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#adc2d3] mb-2">
                Card Number
              </label>
              <Input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                className="w-full px-4 py-2 rounded-lg bg-[#3b707d]/20 border border-[#3b707d]/40 focus:ring-2 focus:ring-[#3b707d] text-[#f3f8fa] placeholder-[#b8c7ce] outline-none transition-all"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#adc2d3] mb-2">
                  Expiry Date
                </label>
                <Input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  maxLength={5}
                  className="w-full px-4 py-2 rounded-lg bg-[#3b707d]/20 border border-[#3b707d]/40 focus:ring-2 focus:ring-[#3b707d] text-[#f3f8fa] placeholder-[#b8c7ce] outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#adc2d3] mb-2">
                  CVV
                </label>
                <Input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  placeholder="123"
                  maxLength={3}
                  className="w-full px-4 py-2 rounded-lg bg-[#3b707d]/20 border border-[#3b707d]/40 focus:ring-2 focus:ring-[#3b707d] text-[#f3f8fa] placeholder-[#b8c7ce] outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="bg-[#3b707d]/15 border border-[#adc2d3]/30 rounded-lg p-4 mt-4">
              <p className="text-[#adc2d3] text-sm font-semibold">
                ✓ Your payment information is secure and encrypted
              </p>
            </div>
          </div>
        )}

        {/* UPI Section */}
        {formData.paymentMethod === "upi" && (
          <div className="bg-[#3b707d]/15 border border-[#adc2d3]/30 rounded-lg p-6 text-center">
            <p className="text-[#adc2d3] font-semibold mb-2">UPI Payment</p>
            <p className="text-[#b8c7ce] text-sm">
              You will be redirected to your UPI app to complete the payment.
            </p>
          </div>
        )}

        {/* COD Section */}
        {formData.paymentMethod === "cod" && (
          <div className="bg-[#3b707d]/15 border border-[#adc2d3]/30 rounded-lg p-6">
            <p className="text-[#adc2d3] font-semibold mb-2">
              Cash on Delivery
            </p>
            <p className="text-[#b8c7ce] text-sm">
              Pay when your order arrives. No additional charges.
            </p>
          </div>
        )}
      </div>
    </Card>
  )
}
