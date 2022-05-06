import styled from "styled-components";

let isMouseDown = false;

const Key = ({ note, keySize }) => {
  const style = {
    width: note.note.includes("#") ? keySize / 2 + "px" : keySize + "px",
    height: note.note.includes("#") ? "100px" : "160px",
    zIndex: note.note.includes("#") ? 2 : 1,
    backgroundColor: note.note.includes("#")
      ? "var(--color-dark)"
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

  return (
    <KeyButton
      style={style}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
    </KeyButton>
  );
};

const KeyButton = styled.button`
  position: absolute;
  top: 0;
  padding: 0;
  border: none;
  background-color: var(--color-white);
`;

export default Key;
