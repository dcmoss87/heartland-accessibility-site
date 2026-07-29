"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, ReactNode } from "react";

interface AnchorLinkProps {
  href: string; // e.g. "/#contact"
  children: ReactNode;
  className?: string;
  onNavigate?: () => void; // e.g. close mobile menu
}

export function AnchorLink({ href, children, className, onNavigate }: AnchorLinkProps) {
  const pathname = usePathname();
  const [path, hash] = href.split("#");
  const isHomeHashLink = Boolean(hash) && (path === "/" || path === "");
  const onHomePage = pathname === "/" || pathname === "";

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (isHomeHashLink && onHomePage) {
      const target = document.getElementById(hash);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        history.pushState(null, "", `#${hash}`);
      }
    }
    onNavigate?.();
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}