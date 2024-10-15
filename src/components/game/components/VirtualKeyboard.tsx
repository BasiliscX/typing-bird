import Box from "@/components/box/Box";

interface VirtualKeyboardProps {
  onKeyPress: (key: string) => void;
}

export default function VirtualKeyboard({ onKeyPress }: VirtualKeyboardProps) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <Box className="md:hidden bg-slate-50 virtual-keyboard grid grid-cols-6 gap-2 p-4 shadow-sm shadow-slate-400">
      {alphabet.map((letter) => (
        <button
          key={letter}
          className="bg-blue-500 text-white py-2 px-4 rounded shadow"
          onClick={() => onKeyPress(letter)}
        >
          {letter}
        </button>
      ))}
      <button
        className="bg-green-500 text-white py-2 px-4 rounded shadow col-span-4"
        onClick={() => onKeyPress(" ")}
      >
        Space
      </button>
    </Box>
  );
}
