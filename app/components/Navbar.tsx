"use client";

import { useState } from "react";

const LINKS = [
  { href: "/#a-propos", label: "A propos" },
  { href: "/#projets", label: "Mes projets" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      {/* Ordinateur et tablette */}
      <ul className="hidden md:flex text-xl lg:text-2xl gap-6 lg:gap-8">
        {LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="transition hover:opacity-70">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile : menu burger */}
      <button
        type="button"
        className="md:hidden p-2 rounded-lg transition hover:opacity-70"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={() => setOpen((value) => !value)}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden
        >
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {open && (
        <ul
          id="menu-mobile"
          className="md:hidden absolute top-full left-0 w-full flex flex-col border-b-2 border-neutral-800 bg-[var(--background)] text-xl"
        >
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block px-6 py-4 transition hover:opacity-70"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
