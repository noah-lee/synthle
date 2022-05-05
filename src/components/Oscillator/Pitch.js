import styled from "styled-components";

import { Button } from "../Styled";

const Pitch = ({ oscId, state, setState }) => {
  const handleClick = (action) => {
    if (action === "pitch-down") {
      setState((prevState) => ({
        ...prevState,
        [oscId]: {
          ...prevState[oscId],
          pitch: Math.max(-3, prevState[oscId].pitch - 1),
        },
      }));
    } else if (action === "pitch-up") {
      setState((prevState) => ({
        ...prevState,
        [oscId]: {
          ...prevState[oscId],
          pitch: Math.min(3, prevState[oscId].pitch + 1),
        },
      }));
    }
  };

  return (
    <Wrapper>
      <Button onClick={() => handleClick("pitch-down")}>-</Button>
      {state[oscId].pitch}
      <Button onClick={() => handleClick("pitch-up")}>+</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Pitch;
