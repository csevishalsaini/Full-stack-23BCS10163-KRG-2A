"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#3b707d] to-[#adc2d3] text-[#242e2d] border-t border-[#242e2d]/20 backdrop-blur-md">
      {/* Subtle glows */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#e3ecf3]/30 blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#f6f9ff]/40 blur-3xl opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-[#242e2d] rounded-xl flex items-center justify-center shadow-[0_0_12px_rgba(0,0,0,0.2)]">
                <span className="font-bold text-[#e3ecf3] text-lg">S</span>
              </div>
              <span className="font-semibold text-xl text-[#242e2d] tracking-tight">
                SwiftCart
              </span>
            </div>
            <p className="text-[#1f3a40]/90 text-sm leading-relaxed">
              Your one-stop destination for quality, style, and innovation.
              <br /> SwiftCart — shopping made simple and smart.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#242e2d] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Products", "About Us", "Contact", "FAQ"].map((item, i) => (
                <li key={i}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "")}`}
                    className="text-[#1f3a40]/80 hover:text-[#242e2d] font-medium transition-all duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-[#242e2d] mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Shipping Info", link: "/shipping" },
                { name: "Returns", link: "/returns" },
                { name: "Privacy Policy", link: "/privacy" },
                { name: "Terms & Conditions", link: "/terms" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className="text-[#1f3a40]/80 hover:text-[#242e2d] font-medium transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[#242e2d] mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-[#1f3a40]/90 hover:text-[#242e2d] transition-colors">
                <Mail className="w-4 h-4 text-[#242e2d]" />
                <a href="mailto:support@swiftcart.com">support@swiftcart.com</a>
              </li>
              <li className="flex items-center gap-3 text-[#1f3a40]/90 hover:text-[#242e2d] transition-colors">
                <Phone className="w-4 h-4 text-[#242e2d]" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li className="flex items-start gap-3 text-[#1f3a40]/90">
                <MapPin className="w-4 h-4 text-[#242e2d] mt-1" />
                <span>123 Market Lane, TechCity, IN 560001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#242e2d]/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#1f3a40]/80 text-sm">
            © 2025 SwiftCart. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-[#1f3a40]/80 hover:text-[#242e2d] transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
