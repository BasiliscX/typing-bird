import H1 from "./H1";
import Box from "@/components/box/Box";

interface TitleProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function TitleH1({ className, style }: TitleProps) {
  return (
    <Box
      className={`justify-center h-auto w-full flex items-center cursor-default select-none ${className}`}
      style={style}
    >
      <H1 className="text-center p-4 text-lg md:text-4xl">Typing Bird</H1>
    </Box>
  );
}
