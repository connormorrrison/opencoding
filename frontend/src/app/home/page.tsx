"use client";

import React from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Profile from "@/components/profile";
import PrimaryBackground from "@/components/primary-background";

export default function HomePage() {
  return (
    <PrimaryBackground>
      <Header />
      <Profile />
      <div className="flex">
        <Sidebar />
        {/* Main content placeholder */}
        <div className="flex-1 p-6 text-white">
          {/* Your page content goes here */}
        </div>
      </div>
    </PrimaryBackground>
  );
}
