type GameOverMenuProps = {
  onRetry: () => void;
  onContinue: () => void;
};

export default function GameOverMenu({
  onRetry,
  onContinue,
}: GameOverMenuProps) {
  return (
    <div style={styles.menu}>
      <p>Game Over!</p>
      <button onClick={onRetry}>Retry</button>
      <button onClick={onContinue}>Continue</button>
    </div>
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
