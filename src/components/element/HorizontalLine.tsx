interface HorizontalLineProps {
  className?: string;
  styles?: React.CSSProperties;
}

export default function HorizontalLine({
  className,
  styles,
}: HorizontalLineProps) {
  const defaultStyles = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    borderBottom: "2px solid #000",
  };
  return (
    <div
      className={`${className}`}
      style={{ ...defaultStyles, ...styles }}
    ></div>
  );
}
