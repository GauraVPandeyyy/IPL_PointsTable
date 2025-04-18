import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function Header() {
  const [isopen, setIsOpen] = useState(false);
  const link = [
    { name: "Live score", path: "/live-score" },
    { name: "Schedule", path: "/schedule" },
    { name: "Teams", path: "/teams" },
    { name: "Stats", path: "/stats" },
    { name: "News", path: "/news" },
  ];
  const toggleMenu = () => {
    setIsOpen(!isopen);
  };
  return (
    <div className="sticky top-0 z-50 bg-white shadow-lg py-3">
      <div className="container mx-auto px-4">
        {/* Top Nav */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-7 w-7 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-md animate-pulse">
              <span className="text-xs text-white font-extrabold tracking-wide">IPL</span>
            </div>
            <span className="text-lg font-bold text-gray-800 tracking-tight">
              Score Tracer
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-6">
            {link.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isopen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isopen && (
          <div className="md:hidden mt-3 bg-gray-50 rounded-lg p-4 shadow-inner">
            <div className="flex flex-col gap-3">
              {link.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-sm font-semibold text-gray-700 hover:text-orange-500"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>

  );
}
