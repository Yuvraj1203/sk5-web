// components/Footer.tsx
"use client";
import { Button } from "@heroui/react";
import Link from "next/link";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const nav = [
  { label: "Services", href: "/" },
  { label: "Pricing", href: "/" },
  { label: "Case Studies", href: "/" },
  { label: "Blog", href: "/" },
  { label: "Contact", href: "/" },
];

const resources = [
  { label: "About Us", href: "/" },
  { label: "Careers", href: "/" },
  { label: "FAQs", href: "/" },
  { label: "Privacy Policy", href: "/" },
  { label: "Terms of Service", href: "/" },
];

const FooterSecond = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-700 bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top: Brand + CTA */}
        <div className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              {/* If using next/image, replace with <Image /> */}
              <img
                src="/images/logo/appLogo.png"
                alt="Company logo"
                className="h-7 w-auto"
              />
              <span className="text-lg font-semibold tracking-tight">
                SK5 Marketing Co.
              </span>
            </Link>
            <p className="mt-3 max-w-xl text-sm text-[--on-surface-variant]">
              We help brands grow with performance-driven strategy, content, and
              campaigns.
            </p>
          </div>

          {/* Newsletter */}
          <form
            className="w-full rounded-2xl border border-gray-700 bg-background shadow-faq-out-shadow p-3 sm:w-[28rem]"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="newsletter" className="sr-only">
              Subscribe to newsletter
            </label>
            <div className="flex items-center gap-2">
              <input
                id="newsletter"
                type="email"
                placeholder="Your email address"
                className="w-full rounded-xl border border-[--outline]/30 bg-transparent px-3 py-2 outline-none placeholder:text-[--on-surface-variant] focus:border-[--primary]"
              />
              <Button type="submit" color="danger" className="inline-flex ">
                Subscribe
              </Button>
            </div>
            <p className="mt-2 text-xs text-[--on-surface-variant]">
              By subscribing you agree to our{" "}
              <Link
                href="/privacy"
                className="underline decoration-[--outline]/40 underline-offset-2 hover:text-[--primary]"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </form>
        </div>

        {/* Middle: Link columns */}
        <div className="grid grid-cols-1 gap-10 border-t border-[--outline]/10 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-[--on-surface]">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-[--on-surface-variant] hover:text-[--primary]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-[--on-surface]">
              Resources
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {resources.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-[--on-surface-variant] hover:text-[--primary]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-[--on-surface]">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-[--on-surface-variant]">
              <li>Email: hello@sk5.com</li>
              <li>Phone: +91 99999 99999</li>
              <li>Address: Udaipur, Rajasthan, IN</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-[--on-surface]">
              Follow us
            </h3>
            <div className="mt-4 flex items-center gap-3">
              <Link
                href="https://twitter.com"
                aria-label="Twitter"
                className="rounded-full border border-gray-700 p-2 hover:border-[--primary] hover:text-[--primary]"
              >
                <FaTwitter className="h-4 w-4" />
              </Link>
              <Link
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="rounded-full border border-gray-700 p-2 hover:border-[--primary] hover:text-[--primary]"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </Link>
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="rounded-full border border-gray-700 p-2 hover:border-[--primary] hover:text-[--primary]"
              >
                <FaInstagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="rounded-full border border-gray-700 p-2 hover:border-[--primary] hover:text-[--primary]"
              >
                <FaFacebookF className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-[--outline]/10 py-6 text-sm text-[--on-surface-variant] md:flex-row">
          <p>© {year} Your Marketing Co. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[--primary]">
              Privacy
            </Link>
            <span aria-hidden>•</span>
            <Link href="/terms" className="hover:text-[--primary]">
              Terms
            </Link>
            <span aria-hidden>•</span>
            <Link href="/sitemap.xml" className="hover:text-[--primary]">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSecond;
