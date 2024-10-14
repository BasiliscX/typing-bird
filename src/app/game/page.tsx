import TitleH1 from "@/components/element/TitleH1";
import GameCanvas from "@/components/game/GameCanvas";

export default function GamePage() {
  return (
    <div>
      <TitleH1 className="hTitle" />
      <div className="flex justify-center mt-10">
        <GameCanvas />
      </div>
    </div>
  );
}
