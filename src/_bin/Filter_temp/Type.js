import styled from "styled-components";

import { ReactComponent as Lowpass } from "../../assets/lowpass.svg";
import { ReactComponent as Highpass } from "../../assets/highpass.svg";

import { EmptyButton } from "../Styled";

const Type = ({ state, setState }) => {
  // const types = ["lowpass", "highpass"]

  // const handleChange = (ev) => {
  //   const value = ev.target.value;
  //   setState((prevState) => ({
  //     ...prevState,
  //     type: value,
  //   }));
  // };

  const handleClick = (ev) => {
    ev.stopPropagation();
    const name = ev.target.name;
    setState((prevState) => ({
      ...prevState,
      type: name,
    }));
  };

  return (
    <Wrapper>
      <WaveformContainer>
        <StyledEmptyButton name="lowpass" onClick={handleClick}>
          <TextContainer>
            <Text>Low</Text>
            <Text>Pass</Text>
          </TextContainer>
          <Lowpass
            width={32}
            height={32}
            pointerEvents="none"
            fill={state.type === "lowpass" ? "var(--color-accent)"
            : "var(--color-black)"}
          />
        </StyledEmptyButton>
        <StyledEmptyButton name="highpass" onClick={handleClick}>
        <TextContainer>
            <Text>High</Text>
            <Text>Pass</Text>
          </TextContainer>
          <Highpass
            width={32}
            height={32}
            pointerEvents="none"
            fill={state.type === "highpass" ? "var(--color-accent)"
            : "var(--color-black)"}
          />
        </StyledEmptyButton>
      </WaveformContainer>
    </Wrapper>
    // <select onChange={handleChange} defaultValue={state.type}>
    //     {types.map(type=> <option key={type} value={type}>{type}</option>)}
    //   </select>
  );
};

const Wrapper = styled.div``;

const WaveformContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`;

const TextContainer = styled.div`
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Text = styled.p`
  pointer-events: none;
  font-family: "Roboto Mono";
  color: var(--color-white);
`;

const StyledEmptyButton = styled(EmptyButton)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export default Type;