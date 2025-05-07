"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AlignJustify, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const Navlinks = [
  {
    name: "Home",
    children: [
      "IT startup",
      "Business",
      "App",
      "Insurence",
      "Property",
      "Big data",
      "Distance Learning",
      "Chatbot",
      "Software",
      "Medical",
    ],
  },
  {
    name: "Pages",
    children: [
      "About us (IT Startup)",
      "About us (Insurance)",
      "Team",
      "Testimonials",
      "Courses",
      "Pricing",
      "Features",
      "Login/Register",
      "Forgot Password",
      "Faq",
      "Terms & Conditions",
      "Privacy policy",
      "Coming soon",
      "404 Error Page",
      "Thank you",
    ],
  },
  { name: "Portfolio", children: [] },
  { name: "Services", children: [] },
  { name: "Blog", children: [] },
  { name: "Contact", children: [] },
  { name: "Features", children: [] },
];

const Header = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div className="h-[84px] py-3 px-4 flex items-center justify-between bg-transparent box-border">
      <Image
        src="/images/logo.png"
        alt="app-logo"
        height={50}
        width={135}
        priority={true}
      />
      <nav className="hidden md:flex flex-1 justify-end px-4">
        <ul className="flex list-none space-x-6">
          {Navlinks.map((item) => (
            <li key={item.name} className="flex items-center space-x-1">
              <label className="font-sans text-sm font-bold text-[#A7C2E0]">
                {item.name}
              </label>
              <ChevronDown size={15} />
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-1 items-center justify-end">
        <Button className="text-[10px] py-1.25 px-2.5 flex items-center  bg-[#CC003E] hover:bg-blue-900 transition-colors duration-600 ease-in">
          <span>Download now</span>
          <div className="hidden">
            <ChevronRight />
          </div>
        </Button>
        <div className="ml-4 md:hidden">
          <AlignJustify size={35} />
        </div>
      </div>
    </div>
  );
};

export default Header;
