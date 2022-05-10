import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

let isMouseDown = false;

const Key = ({ note, keySize }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const style = {
    width: note.note.includes("#") ? keySize / 2 + "px" : keySize + "px",
    height: note.note.includes("#") ? "100px" : "160px",
    zIndex: note.note.includes("#") ? 2 : 1,
    color: note.note.includes("#") ? "var(--color-white)" : "var(--color-dark)",
    backgroundColor: note.note.includes("#")
      ? isPlaying
        ? "var(--color-accent)"
        : "var(--color-dark)"
      : isPlaying
      ? "var(--color-accent)"
      : "var(--color-white)",
    left: note.note.includes("#")
      ? note.pos * (keySize + 1) + 0.75 * keySize + "px"
      : note.pos * (keySize + 1) + "px",
  };

  const handleMouseDown = (ev) => {
    if (ev.repeat) return;
    isMouseDown = true;
    const e = new KeyboardEvent("keydown", { key: `${note.key}` });
    window.dispatchEvent(e);
  };

  const handleMouseOver = () => {
    if (isMouseDown) {
      const e = new KeyboardEvent("keydown", { key: `${note.key}` });
      window.dispatchEvent(e);
    }
  };

  const handleMouseUp = () => {
    isMouseDown = false;
    const e = new KeyboardEvent("keyup", { key: `${note.key}` });
    window.dispatchEvent(e);
  };

  const handleMouseOut = () => {
    if (isMouseDown) {
      const e = new KeyboardEvent("keyup", { key: `${note.key}` });
      window.dispatchEvent(e);
    }
  };

  const handleKeyDown = (ev) => {
    if (ev.repeat) return;
    if (ev.key === note.key) {
      setIsPlaying(true);
    }
  };

  const handKeyUp = (ev) => {
    if (ev.key === note.key) {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handKeyUp);
    };
  });

  return (
    <KeyButton
      style={style}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchCancel={handleMouseOut}
    >
      {note.key}
    </KeyButton>
  );
};

const KeyButton = styled.button`
  position: absolute;
  top: 0;
  padding: 0;
  border: none;
  background-color: var(--color-white);
  font-weight: bold;
  font-size: 1rem;
`;

export default Key;
