import styled from "styled-components";

import { ReactComponent as Circle } from "../../assets/circle.svg";
import { ReactComponent as Square } from "../../assets/square.svg";
import { ReactComponent as Triangle } from "../../assets/triangle.svg";
import { ReactComponent as Sawtooth } from "../../assets/sawtooth.svg";

import { EmptyButton } from "../Styled";

const Waveform = ({ oscId, state, setState }) => {
  const handleClick = (ev) => {
    ev.stopPropagation();
    const name = ev.target.name;
    setState((prevState) => ({
      ...prevState,
      [oscId]: {
        ...prevState[oscId],
        waveform: name,
      },
    }));
  };

  return (
    <Wrapper>
      <WaveformContainer>
        <EmptyButton name="square" onClick={handleClick}>
          <Text>Square</Text>
          <Square
            width={64}
            height={64}
            pointerEvents="none"
            fill={
              state[oscId].waveform === "square"
                ? "var(--color-accent)"
                : "var(--color-black)"
            }
          />
        </EmptyButton>
        <EmptyButton name="sine" onClick={handleClick}>
          <Text>Sine</Text>
          <Circle
            width={64}
            height={64}
            pointerEvents="none"
            fill={
              state[oscId].waveform === "sine"
                ? "var(--color-accent)"
                : "var(--color-black)"
            }
          />
        </EmptyButton>
        <EmptyButton name="triangle" onClick={handleClick}>
          <Text>Triangle</Text>
          <Triangle
            width={64}
            height={64}
            pointerEvents="none"
            fill={
              state[oscId].waveform === "triangle"
                ? "var(--color-accent)"
                : "var(--color-black)"
            }
          />
        </EmptyButton>
        <EmptyButton name="sawtooth" onClick={handleClick}>
          <Text>Sawtooth</Text>
          <Sawtooth
            width={64}
            height={64}
            pointerEvents="none"
            fill={
              state[oscId].waveform === "sawtooth"
                ? "var(--color-accent)"
                : "var(--color-black)"
            }
          />
        </EmptyButton>
      </WaveformContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const WaveformContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

const Text = styled.p`
  pointer-events: none;
  font-family: "Roboto Mono";
  color: var(--color-white);
`;

export default Waveform;
