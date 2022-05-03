let isMouseDown = false;

const Key = ({ note }) => {
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
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {note.note}
    </button>
  );
};

export default Key;
