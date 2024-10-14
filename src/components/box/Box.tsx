import { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLDivElement>;
}

export default function Box({
  children,
  className = "",
  style,
  ref,
}: BoxProps) {
  return (
    <div
      ref={ref}
      className={`border-t border-l border-gray-950 border-b-4 border-r-4 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
