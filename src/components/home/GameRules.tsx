// src/components/GameRules.tsx

export default function GameRules() {
  return (
    <section className="text-gray-600 text-lg text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Game Rules</h2>
      <ul className="list-disc list-inside">
        <li className="mb-2">
          Press the correct key to jump over obstacles. Each correct jump
          increases your score.
        </li>
        <li className="mb-2">
          The first few obstacles can be jumped with the &quot;Space&quot; key,
          but as the game progresses, you&apos;ll need to use specific letter
          keys.
        </li>
        <li className="mb-2">
          The game ends if the bird collides with an obstacle or touches the
          ground or ceiling.
        </li>
        <li>
          Try to achieve the highest score possible by avoiding all obstacles!
        </li>
      </ul>
    </section>
  );
}
