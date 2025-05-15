"use client";

import React from "react";

export default function Profile() {
  return (
    <div className="absolute top-2 right-2 rounded-lg p-2">
      <div className="flex items-center space-x-2">
        <div className="flex flex-col items-end">
          <span className="text-base text-indigo-700">
            John Smith
          </span>
          <span className="text-sm text-gray-300">
            johnsmith@email.com
          </span>
        </div>
        <img
          src="https://via.placeholder.com/48"
          alt="Profile"
          className="
            h-12 w-12
            rounded-full
            border border-gray-300
            transition-shadow duration-200
            hover:shadow-[0_0_200px_30px_rgba(64,46,207,10)]
            cursor-pointer 
          "
        />
      </div>
    </div>
  );
}
