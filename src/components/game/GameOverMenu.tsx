import Box from "../box/Box";
import HorizontalLine from "../element/HorizontalLine";

type GameOverMenuProps = {
  onRetry: () => void;
  onContinue: () => void;
};

export default function GameOverMenu({
  onRetry,
  onContinue,
}: GameOverMenuProps) {
  return (
    <Box style={styles.menu} className="shadow-lg text-slate-900 shadow-black">
      <HorizontalLine />
      <p>Game Over!</p>
      <p>What would you like to do?</p>
      <HorizontalLine />
      <button className="boxButton mr-4" onClick={onRetry}>
        Retry
      </button>
      <button className="boxButton" onClick={onContinue}>
        Continue
      </button>
    </Box>
  );
}

const styles = {
  menu: {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    backgroundColor: "white",
    border: "2px solid black",
    textAlign: "center" as const,
  },
};
