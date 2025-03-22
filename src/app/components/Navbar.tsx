"use client";

import Link from "next/link";
import { useTheme } from "../providers";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState({
    name: "joseph santos",
    image: "",
  });

  return (
    <nav className="bg-indigo-950 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <div className="w-10 h-10 bg-indigo-500 rounded mr-2"></div>
                <span className="text-white font-bold text-xl">Dream Capture</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className="text-white hover:text-indigo-200 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/explore"
                className="text-white hover:text-indigo-200 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Explore
              </Link>
              <Link
                href="/dream/new"
                className="text-white hover:text-indigo-200 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                New Dream
              </Link>
              <Link
                href="/community"
                className="text-white hover:text-indigo-200 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Community
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-800 focus:ring-white"
            >
              {theme === "dark" ? (
                <span className="sr-only">Light mode</span>
              ) : (
                <span className="sr-only">Dark mode</span>
              )}
              <div className="w-6 h-6 flex items-center justify-center">
                {theme === "dark" ? "🌙" : "☀️"}
              </div>
            </button>

            {isLoggedIn ? (
              <div className="ml-3 relative flex items-center space-x-4">
                <Link href="/profile" className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-700 flex items-center justify-center text-white font-medium text-sm">
                    J
                  </div>
                  <span className="ml-2 text-white text-sm">{user.name}</span>
                </Link>
                <Link
                  href="/api/auth/signout"
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-700"
                >
                  Sign out
                </Link>
              </div>
            ) : (
              <div className="ml-3 relative flex items-center space-x-4">
                <Link
                  href="/login"
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50"
                >
                  Sign in
                </Link>
                <Link
                  href="/register"
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
