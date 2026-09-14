"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  ["Services", "/#services"],
  ["Work", "/#systems"],
  ["About", "/#about"],
  ["Process", "/#process"],
  ["FAQ", "/#faq"],
  ["Blog", "/blog"],
];
const dashboardUrl = (
  process.env.NEXT_PUBLIC_DASHBOARD_URL ||
  (process.env.NODE_ENV === "development"
    ? "http://localhost:97"
    : "https://dashboard.zaxcode.com")
).replace(/\/$/, "");

function scrollToTarget(event, href) {
  const url = new URL(href, window.location.origin);
  if (window.location.pathname !== "/" || !url.hash) return;
  const target = document.querySelector(url.hash);
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", url.hash);
}

export default function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 18);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${scrolled ? "border-b border-white/30 bg-white/60 shadow-[0_12px_40px_rgba(15,23,42,0.12)] backdrop-blur-2xl backdrop-saturate-150" : "border-b border-transparent bg-base-100"}`}
    >
      <div
        className={`navbar mx-auto max-w-7xl px-4 transition-all duration-500 sm:px-6 lg:px-8 ${scrolled ? "h-[4.2rem]" : "h-[4.6rem]"}`}
      >
        <div className="navbar-start">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="btn btn-ghost btn-square lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <Link href="/" className="btn btn-ghost gap-3 px-2 normal-case">
            <Image
              src="/images/logo1.png"
              width={150}
              height={62}
              alt="Zaxcode logo"
              className="shrink-0 object-contain"
              priority
            />
          </Link>
        </div>
        <nav className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1 text-sm font-semibold">
            {navItems.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={(event) => scrollToTarget(event, href)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="navbar-end gap-2">
          {/* <a
            href={`${dashboardUrl}/sign-in`}
            className="btn btn-ghost hidden rounded-full md:inline-flex"
          >
            Sign in
          </a> */}
          <Link
            href="/#contact"
            onClick={(event) => scrollToTarget(event, "/#contact")}
            className="btn hidden rounded-full border-0 bg-blue-600 px-7 text-white hover:bg-blue-700 sm:inline-flex"
          >
            Start a Project
          </Link>
        </div>
      </div>
      {open && (
        <nav className="border-t border-base-300 bg-base-100 px-4 py-3 shadow-xl lg:hidden">
          <ul className="menu mx-auto max-w-7xl">
            {navItems.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={(event) => {
                    setOpen(false);
                    scrollToTarget(event, href);
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" onClick={() => setOpen(false)}>
                Start a Project
              </Link>
            </li>
            <li>
              <a href={`${dashboardUrl}/sign-in`}>Sign in</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
