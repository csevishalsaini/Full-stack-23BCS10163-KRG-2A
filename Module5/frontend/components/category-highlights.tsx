"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: "Fashion",
    image: "/colorful-fashion-clothing.jpg",
    gradient: "from-[#3b707d]/40 via-[#adc2d3]/20 to-[#242e2d]/85",
    glow: "shadow-[0_0_25px_rgba(173,194,211,0.3)]",
  },
  {
    id: 2,
    name: "Electronics",
    image: "/modern-electronics.png",
    gradient: "from-[#3b707d]/45 via-[#adc2d3]/25 to-[#242e2d]/85",
    glow: "shadow-[0_0_25px_rgba(59,112,125,0.35)]",
  },
  {
    id: 3,
    name: "Home Decor",
    image: "/modern-home-decor.png",
    gradient: "from-[#adc2d3]/35 via-[#3b707d]/25 to-[#242e2d]/85",
    glow: "shadow-[0_0_25px_rgba(173,194,211,0.3)]",
  },
];

export default function CategoryHighlights() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#242e2d] via-[#3b707d]/15 to-[#242e2d] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-[#3b707d]/25 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#adc2d3]/25 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#f5f9ff] mb-4 tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            Shop by{" "}
            <span className="bg-gradient-to-r from-[#adc2d3] to-[#e3ecf3] bg-clip-text text-transparent">
              Category
            </span>
          </h2>
          <p className="text-[#f5f9ff]/80 text-lg max-w-xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            Find your perfect fit in every category — quality and style you can trust.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.name.toLowerCase()}`}
              className="group"
            >
              <Card
                className={`overflow-hidden bg-gradient-to-br ${category.gradient} border border-[#adc2d3]/25 rounded-2xl backdrop-blur-md transition-all duration-500 hover:scale-[1.04] hover:border-[#adc2d3]/60 ${category.glow}`}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242e2d]/60 via-[#242e2d]/25 to-transparent transition-all duration-500 group-hover:from-[#3b707d]/40 group-hover:via-transparent"></div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-[#f5f9ff] tracking-wide drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)] group-hover:text-[#cde0ee] transition-all duration-300">
                    {category.name}
                  </h3>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
