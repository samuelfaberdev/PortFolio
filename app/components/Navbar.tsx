import Image from "next/image";

export default function Navbar() {
  return (
    <header className="h-24 fixed top-0 p-4 flex items-center justify-between w-full border-b-2 border-neutral-800 bg-[var(--background)] opacity-80">
      <span className="flex items-center justify-center gap-4 text-4xl">
        <Image
          src="/images/icone.svg"
          alt="Logo"
          className="h-14"
          height={56}
          width={56}
        />
        <p className="gradient-text">samuelfaber.dev</p>
      </span>
      <nav className="">
        <ul className="flex text-2xl gap-8">
          <li>A propos</li>
          <li>Mes projets</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
