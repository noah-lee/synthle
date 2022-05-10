import { useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "../contexts/SettingsContext";

import AdsrRange from "./Controls/AdsrRange"

const Adsr = ({ id: adsrId }) => {
  // ADSR settings
  const { adsrConfig, setAdsrConfig } = useContext(SettingsContext);

  // ADSR SVG
  const atkSvgPos = (adsrConfig[adsrId].attack / 5) * 100;
  const dcySvgPos = (adsrConfig[adsrId].decay / 5) * 100;
  const susSvgPos = adsrConfig[adsrId].sustain * 50;
  const rlsSvgPos = (adsrConfig[adsrId].release / 5) * 100;

  return (
    <Wrapper>
      <h2>ADSR {adsrId.charAt(4)}</h2>
      <SvgContainer>
        <AdsrSvg>
          <polygon
            points={`${atkSvgPos},30 ${atkSvgPos + dcySvgPos},${
              -susSvgPos + 80
            } ${atkSvgPos + dcySvgPos + rlsSvgPos},80 0,80`}
          />
        </AdsrSvg>
      </SvgContainer>
      <Container>
        <AdsrRange
          state={adsrConfig}
          setState={setAdsrConfig}
          adsrId={adsrId}
          parameter="attack"
          name="Atk"
          type="time"
          min={0.01}
          max={5}
        />
        <AdsrRange
          state={adsrConfig}
          setState={setAdsrConfig}
          adsrId={adsrId}
          parameter="decay"
          name="Dcy"
          type="time"
          min={0.01}
          max={5}
        />
      </Container>
      <Container>
        <AdsrRange
          state={adsrConfig}
          setState={setAdsrConfig}
          adsrId={adsrId}
          parameter="sustain"
          name="Sus"
          type="percentage"
          min={0}
          max={1}
        />
        <AdsrRange
          state={adsrConfig}
          setState={setAdsrConfig}
          adsrId={adsrId}
          parameter="release"
          name="Rls"
          type="time"
          min={0.01}
          max={5}
        />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 360px;
  height: 210px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-dark);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
`;

const SvgContainer = styled.div`
  height: 80px;
  background-color: var(--color-black);
  position: relative;
`;

const AdsrSvg = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  fill: var(--color-accent);
`;

export default Adsr;
