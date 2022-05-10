import { useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "../contexts/SettingsContext";

import AdsrTimeRange from "./Controls/AdsrTimeRange";
import AdsrPercentageRange from "./Controls/AdsrPercentageRange";

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
        <AdsrTimeRange
          state={adsrConfig}
          setState={setAdsrConfig}
          adsrId={adsrId}
          parameter="attack"
          name="Atk"
          min={0.01}
          max={5}
        />
        <AdsrTimeRange
          state={adsrConfig}
          setState={setAdsrConfig}
          adsrId={adsrId}
          parameter="decay"
          name="Dcy"
          min={0.01}
          max={5}
        />
      </Container>
      <Container>
        <AdsrPercentageRange
          state={adsrConfig}
          setState={setAdsrConfig}
          adsrId={adsrId}
          parameter="sustain"
          name="Sus"
        />
        <AdsrTimeRange
          state={adsrConfig}
          setState={setAdsrConfig}
          adsrId={adsrId}
          parameter="release"
          name="Rls"
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
