import Title from "@/components/element/Title";
import GameCanvas from "@/components/game/GameCanvas";

export default function GamePage() {
  return (
    <div>
      <Title className="hTitle" title="TypingBird" />
      <div className="flex justify-center mt-10">
        <GameCanvas />
      </div>
    </div>
  );
}
