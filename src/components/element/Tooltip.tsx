interface TooltipProps {
  Information: string;
}

interface TooltipProps {
  Information: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Tooltip({
  Information,
  className,
  style,
}: TooltipProps) {
  return (
    /* From Uiverse.io by themrsami */
    <div
      className={`relative group inline-block cursor-help select-none ${className}`}
      style={style}
    >
      <div className="bg-white py-2 rounded-md shadow-lg flex justify-center items-center gap-4 px-4">
        <p className="text-gray-700 font-semibold">📄 README.md</p>
      </div>

      <div className="absolute left-0 mt-2 w-72 md:w-96 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <p className="p-2 text-sm md:text-base text-gray-600">{Information}</p>
      </div>
    </div>
  );
}
