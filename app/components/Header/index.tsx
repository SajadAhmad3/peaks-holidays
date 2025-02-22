"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import navigationData from "./Nav.json";
import Link from "next/link";
import Menu from "../Header/Menu/index";
import Image from "next/image";

const Header = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactUsClick = () => {
    router.push("/contact");
  };

  return (
    <div className="fixed w-full top-0 left-0 right-0 z-[9999] transition-all duration-300">
      <nav
        className={`relative z-10 mx-auto px-10 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-secondary-50 shadow-md text-black py-4"
            : "bg-white/10 backdrop-blur text-white py-4"
        }`}
      >
        <div className="flex items-center justify-between w-full mx-auto">
          <Link href="/" className="relative w-[150px] h-[40px]">
            <Image
              src="/images/home/logo-transparent.png"
              alt="logo"
              fill
              priority
              className="w-full h-full object-contain"
            />
          </Link>

          <div className="flex items-center justify-between gap-6">
            <ul className="lg:flex space-x-8 hidden">
              {navigationData.map((item, index) => (
                <li
                  className="my-2 transition-all duration-300 hover:text-secondary hover:scale-110"
                  key={index}
                >
                  <Link href={item.path}>
                    <span className="font-semibold">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden lg:block">
              <button
                className="bg-primary hover:bg-secondary transition duration-300 text-white px-4 py-2 rounded-full text-sm font-bold"
                onClick={handleContactUsClick}
              >
                Contact Us
              </button>
            </div>
          </div>

          <Menu />
        </div>
      </nav>
    </div>
  );
};

export default Header;
