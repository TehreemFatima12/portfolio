import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function NavLinks() {
  return (
    <nav className="hidden lg:flex items-center gap-10">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="relative text-white text-lg font-medium transition-all duration-300 hover:text-cyan-400
          after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
          after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}