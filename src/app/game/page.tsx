import Title from "@/components/element/Title";
import GameCanvas from "@/components/game/GameCanvas";

export default function GamePage() {
  return (
    <div>
      <Title className="hTitle bg-amber-50 text-slate-900" title="TypingBird" />
      <div className="flex justify-center mt-4">
        <GameCanvas />
      </div>
    </div>
  );
}
