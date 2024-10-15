interface ResponsivePProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function P({ className, style, children }: ResponsivePProps) {
  return (
    <p
      className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${className}`}
      style={style}
    >
      {children}
    </p>
  );
}
