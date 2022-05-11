import { useEffect, useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "../../contexts/SettingsContext";

import { Button } from "../../styles/Styled";

const MasterPitch = ({ state, setState, tooltip }) => {
  const { handleMouseOver, handleMouseLeave } = useContext(SettingsContext);

  const handleClick = (action) => {
    if (action === "pitch-down") {
      setState((prevState) => ({
        ...prevState,
        pitch: Math.max(-3, prevState.pitch - 1),
      }));
    } else if (action === "pitch-up") {
      setState((prevState) => ({
        ...prevState,
        pitch: Math.min(3, prevState.pitch + 1),
      }));
    }
  };

  useEffect(() => {
    const handleKeyDown = (ev) => {
      if (ev.key === "z") {
        if (ev.repeat) return;
        handleClick("pitch-down");
      } else if (ev.key === "x") {
        if (ev.repeat) return;
        handleClick("pitch-up");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <Wrapper
      onMouseOver={() => handleMouseOver(tooltip)}
      onMouseLeave={handleMouseLeave}
    >
      <p>Pitch</p>
      <Button onClick={() => handleClick("pitch-down")}>-</Button>
      <Text>{state.pitch}</Text>
      <Button onClick={() => handleClick("pitch-up")}>+</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  line-height: 24px;
`;

const Text = styled.p`
  min-width: 24px;
  text-align: center;
  gap: 8px;
`;

export default MasterPitch;
