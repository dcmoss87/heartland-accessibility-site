"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Wordmark } from "./Wordmark";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { AnchorLink } from "./AchhorLink";
import { BUSINESS_NAME } from "@/constants";

const navLinks: { href: string; label: string; cta?: boolean }[] = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#why", label: "Why Us" },
  { href: "/#contact", label: "Get a Free Audit", cta: true },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const firstLink = menuRef.current?.querySelector<HTMLAnchorElement>("a");
    firstLink?.focus();
  }, [open]);

  return (
    <header className="sticky top-0 z-[100] border-b border-border bg-surface" role="banner">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="min-w-0 text-text no-underline flex items-center"
          aria-label={`${BUSINESS_NAME} — Home`}
        >
          <Image
            src={logo}
            alt={`${BUSINESS_NAME} logo`}
            width={140}
            height={80}
            priority
            className="h-10 w-auto"
          />
          <Wordmark />
        </Link>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex list-none items-center gap-6" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <AnchorLink
                  href={link.href}
                  className={
                    link.cta
                      ? "rounded-[6px] bg-primary px-4 py-2 text-sm font-medium text-white no-underline transition-colors hover:bg-primary-hover hover:text-white"
                      : "text-sm font-medium text-subtle no-underline transition-colors hover:text-text"
                  }
                >
                  {link.label}
                </AnchorLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] rounded-[6px] border-0 bg-transparent p-2 md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-[22px] rounded-sm bg-text transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
            aria-hidden="true"
          />
          <span
            className={`block h-0.5 w-[22px] rounded-sm bg-text transition-opacity ${open ? "opacity-0" : ""}`}
            aria-hidden="true"
          />
          <span
            className={`block h-0.5 w-[22px] rounded-sm bg-text transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            aria-hidden="true"
          />
        </button>
      </div>

      <div
        ref={menuRef}
        id={menuId}
        className={`border-t border-border bg-surface px-6 py-4 md:hidden ${open ? "block" : "hidden"}`}
        hidden={!open}
      >
        <nav aria-label="Mobile navigation">
          <ul className="flex list-none flex-col gap-4" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-base font-medium text-text no-underline"
                  onClick={close}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
