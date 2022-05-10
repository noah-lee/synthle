import { useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "../contexts/SettingsContext";

// import Toggle from "./Toggle";
import Toggle from "./Controls/Toggle";
import Range from './Controls/Range';

const Delay = () => {
  const { delayConfig, setDelayConfig } = useContext(SettingsContext);

  return (
    <Wrapper>
      <Toggle
        state={delayConfig}
        setState={setDelayConfig}
        parameter="on"
        name="Delay"
      />
      <Range state={delayConfig} setState={setDelayConfig} parameter="delay" name="Time" type="time" min={0.01} max={2} />
      <Range state={delayConfig} setState={setDelayConfig} parameter="feedback" name="Fdbk" type="percentage" min={0} max={0.9} />
      <Range state={delayConfig} setState={setDelayConfig} parameter="wet" name="Wet" type="percentage" min={0} max={1} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default Delay;
