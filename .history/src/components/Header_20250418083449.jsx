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
    <div className="sticky h-7 top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center justify-between h-[20px]">
          <Link className="flex items-center space-x-2">
            <div className="h-[18px] w-[18px] bg-orange-400 rounded-full flex items-center justify-center">
              <span className="text-[12px] text-white font-bold">IPL</span>
            </div>
            <span className="text-black font-bold text-sm">Score tracer</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex space-x-6">
            {link.map((link, index) => (
              <Link
                to={link.path}
                key={index}
                className={`text-[12px] text-black font-medium transition-colors hover:text-orange-600`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* mobile */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isopen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile navLinks */}
        {isopen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {link.map((items, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-sm font-medium transition-color hover:text-orange-600"
                >
                  {items.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
