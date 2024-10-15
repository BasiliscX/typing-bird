import Box from "../box/Box";
import H2 from "./H2";

interface TitleProps {
  title: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Title({
  title,
  className = "",
  style = {},
}: TitleProps) {
  return (
    <Box
      className={`${className} w-full justify-center p-1 h-auto flex items-center`}
      style={style}
    >
      <H2 className="text-center">{title}</H2>
    </Box>
  );
}
