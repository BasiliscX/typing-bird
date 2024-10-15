// src/components/game/Score.tsx

interface ScoreProps {
  score: number;
}

export default function Score({ score }: ScoreProps) {
  return (
    <div
      style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        fontSize: "24px",
        fontWeight: "bold",
        color: "white",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      Score: {score}
    </div>
  );
}
