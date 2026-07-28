interface HeaderProps {
  title: string;
  as?: "h1" | "h2";
}

export default function Header({
  title,
  as: Tag = "h1",
}: HeaderProps) {
  const sizeClasses = {
    h1: "text-6xl md:text-6xl",
    h2: "text-6xl md:text-6xl",
  } as const;

  return (
    <div className="pt-32 pb-16 text-center">
      <Tag
        className={`font-black tracking-tight bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text text-transparent ${
          sizeClasses[Tag]
        }`}
      >
        {title}
      </Tag>

      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
    </div>
  );
}