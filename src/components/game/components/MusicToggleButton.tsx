import React from "react";

interface MusicToggleButtonProps {
  isMusicOn: boolean;
  setIsMusicOn: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMusic: () => void;
}

const MusicToggleButton: React.FC<MusicToggleButtonProps> = ({
  isMusicOn,
  setIsMusicOn,
  toggleMusic,
}) => {
  return (
    <button
      onClick={() => {
        setIsMusicOn((prev) => !prev);
        toggleMusic();
      }}
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        color: "white",
      }}
    >
      {isMusicOn ? "🔊" : "🔇"}
    </button>
  );
};

export default MusicToggleButton;
