interface BoxProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function BrutalistBox({
  children,
  className = "",
  style = {},
}: BoxProps) {
  const defaultStyle = {
    border: "4px solid #000",
    // padding: "1.5rem",
    boxShadow: "10px 10px 0 #000",
  };
  return (
    <div className={`${className}`} style={{ ...defaultStyle, ...style }}>
      {children}
    </div>
  );
}
