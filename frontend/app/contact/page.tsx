"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[SwiftCart] Contact form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactInfo = [
    { icon: Mail,   title: "Email",          value: "support@swiftcart.com", link: "mailto:support@swiftcart.com" },
    { icon: Phone,  title: "Phone",          value: "+91 98765 43210",       link: "tel:+919876543210" },
    { icon: MapPin, title: "Address",        value: "123 Market Lane, TechCity, IN 560001", link: null },
    { icon: Clock,  title: "Business Hours", value: "Mon–Fri: 9AM–6PM IST",  link: null },
  ]

  return (
    <main className="min-h-screen bg-[#242e2d] text-[#e3ecf3]">
      <Header />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#3b707d]/15 via-transparent to-[#adc2d3]/15 border-b border-[#adc2d3]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#f6f9ff] drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-[#f6f9ff]/85 max-w-2xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            Have questions? Our friendly team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => {
              const Icon = info.icon
              return (
                <div
                  key={i}
                  className="rounded-2xl p-6 border border-[#adc2d3]/30 bg-[#3b707d]/10 hover:bg-[#3b707d]/15 transition-colors text-center"
                >
                  <div className="bg-[#3b707d]/30 rounded-lg w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-6 h-6 text-[#adc2d3]" />
                  </div>
                  <h3 className="font-semibold text-[#f6f9ff] mb-2 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-[#adc2d3] hover:text-[#cde0ee] transition-colors text-sm break-all"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-[#f6f9ff]/75 text-sm">{info.value}</p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form + FAQ */}
      <section className="py-16 md:py-20 bg-[#3b707d]/10 border-y border-[#adc2d3]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-bold text-[#f6f9ff] mb-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
              Send us a Message
            </h2>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl border border-emerald-300/40 bg-emerald-400/10">
                <p className="text-emerald-200 font-medium">
                  Thank you for your message! We’ll get back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#f6f9ff]">Full Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-[#242e2d] border border-[#adc2d3]/40 text-[#e3ecf3] placeholder:text-[#adc2d3]/70 focus:ring-2 focus:ring-[#adc2d3] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#f6f9ff]">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-[#242e2d] border border-[#adc2d3]/40 text-[#e3ecf3] placeholder:text-[#adc2d3]/70 focus:ring-2 focus:ring-[#adc2d3] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#f6f9ff]">Phone Number</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#242e2d] border border-[#adc2d3]/40 text-[#e3ecf3] placeholder:text-[#adc2d3]/70 focus:ring-2 focus:ring-[#adc2d3] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#f6f9ff]">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-[#adc2d3]/40 bg-[#242e2d] text-[#e3ecf3] focus:outline-none focus:ring-2 focus:ring-[#adc2d3]"
                  >
                    <option value="">Select a subject</option>
                    <option value="product_inquiry">Product Inquiry</option>
                    <option value="order_issue">Order Issue</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[#f6f9ff]">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-[#adc2d3]/40 bg-[#242e2d] text-[#e3ecf3] placeholder:text-[#adc2d3]/70 focus:outline-none focus:ring-2 focus:ring-[#adc2d3] resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-[#3b707d] to-[#adc2d3] hover:opacity-90 text-[#242e2d] font-semibold rounded-full"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-[#f6f9ff] mb-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "How long does shipping take?",
                  a: "Standard shipping typically takes 5–7 business days. Express shipping is available for 2–3 day delivery in most areas.",
                },
                {
                  q: "What is your return policy?",
                  a: "We offer a 30-day return policy on most items. Products must be in original condition with all tags attached.",
                },
                {
                  q: "Is my payment information secure?",
                  a: "Yes, we use industry-standard SSL encryption and comply with PCI DSS standards to protect your payment information.",
                },
                {
                  q: "How can I track my order?",
                  a: "Once your order ships, you'll receive a tracking number via email to monitor your delivery in real-time.",
                },
              ].map((item, idx) => (
                <div key={idx} className="rounded-2xl p-6 border border-[#adc2d3]/30 bg-[#3b707d]/10">
                  <h3 className="font-semibold text-[#f6f9ff] mb-3">{item.q}</h3>
                  <p className="text-[#f6f9ff]/80 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#3b707d] to-[#adc2d3] border-t border-[#adc2d3]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#242e2d] mb-6">
            Ready to Shop?
          </h2>
          <p className="text-lg text-[#242e2d]/85 mb-8">
            Browse our collection and find exactly what you're looking for.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#242e2d] hover:bg-[#2a3534] text-[#e3ecf3] rounded-full px-8"
          >
            <a href="/products">Start Shopping</a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
