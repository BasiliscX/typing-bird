import GameCanvas from "@/components/game/GameCanvas";

export default function GamePage() {
  return (
    <div>
      <h1>Typing Bird</h1>
      <div className="flex justify-center items-center">
        <GameCanvas />
      </div>
    </div>
  );
}
