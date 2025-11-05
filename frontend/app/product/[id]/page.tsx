"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCarousel from "@/components/product-carousel"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react"
import { axiosInstance } from "@/configs/AxiosInstance"
import { useCart } from "@/context/cart-context"
import { useParams } from "next/navigation"

interface Product {
  id: number
  title: string
  description: string
  price: number
  discount: number
  quantity: number
  imageUrl: string
  category: string
  mainCategory: string
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)
  const { addItem } = useCart()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axiosInstance.get(`/product/${id}`)
        setProduct(res?.data?.data)
      } catch {
        setError("Failed to load product details.")
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#1d2525] text-[#adc2d3]">
        Loading product details...
      </main>
    )
  }

  if (error || !product) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#1d2525] text-red-400">
        {error || "Product not found."}
      </main>
    )
  }

  const discountedPrice = product.price - product.discount
  const discountPercent = Math.round((product.discount / product.price) * 100)

  const handleAddToCart = () => {
    addItem(product?.id, quantity)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <main className="min-h-screen bg-[#1d2525] text-[#f3f8fa]">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* 🖼️ Product Image Section */}
          <div className="rounded-2xl border border-[#3b707d]/40 bg-[#2c3b3b] p-5 shadow-[0_0_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_40px_rgba(173,194,211,0.25)] transition-all">
            <ProductCarousel images={[product.imageUrl]} />
          </div>

          {/* 📄 Product Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 text-[#f3f8fa] leading-tight">
              {product.title}
            </h1>
            <p className="text-[#b8c7ce] text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* 💰 Price */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-bold text-[#adc2d3]">
                ₹{discountedPrice.toFixed(2)}
              </span>
              {product.discount > 0 && (
                <>
                  <span className="text-2xl text-[#b8c7ce] line-through">
                    ₹{product.price.toFixed(2)}
                  </span>
                  <span className="bg-[#3b707d]/30 text-[#adc2d3] px-3 py-1 rounded-full font-semibold">
                    {discountPercent}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-[#adc2d3] mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg bg-[#3b707d]/40 hover:bg-[#3b707d]/60 text-[#f3f8fa] font-bold"
                >
                  −
                </button>
                <span className="text-lg font-semibold w-8 text-center text-[#f3f8fa]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg bg-[#3b707d]/40 hover:bg-[#3b707d]/60 text-[#f3f8fa] font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3 mb-10">
              <Button
                onClick={handleAddToCart}
                className={`w-full py-3 font-semibold flex items-center justify-center gap-2 rounded-full transition-all ${
                  addedToCart
                    ? "bg-[#adc2d3] text-[#1d2525] hover:bg-[#bcd3df]"
                    : "bg-gradient-to-r from-[#3b707d] to-[#adc2d3] text-[#1d2525] hover:opacity-90"
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                {addedToCart ? "Added to Cart!" : "Add to Cart"}
              </Button>

              <Button className="w-full bg-[#adc2d3] hover:bg-[#b9d0dd] text-[#1d2525] rounded-full py-3 font-semibold">
                Buy Now
              </Button>

              <div className="flex gap-3">
                <Button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  variant="outline"
                  className={`flex-1 rounded-full border border-[#adc2d3]/40 hover:bg-[#3b707d]/40 text-[#adc2d3] flex items-center justify-center gap-2 ${
                    isWishlisted ? "bg-[#adc2d3]/10" : ""
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isWishlisted ? "fill-[#adc2d3] text-[#adc2d3]" : ""
                    }`}
                  />
                  Wishlist
                </Button>

                <Button
                  variant="outline"
                  className="flex-1 rounded-full border border-[#adc2d3]/40 hover:bg-[#3b707d]/40 text-[#adc2d3] flex items-center justify-center gap-2"
                >
                  <Share2 className="w-5 h-5" />
                  Share
                </Button>
              </div>
            </div>

            {/* Stock Info */}
            {product.quantity > 0 ? (
              <div className="bg-[#3b707d]/20 border border-[#adc2d3]/30 rounded-lg p-4 mb-8">
                <p className="text-[#adc2d3] font-semibold">
                  ✓ In Stock — Ships within 2–3 business days
                </p>
              </div>
            ) : (
              <div className="bg-red-900/20 border border-red-400/40 rounded-lg p-4 mb-8">
                <p className="text-red-400 font-semibold">Out of Stock</p>
              </div>
            )}

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4">
              {[{ icon: Truck, text: "Free Shipping" }, { icon: Shield, text: "Secure Payment" }, { icon: RotateCcw, text: "Easy Returns" }].map((item, i) => {
                const Icon = item.icon
                return (
                  <Card
                    key={i}
                    className="bg-[#2c3b3b] border border-[#adc2d3]/20 rounded-xl text-center py-4 hover:bg-[#3b707d]/25 transition-colors shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                  >
                    <Icon className="w-6 h-6 text-[#adc2d3] mx-auto mb-2" />
                    <p className="text-sm font-semibold text-[#f3f8fa]">{item.text}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
