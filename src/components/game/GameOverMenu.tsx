import Box from "../box/Box";

type GameOverMenuProps = {
  onRetry: () => void;
  onContinue: () => void;
};

export default function GameOverMenu({
  onRetry,
  onContinue,
}: GameOverMenuProps) {
  return (
    <Box style={styles.menu} className="shadow-lg shadow-black">
      <p>Game Over!</p>
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
