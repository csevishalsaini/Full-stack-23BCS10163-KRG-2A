"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";

const suggestedProductsData = [
  {
    id: 2,
    name: "Elegant Summer Dress",
    price: 79.99,
    originalPrice: 129.99,
    rating: 4.6,
    reviews: 156,
    image: "/elegant-summer-dress-fashion.jpg",
  },
  {
    id: 3,
    name: "Modern Desk Lamp",
    price: 49.99,
    originalPrice: 79.99,
    rating: 4.7,
    reviews: 89,
    image: "/modern-minimalist-desk-lamp.jpg",
  },
  {
    id: 4,
    name: "Comfortable Running Shoes",
    price: 99.99,
    originalPrice: 149.99,
    rating: 4.9,
    reviews: 512,
    image: "/comfortable-running-shoes-athletic.jpg",
  },
  {
    id: 5,
    name: "Wireless Charging Pad",
    price: 34.99,
    originalPrice: 59.99,
    rating: 4.5,
    reviews: 203,
    image: "/premium-wireless-headphones.png",
  },
];

interface SuggestedProductsProps {
  currentProductId: number;
}

export default function SuggestedProducts({ currentProductId }: SuggestedProductsProps) {
  const suggested = suggestedProductsData.filter((p) => p.id !== currentProductId);

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-[#232F3E] mb-6">
        You May Also Like
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {suggested.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <Card className="border border-gray-200 bg-white hover:shadow-md transition-all duration-300 cursor-pointer rounded-md flex flex-col h-full">
              {/* Product Image */}
              <div className="relative h-52 flex items-center justify-center bg-white border-b border-gray-100">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-medium text-sm text-[#232F3E] mb-2 line-clamp-2 hover:text-[#FF9900] transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-[#FF9900] text-[#FF9900]"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#B12704] font-semibold">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-xs text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <Button
                  className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-black font-medium rounded-full text-sm py-2 flex items-center justify-center gap-2 mt-auto"
                  onClick={(e) => e.preventDefault()}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
