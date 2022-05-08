import { useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "../../contexts/SettingsContext";

import Attack from "./Attack";
import Decay from "./Decay";
import Sustain from "./Sustain";
import Release from "./Release";

const Adsr = ({ id }) => {
  const { adsrConfig, setAdsrConfig } = useContext(SettingsContext);

  const atkPos = (adsrConfig[id].attack / 5) * 90;
  const dcyPos = (adsrConfig[id].decay / 5) * 90;
  const susPos = adsrConfig[id].sustain * 50;
  const rlsPos = (adsrConfig[id].release / 5) * 90;

  return (
    <Wrapper>
      <h2>ADSR {id.charAt(4)}</h2>
      <SvgContainer>
        <svg fill="#b06177">
          <polygon points={`${atkPos},30 ${atkPos},80 0,80`} />
          <polygon
            points={`${atkPos},30 ${atkPos + dcyPos},${-susPos + 80} ${
              atkPos + dcyPos
            },80 ${atkPos},80`}
          />
          <polygon
            points={`${atkPos + dcyPos},${-susPos + 80} ${
              atkPos + dcyPos + rlsPos
            },80 ${atkPos + dcyPos},80`}
          />
        </svg>
      </SvgContainer>
      <Container>
        <Attack id={id} state={adsrConfig} setState={setAdsrConfig} />
        <Decay id={id} state={adsrConfig} setState={setAdsrConfig} />
      </Container>
      <Container>
        <Sustain
          id={id}
          parameter="sustain"
          state={adsrConfig}
          setState={setAdsrConfig}
        />
        <Release id={id} state={adsrConfig} setState={setAdsrConfig} />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 320px;
  height: 210px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-dark);
`;

const SvgContainer = styled.div`
  /* width: 200px; */
  height: 80px;
  background-color: var(--color-black);
  position: relative;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
`;

export default Adsr;
