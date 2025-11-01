"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, Target, Heart, Award } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To offer our customers the best value, widest selection, and most seamless shopping experience possible.",
    },
    {
      icon: Users,
      title: "Our People",
      description:
        "A passionate team dedicated to innovation, integrity, and world-class customer satisfaction.",
    },
    {
      icon: Heart,
      title: "Customer Obsession",
      description:
        "Our every move begins with you — building trust through service, reliability, and quality.",
    },
    {
      icon: Award,
      title: "Quality & Innovation",
      description:
        "We continuously evolve our products, design, and technology to deliver excellence.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image:
        "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
    },
    {
      name: "Michael Chen",
      role: "Chief Product Officer",
      image:
        "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Operations",
      image:
        "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
    },
    {
      name: "David Kim",
      role: "VP of Customer Success",
      image:
        "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
    },
  ];

  const stats = [
    { label: "Active Customers", value: "2.5M+" },
    { label: "Products Available", value: "50K+" },
    { label: "Orders Processed Daily", value: "100K+" },
    { label: "Countries Served", value: "50+" },
  ];

  return (
    <main className="min-h-screen bg-[#f6f9ff] text-[#242e2d]">
      <Header />

      {/* Hero Section */}
      <section className="border-b border-[#adc2d3]/30 bg-gradient-to-r from-[#3b707d]/10 to-[#adc2d3]/10 py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#242e2d] drop-shadow-[0_2px_6px_rgba(0,0,0,0.2)]">
              About <span className="text-[#3b707d]">SwiftCart</span>
            </h1>
            <p className="text-lg text-[#3b707d]/90 mb-8 leading-relaxed">
              We’re redefining online shopping — combining speed, trust, and
              affordability. SwiftCart brings together quality and convenience,
              serving millions with a passion for customer satisfaction.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#3b707d] hover:bg-[#2e5e6a] text-[#e3ecf3] font-semibold rounded-full px-6"
            >
              <Link href="/products">Start Shopping</Link>
            </Button>
          </div>
          <div className="flex-1">
            <Image
              src="/colorful-fashion-products-display.jpg"
              alt="About SwiftCart"
              width={600}
              height={400}
              className="rounded-xl shadow-[0_6px_30px_rgba(59,112,125,0.3)]"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#e3ecf3] border-b border-[#adc2d3]/40">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-[#3b707d] mb-1">
                {stat.value}
              </div>
              <p className="text-[#242e2d]/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#f6f9ff]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3b707d] mb-12 text-center drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div
                  key={i}
                  className="bg-[#e3ecf3] border border-[#adc2d3]/40 rounded-lg p-6 text-center hover:shadow-[0_0_20px_rgba(173,194,211,0.4)] transition-all"
                >
                  <div className="flex items-center justify-center w-14 h-14 mx-auto mb-5 bg-[#3b707d]/20 rounded-full">
                    <Icon className="w-7 h-7 text-[#3b707d]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-[#242e2d]">
                    {value.title}
                  </h3>
                  <p className="text-[#3b707d]/80 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gradient-to-r from-[#adc2d3]/15 to-[#e3ecf3]/30 border-t border-[#adc2d3]/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3b707d] mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="text-center bg-[#f6f9ff] border border-[#adc2d3]/40 rounded-lg p-4 hover:shadow-[0_0_25px_rgba(173,194,211,0.4)] transition-all"
              >
                <div className="relative mb-4 rounded-md overflow-hidden bg-[#adc2d3]/20 h-64 w-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-[#3b707d] text-lg">
                  {member.name}
                </h3>
                <p className="text-[#242e2d]/70 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-[#e3ecf3] border-t border-[#adc2d3]/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3b707d] mb-8 text-center">
            Our Story
          </h2>
          <div className="space-y-5 text-[#242e2d]/80 text-base leading-relaxed">
            <p>
              Founded in 2020, SwiftCart was built to make quality products
              accessible and affordable for everyone. From humble beginnings, we
              have become a trusted marketplace serving millions globally.
            </p>
            <p>
              We focus on reliability, efficiency, and customer-first service.
              Every product is handpicked to deliver value and trust.
            </p>
            <p>
              Our journey continues as we innovate to simplify shopping and
              empower customers with smarter solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#3b707d] text-[#f6f9ff] text-center border-t border-[#adc2d3]/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            Shop Smart. Live Better.
          </h2>
          <p className="text-[#e3ecf3]/80 mb-8">
            Join millions of happy customers who trust SwiftCart for quality,
            reliability, and convenience every day.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#e3ecf3] hover:bg-[#adc2d3] text-[#242e2d] font-semibold rounded-full px-8 shadow-[0_0_15px_rgba(227,236,243,0.4)]"
          >
            <Link href="/products">Start Shopping</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
