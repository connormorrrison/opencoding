"use client";

import React from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Profile from "@/components/Profile";

export default function HomePage() {
  return (
    <>
      <Header />
      <Profile />
      <div className="flex">
        <Sidebar />
        {/* Main content placeholder */}
        <div className="flex-1 p-6 text-white">
          {/* Your page content goes here */}
        </div>
      </div>
    </>
  );
}
