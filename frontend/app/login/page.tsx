"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Eye, EyeOff, Mail, Lock, Facebook, Chrome } from "lucide-react"
import { axiosInstance } from "@/configs/AxiosInstance"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { handleAxiosError } from "@/utils/handleAxiosError"
import { useUser } from "@/context/user-context"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const { refreshUser } = useUser()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await axiosInstance.post("/auth/login", { email, password })
      toast.success("Login successful.")
      localStorage.setItem("token", res?.data?.data)
      await refreshUser()
      router.push("/")
    } catch (error) {
      handleAxiosError(error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#242e2d] via-[#3b707d]/20 to-[#adc2d3]/10 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-[#3b707d] to-[#adc2d3] rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(173,194,211,0.4)]">
              <span className="text-[#242e2d] font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-2xl text-[#e3ecf3]">SwiftCart</span>
          </Link>
          <h1 className="text-3xl font-bold text-[#e3ecf3] mb-2">
            Welcome Back
          </h1>
          <p className="text-[#adc2d3]/80">
            Sign in to your account to continue shopping
          </p>
        </div>

        {/* Login Card */}
        <Card className="bg-[#242e2d]/80 border border-[#adc2d3]/20 shadow-[0_0_25px_rgba(173,194,211,0.2)] backdrop-blur-md p-8 mb-6 rounded-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-[#adc2d3] mb-2">
                Email Address
              </label>
              <div className="relative">
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-lg bg-[#3b707d]/15 border border-[#adc2d3]/30 text-[#e3ecf3] placeholder:text-[#adc2d3]/70 focus:ring-2 focus:ring-[#adc2d3]"
                  required
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#adc2d3]/70" />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-[#adc2d3] mb-2">
                Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 py-2 rounded-lg bg-[#3b707d]/15 border border-[#adc2d3]/30 text-[#e3ecf3] placeholder:text-[#adc2d3]/70 focus:ring-2 focus:ring-[#adc2d3]"
                  required
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#adc2d3]/70" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#adc2d3]/70 hover:text-[#adc2d3]"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-[#adc2d3]/30 bg-[#3b707d]/10 accent-[#adc2d3]"
                />
                <span className="text-[#adc2d3]/80">Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-[#adc2d3] hover:text-[#e3ecf3] font-medium transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#3b707d] to-[#adc2d3] hover:opacity-90 text-[#242e2d] rounded-full py-2 font-semibold shadow-[0_0_15px_rgba(173,194,211,0.4)] transition-all"
            >
              Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#adc2d3]/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#242e2d]/80 text-[#adc2d3]/70">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <Button
              type="button"
              variant="outline"
              className="rounded-full border border-[#adc2d3]/30 bg-[#3b707d]/10 hover:bg-[#3b707d]/20 text-[#adc2d3] transition-all"
            >
              <Chrome className="w-4 h-4 mr-2" />
              Google
            </Button>
            <Button
              type="button"
              variant="outline"
              className="rounded-full border border-[#adc2d3]/30 bg-[#3b707d]/10 hover:bg-[#3b707d]/20 text-[#adc2d3] transition-all"
            >
              <Facebook className="w-4 h-4 mr-2" />
              Facebook
            </Button>
          </div>
        </Card>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-[#adc2d3]/80">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="text-[#adc2d3] hover:text-[#e3ecf3] font-semibold transition-colors"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
