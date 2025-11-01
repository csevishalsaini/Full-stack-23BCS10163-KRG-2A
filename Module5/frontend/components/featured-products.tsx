"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";
import { axiosInstance } from "@/configs/AxiosInstance";

interface Product {
  id: number;
  title: string;
  price: number;
  discount: number;
  quantity: number;
  imageUrl: string;
  mainCategory: string;
  category: string;
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const res = await axiosInstance.get("/product");
        const data = res?.data?.data || [];
        setProducts(data.slice(0, 4)); // only show 4 products
      } catch (error) {
        console.error("Error fetching featured products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeaturedProducts();
  }, []);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#242e2d] via-[#3b707d]/10 to-[#242e2d] relative overflow-hidden">
      {/* Subtle glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#3b707d]/25 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#adc2d3]/25 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-14 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-[#f6f9ff] mb-3 tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
              Featured{" "}
              <span className="bg-gradient-to-r from-[#adc2d3] to-[#e3ecf3] bg-clip-text text-transparent">
                Products
              </span>
            </h2>
            <p className="text-[#f6f9ff]/80 text-lg drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
              Handpicked items crafted for your lifestyle.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="hidden md:inline-flex rounded-full border border-[#adc2d3]/40 text-[#f6f9ff] hover:bg-[#3b707d]/40 transition-all px-6 shadow-[0_0_8px_rgba(173,194,211,0.2)]"
          >
            <Link href="/products">View All</Link>
          </Button>
        </div>

        {/* Product Grid */}
        {loading ? (
          <p className="text-center text-[#adc2d3]">Loading products...</p>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => {
              const originalPrice = product.price + product.discount;
              const discountPercent = Math.round(
                (product.discount / originalPrice) * 100
              );

              return (
                <Link key={product.id} href={`/product/${product.id}`}>
                  <Card className="overflow-hidden bg-gradient-to-br from-[#3b707d]/20 via-[#242e2d]/90 to-[#242e2d]/95 border border-[#adc2d3]/25 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(173,194,211,0.25)] group">
                    {/* Product Image */}
                    <div className="relative h-72 overflow-hidden rounded-t-2xl">
                      <img
                        src={product.imageUrl || "/placeholder.svg"}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {discountPercent > 0 && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-[#3b707d] to-[#adc2d3] text-[#242e2d] px-3 py-1 rounded-full text-sm font-semibold shadow-[0_0_10px_rgba(173,194,211,0.4)]">
                          {discountPercent}% OFF
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#242e2d]/70 via-[#242e2d]/20 to-transparent group-hover:from-[#3b707d]/40 transition-all"></div>
                    </div>

                    {/* Product Info */}
                    <div className="p-5">
                      <h3 className="font-semibold text-[#f6f9ff] text-lg mb-3 line-clamp-2 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] group-hover:text-[#adc2d3] transition-colors">
                        {product.title}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < 4
                                  ? "fill-[#adc2d3] text-[#adc2d3]"
                                  : "text-[#3b707d]"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-[#f6f9ff]/70 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">(100+)</span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-lg font-bold text-[#adc2d3]">
                          ₹{product.price.toFixed(2)}
                        </span>
                        {product.discount > 0 && (
                          <span className="text-sm text-[#f6f9ff]/60 line-through">
                            ₹{originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>

                      {/* Add to Cart Button */}
                      <Button className="w-full bg-gradient-to-r from-[#3b707d] to-[#adc2d3] hover:opacity-90 text-[#242e2d] font-semibold rounded-full flex items-center justify-center gap-2 transition-all shadow-[0_0_12px_rgba(173,194,211,0.35)]">
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </Button>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-[#adc2d3]">
            No featured products found.
          </p>
        )}

        {/* Mobile View All Button */}
        <div className="mt-10 md:hidden">
          <Button
            asChild
            className="w-full bg-gradient-to-r from-[#3b707d] to-[#adc2d3] text-[#242e2d] font-semibold rounded-full py-6 hover:opacity-90 transition-all shadow-[0_0_12px_rgba(173,194,211,0.3)]"
          >
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
