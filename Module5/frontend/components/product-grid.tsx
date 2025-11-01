"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cart-context";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discount: number;
  quantity: number;
  imageUrl: string;
  category: string;
  mainCategory: string;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const router = useRouter();
  const { addItem } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products?.map((product) => {
        const discountedPrice = product.price - product.discount;
        const discountPercent = Math.round(
          (product.discount / product.price) * 100
        );

        return (
          <Card
            key={product.id}
            className="border border-gray-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full rounded-2xl"
          >
            {/* 🖼 Product Image */}
            <div
              className="relative h-64 bg-white flex items-center justify-center overflow-hidden rounded-t-2xl"
              onClick={() => router.push(`/product/${product.id}`)}
            >
              <img
                src={product.imageUrl || "/placeholder.svg"}
                alt={product.title}
                className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
              />

              {discountPercent > 0 && (
                <div className="absolute top-3 right-3 bg-[#ff9100] text-white px-2 py-1 rounded-md text-xs font-semibold shadow-sm">
                  -{discountPercent}%
                </div>
              )}
            </div>

            {/* 🧾 Product Info */}
            <div className="p-5 flex flex-col flex-grow">
              <h3
                onClick={() => router.push(`/product/${product.id}`)}
                className="font-semibold text-[15px] text-[#1f2c2c] hover:text-[#ff9100] mb-2 line-clamp-2 leading-snug"
              >
                {product.title}
              </h3>

              {/* 💰 Price */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg font-bold text-[#ff7a00]">
                  ₹{discountedPrice.toLocaleString()}
                </span>
                {product.discount > 0 && (
                  <span className="text-sm text-gray-500 line-through">
                    ₹{product.price.toLocaleString()}
                  </span>
                )}
              </div>

              {/* 🚚 Delivery Info */}
              <p className="text-xs text-gray-500 mb-3">
                Eligible for <span className="font-medium text-[#1f2c2c]">FREE Delivery</span>
              </p>

              {/* 🛒 Buttons */}
              <div className="flex flex-col gap-3 mt-auto">
                <Button
                  onClick={() => addItem(product.id, 1)}
                  className="bg-gradient-to-r from-[#ffb400] to-[#ff9100] hover:brightness-105 text-black font-semibold text-sm rounded-full py-2 flex items-center justify-center gap-2 shadow-md"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>

                <Button
                  onClick={() => router.push(`/product/${product.id}`)}
                  className="bg-gradient-to-r from-[#ff9100] to-[#ff7300] hover:brightness-105 text-white font-semibold text-sm rounded-full py-2 flex items-center justify-center shadow-md"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
