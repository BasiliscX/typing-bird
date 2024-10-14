"use client";

import React from "react";

interface WelcomeScreenProps {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
      }}
    >
      <h1>Typing Bird</h1>
      <p>Welcome to the Typing Bird game</p>
      <ul>
        <li>
          Press &quot;Space&quot; or &quot;Tab&quot; to jump at the beginning of
          the game.
        </li>
        <li>
          You must jump through the pipes using the correct key assigned to each
          pipe.
        </li>
        <li>The keys change according to the letter of the pipe you pass.</li>
        <li>
          If your score is less than 10, you can also jump with &quot;Tab&quot;.
        </li>
      </ul>
      <button
        onClick={onStart}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Let´s start!
      </button>
    </div>
  );
}
