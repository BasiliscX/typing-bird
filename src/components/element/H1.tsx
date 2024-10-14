interface ResponsivePProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function H1({ className, style, children }: ResponsivePProps) {
  return (
    <h1
      className={`text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl ${className}`}
      style={style}
    >
      {children}
    </h1>
  );
}
