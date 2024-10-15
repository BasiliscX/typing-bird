// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="w-screen h-full p-8 bg-slate-100 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About This Game and Credits</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Game Overview</h2>
          <p>
            Welcome to <strong>Typing Birds!</strong> This game is a fun and
            challenging typing experience where you help a bird fly through
            obstacles by typing the correct letters that appear on the screen.
            The faster and more accurately you type, the further your bird will
            go without hitting an obstacle.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Rules of the Game</h2>
          <ul className="list-disc ml-8">
            <li>
              Your goal is to help the bird pass through the pipes by typing the
              correct letter displayed on each pipe.
            </li>
            <li>
              If you type the wrong letter or fail to type it in time, the bird
              will crash into the pipe, and the game will be over.
            </li>
            <li>
              The game starts with easy letters, but as you advance, the speed
              and complexity increase.
            </li>
            <li>
              Try to achieve the highest score possible by passing through as
              many pipes as you can!
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <p>
            This game was developed using modern web technologies to ensure
            smooth gameplay and a great user experience:
          </p>
          <ul className="list-disc ml-8">
            <li>
              <strong>Next.js</strong> - A powerful React framework for
              server-side rendering and static site generation.
            </li>
            <li>
              <strong>React</strong> - For building interactive UI components.
            </li>
            <li>
              <strong>Tailwind CSS</strong> - To style the application with a
              responsive design in mind.
            </li>
            <li>
              <strong>HTML5 Canvas</strong> - For rendering the game graphics
              and animations.
            </li>
            <li>
              <strong>TypeScript</strong> - To ensure type safety and reduce
              bugs during development.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Credits</h2>
          <p>
            This game was created by{" "}
            <strong>
              <a
                href="https://www.navarroguillermo.com/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Guillermo Navarro
              </a>
            </strong>{" "}
            and is inspired by the classic game{" "}
            <a
              href="https://flappybird.io/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flappy Bird
            </a>
            .
          </p>
          <p className="mt-4">
            Special thanks to the open-source community for providing tools and
            resources that made this project possible.
          </p>
          <p className="mt-4">
            Music by <strong>Juhani Junkala</strong>, available at{" "}
            <a
              href="https://opengameart.org/content/4-chiptunes-adventure"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenGameArt
            </a>
            .
          </p>
          <p>
            Jump sound by <strong>dklon</strong>, available at{" "}
            <a
              href="https://opengameart.org/content/platformer-jumping-sounds"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenGameArt
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Challenge from STUDIO SOUP
          </h2>
          <p>
            This project was initially inspired by a challenge from{" "}
            <strong>STUDIO SOUP</strong>, which aimed at creating a
            mini-interactive experience using TypeScript within a day (8 hours).
            The requirements included creating an interactive web game or
            simulation involving user events (clicks, mouse/keyboard movements)
            and dynamic visual elements.
          </p>
          <p>Key aspects evaluated in the challenge were:</p>
          <ul className="list-disc ml-8">
            <li>
              <strong>Code Structure</strong>: Clear and organized TypeScript
              code.
            </li>
            <li>
              <strong>User Interaction</strong>: Effective implementation of
              user interactions.
            </li>
            <li>
              <strong>Creativity</strong>: Original and playful approach to the
              game or simulation concept.
            </li>
            <li>
              <strong>TypeScript Proficiency</strong>: Use of static typing,
              interfaces, and best practices.
            </li>
          </ul>
          <p>
            The challenge encouraged me to explore creativity while
            demonstrating strong technical skills, resulting in the creation of{" "}
            <strong>Typing Birds!</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Acknowledgments</h2>
          <p>
            I would like to thank <strong>Juhani Junkala</strong> for the
            amazing chiptune music used in the game, as well as{" "}
            <strong>dklon</strong> for the jump sound effect. Both assets are
            available for free on{" "}
            <a
              href="https://opengameart.org"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenGameArt
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
