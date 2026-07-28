import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-4xl font-extrabold tracking-tight"
    >
      <span className="text-white">UI /ARTIST</span>
      <span className="text-cyan-400 drop-shadow-[0_0_8px_#22d3ee]">
        
      </span>
    </Link>
  );
}