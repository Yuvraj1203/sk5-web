"use client";

import React from "react";
import Link from "next/link";
import { BsMailbox } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">SK5 Marketing</h2>
          <p className="text-sm">
            We help businesses grow with tailored marketing strategies and data-driven results.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/" className="hover:text-white">About</Link></li>
            <li><Link href="/" className="hover:text-white">Services</Link></li>
            <li><Link href="/" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>SEO Optimization</li>
            <li>Social Media Marketing</li>
            <li>Brand Strategy</li>
            <li>Content Marketing</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><BsMailbox size={16}/> info@sk5.com</li>
            <li className="flex items-center gap-2"><BsMailbox size={16}/> +91 99999 99999</li>
            <li className="flex items-center gap-2"><BsMailbox size={16}/> Udaipur, Rajasthan</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} SK5 Marketing. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
