"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/landing-content";

export function HeaderNav() {
  const pathname = usePathname();

  return (
    <div className="hidden items-center gap-2 md:flex">
      {navItems.map((item) => {
        const isActive = !item.external && pathname === item.href;
        const className = isActive
          ? "rounded-full bg-(--color-primary-light) px-4 py-2 text-sm font-semibold text-(--color-primary-dark)"
          : "rounded-full px-4 py-2 text-sm font-medium text-(--color-muted) transition hover:bg-(--color-primary-light) hover:text-(--color-primary)";

        if (item.external) {
          return (
            <a
              className={className}
              href={item.href}
              key={item.href}
              rel="noreferrer"
              target="_blank"
            >
              {item.label}
            </a>
          );
        }

        return (
          <Link className={className} href={item.href} key={item.href}>
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
