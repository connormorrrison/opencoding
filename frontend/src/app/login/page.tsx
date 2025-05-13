"use client";

import React, { useState } from "react";
import { Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="w-full max-w-md p-8 backdrop-blur-sm bg-white/10 rounded-2xl shadow-xl border border-white/20 transform transition duration-500 hover:shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-blue-200">Sign in to continue to your account</p>
        </div>
        
        <form className="space-y-6">
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-3 bg-gray-800/70 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>
          
          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="password" className="block text-sm font-medium text-blue-200">
                Password
              </label>
              <a href="#" className="text-xs text-blue-300 hover:text-blue-200 transition-colors">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full pl-10 pr-12 py-3 bg-gray-800/70 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>
          
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-600 text-blue-500 focus:ring-2 focus:ring-blue-500 bg-gray-700"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-blue-200">
              Remember me
            </label>
          </div>
          
          <button
            type="submit"
            className="w-full flex items-center justify-center py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span>Sign In</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </form>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-center text-sm text-blue-200">
            Don't have an account?{" "}
            <a href="/signup" className="font-medium text-blue-400 hover:text-blue-300 transition-colors">
              Create account
            </a>
          </p>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 bg-opacity-50 text-gray-400">Or continue with</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-3">
              <button className="flex justify-center items-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-800 hover:bg-gray-700 transition-colors">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.0001 0C5.3829 0 0 5.38267 0 12.0001C0 17.3026 3.43808 21.7986 8.20651 23.3839C8.8069 23.4971 9.01711 23.126 9.01711 22.8093C9.01711 22.5237 9.00659 21.7595 9.00139 20.7647C5.66816 21.4969 4.96755 19.2813 4.96755 19.2813C4.42227 17.8718 3.6357 17.5023 3.6357 17.5023C2.5452 16.7397 3.71706 16.755 3.71706 16.755C4.92156 16.8378 5.5557 18.0106 5.5557 18.0106C6.62565 19.8538 8.3644 19.3373 9.04002 19.0314C9.14872 18.2603 9.46693 17.7447 9.81001 17.4469C7.14628 17.1455 4.34572 16.1023 4.34572 11.4679C4.34572 10.1446 4.8112 9.06224 5.57935 8.211C5.45499 7.91149 5.04406 6.67313 5.69669 5.01097C5.69669 5.01097 6.70368 4.68785 8.98661 6.2519C9.95384 5.9883 10.98 5.85405 12.0001 5.84987C13.02 5.85405 14.0472 5.9883 15.0156 6.2519C17.2963 4.68785 18.3014 5.01097 18.3014 5.01097C18.956 6.67523 18.5453 7.91366 18.4209 8.211C19.1908 9.06224 19.6525 10.1446 19.6525 11.4679C19.6525 16.1129 16.8468 17.1421 14.1747 17.4364C14.6063 17.8067 14.9903 18.5365 14.9903 19.6596C14.9903 21.266 14.9753 22.4123 14.9753 22.8093C14.9753 23.1289 15.1824 23.5023 15.7912 23.3818C20.5657 21.7948 24 17.3005 24 12.0001C24 5.38267 18.6171 0 12.0001 0Z" />
                </svg>
              </button>
              <button className="flex justify-center items-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-800 hover:bg-gray-700 transition-colors">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
                </svg>
              </button>
              <button className="flex justify-center items-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-800 hover:bg-gray-700 transition-colors">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.8055 10.0415H12V14.0415H17.6515C16.827 16.3275 14.6115 17.955 12 17.955C8.8385 17.955 6.2655 15.381 6.2655 12.2195C6.2655 9.05798 8.8385 6.48398 12 6.48398C13.5255 6.48398 14.9395 7.04098 16.0305 7.96748L19.071 4.92698C17.2905 3.32548 14.7525 2.28448 12 2.28448C6.4785 2.28448 2 6.76398 2 12.2855C2 17.807 6.4785 22.2865 12 22.2865C17.004 22.2865 21.4835 18.673 22.2 13.712C22.297 12.957 22.3315 12.1795 22.3315 11.402C22.3315 10.941 22.2555 10.4485 22.161 9.97948L21.8055 10.0415Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}