"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingCart, Search, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/cart-context";
import { useUser } from "@/context/user-context";

export default function Navbar() {
  const { cartCount } = useCart();
  const { user, loading } = useUser();
  const router = useRouter();

  if (loading)
    return (
      <div className="text-center py-6 text-[#adc2d3] font-medium">
        Loading profile...
      </div>
    );

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-[#242e2d] via-[#2d3e3e] to-[#242e2d] border-b border-[#adc2d3]/25 shadow-[0_4px_25px_rgba(0,0,0,0.4)] transition-all duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 py-4">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#3b707d] to-[#adc2d3] flex items-center justify-center shadow-[0_0_10px_rgba(173,194,211,0.5)]">
            <span className="text-[#242e2d] font-bold text-lg tracking-tight group-hover:scale-110 transition-transform">
              S
            </span>
          </div>
          <span className="hidden md:block text-xl font-semibold tracking-tight text-[#e3ecf3] group-hover:text-[#adc2d3] transition-colors">
            SwiftCart
          </span>
        </Link>

        {/* Search */}
        <div className="hidden md:flex flex-grow max-w-md mx-8 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#e3ecf3]" />
          <Input
            type="search"
            placeholder="Search products, deals..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-[#3b707d]/25 border border-[#adc2d3]/40 text-[#e3ecf3] placeholder:text-[#adc2d3]/80 focus:ring-2 focus:ring-[#adc2d3] focus:border-transparent"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-[15px]">
          <Link
            href="/products"
            className="text-[#e3ecf3] hover:text-[#adc2d3] transition-all duration-200"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="text-[#e3ecf3] hover:text-[#adc2d3] transition-all duration-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-[#e3ecf3] hover:text-[#adc2d3] transition-all duration-200"
          >
            Contact
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4 sm:gap-6">

          {/* User */}
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="text-[#e3ecf3] hover:text-[#adc2d3] hover:bg-[#3b707d]/40 rounded-full transition-all"
          >
            <Link href="/account">
              <UserRound className="w-5 h-5" />
            </Link>
          </Button>

          {/* Cart */}
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-[#e3ecf3] hover:text-[#adc2d3] hover:bg-[#3b707d]/40 rounded-full transition-all"
            >
              <Link href="/cart">
                <ShoppingCart className="w-5 h-5" />
              </Link>
            </Button>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#adc2d3] text-[#242e2d] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-[0_0_10px_rgba(173,194,211,0.8)]">
                {cartCount}
              </span>
            )}
          </div>

          {/* Auth Buttons */}
          {user ? (
            <span className="hidden sm:block font-medium text-[#e3ecf3] tracking-tight">
              {user.name}
            </span>
          ) : (
            <div className="hidden sm:flex gap-3">
              <Button
                onClick={() => router.push("/login")}
                className="rounded-full px-6 bg-[#3b707d] text-[#e3ecf3] font-semibold hover:bg-[#adc2d3]/40 transition-all"
              >
                Log In
              </Button>
              <Button
                onClick={() => router.push("/signup")}
                className="rounded-full px-6 bg-[#e3ecf3] text-[#242e2d] font-semibold hover:bg-[#adc2d3] transition-all"
              >
                Sign Up
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
