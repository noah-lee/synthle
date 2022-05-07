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
      <p>Pitch</p>
      <Button onClick={() => handleClick("pitch-down")}>-</Button>
      <Text>{state[oscId].pitch}</Text>
      <Button onClick={() => handleClick("pitch-up")}>+</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  line-height: 24px;
`;

const Text = styled.p`
  min-width: 24px;
  text-align: center;
`;

export default Pitch;
