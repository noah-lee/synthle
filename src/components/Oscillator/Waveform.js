import styled from "styled-components";

import { ReactComponent as Circle } from "../../assets/circle.svg";
import { ReactComponent as Square } from "../../assets/square.svg";
import { ReactComponent as Triangle } from "../../assets/triangle.svg";
import { ReactComponent as Sawtooth } from "../../assets/sawtooth.svg";

import { EmptyButton } from "../Styled";

const Waveform = ({ oscId, state, setState }) => {
  const waveforms = ["sine", "square", "sawtooth", "triangle"];

  const handleChange = (ev) => {
    const value = ev.target.value;
    setState((prevState) => ({
      ...prevState,
      [oscId]: {
        ...prevState[oscId],
        waveform: value,
      },
    }));
  };

  return (
    <Wrapper>
      <WaveformContainer>
        <EmptyButton>
          <Circle width={64} height={64} />
        </EmptyButton>
        <EmptyButton>
          <Square width={64} height={64} />
        </EmptyButton>
        <EmptyButton>
          <Triangle width={64} height={64} />
        </EmptyButton>
        <EmptyButton>
          <Sawtooth width={64} height={64} />
        </EmptyButton>
      </WaveformContainer>

      <select onChange={handleChange} defaultValue={state[oscId].waveform}>
        {waveforms.map((waveform) => (
          <option key={waveform} value={waveform}>
            {waveform}
          </option>
        ))}
      </select>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const WaveformContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 8px;
`;

export default Waveform;
