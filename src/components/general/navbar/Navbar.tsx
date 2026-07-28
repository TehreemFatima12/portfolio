import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#081221]/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 lg:px-10">
        <Logo />
        <NavLinks />
      </div>
    </header>
  );
}