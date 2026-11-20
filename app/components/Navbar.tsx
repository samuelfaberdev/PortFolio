const LINKS = [
  { href: "/#a-propos", label: "A propos" },
  { href: "/#projets", label: "Mes projets" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav>
      <ul className="flex text-2xl gap-8">
        {LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="transition hover:opacity-70">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
