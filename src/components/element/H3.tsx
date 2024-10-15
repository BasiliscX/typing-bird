interface ResponsivePProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function H3({ className, style, children }: ResponsivePProps) {
  return (
    <h1
      className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl ${className}`}
      style={style}
    >
      {children}
    </h1>
  );
}
