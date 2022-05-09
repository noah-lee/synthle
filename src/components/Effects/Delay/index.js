import { useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "../../../contexts/SettingsContext";

import Toggle from "./Toggle";
import DelayTime from "./DelayTime";
import Feedback from "./Feedback";
import Wet from "./Wet";

const Delay = () => {
  const { delayConfig, setDelayConfig } = useContext(SettingsContext);

  return (
    <Wrapper>

        <Toggle state={delayConfig} setState={setDelayConfig} />
        <DelayTime state={delayConfig} setState={setDelayConfig} />
        <Feedback state={delayConfig} setState={setDelayConfig} />
        <Wet state={delayConfig} setState={setDelayConfig} />
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
