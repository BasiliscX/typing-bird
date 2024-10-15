/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import H2 from "../element/H2";
import BrutalistBox from "../box/BrutalistBox";
import HorizontalLine from "../element/HorizontalLine";

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
      <H2>Typing Bird</H2>
      <ul>
        <HorizontalLine className="mt-4" />
        <li className="flex justify-center items-center">
          Press &quot;Space&quot; or &quot;Tab&quot; to jump at the beginning of
          the game.
          <img
            src="/images/game/we1.svg"
            alt="Bird"
            style={{ width: "100px", marginLeft: "10px" }}
          />
        </li>
        <li className="flex justify-center items-center">
          You must jump through the pipes
          <br />
          using the correct key assigned to each pipe.
          <img
            src="/images/game/we2.svg"
            alt="Bird"
            style={{ width: "100px", marginLeft: "10px" }}
          />
        </li>
        <li className="flex justify-center items-center">
          <img
            src="/images/game/we3.svg"
            alt="Bird"
            style={{ width: "30px", marginLeft: "10px" }}
          />
          The keys change according
          <br />
          to the letter of the pipe you pass.
        </li>
        <HorizontalLine className="mb-4 mt-2" />
      </ul>
      <BrutalistBox>
        <button onClick={onStart} className="boxButton">
          Let´s start!
        </button>
      </BrutalistBox>
    </div>
  );
}
