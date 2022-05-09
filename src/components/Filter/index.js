import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";

import { SettingsContext } from "../../contexts/SettingsContext";

import Type from "./Type";
import Frequency from "./Frequency";
import Target from "./Target";
import Adsr from "./Adsr";
import { logToLin } from "../../utils/conversion";

const Filter = () => {
  const { filterConfig, setFilterConfig } = useContext(SettingsContext);

  const freqPos = 2 * logToLin(filterConfig.frequency, 20, 20000);
  const targetPos = 2 * logToLin(filterConfig.target, 20, 20000);

  return (
    <Wrapper>
      <h2>Filter</h2>
      <Container>
        <SvgContainer>
          <svg width={200} height={80} fill="var(--color-accent)">
            {filterConfig.type === "lowpass" && (
              <polygon
                points={`0,30 ${freqPos},30 ${freqPos + 30},100 0,100`}
              />
            )}
            {filterConfig.type === "highpass" && (
              <polygon
                points={`${freqPos},30 200,30 200,100 ${freqPos - 30},100`}
              />
            )}
            <polygon />
          </svg>
          <TargetSvg width={200} height={80} fill="var(--color-main)">
            {filterConfig.type === "lowpass" && filterConfig.adsr !== "none" && (
              <polygon
                points={`0,30 ${targetPos},30 ${targetPos + 30},100 0,100`}
              />
            )}
            {filterConfig.type === "highpass" && filterConfig.adsr !== "none" && (
              <polygon
                points={`${targetPos},30 200,30 200,100 ${targetPos - 30},100`}
              />
            )}
            <polygon />
          </TargetSvg>
        </SvgContainer>
        <Type state={filterConfig} setState={setFilterConfig} />
      </Container>
      <Container>
        <SliderContainer>
          <Frequency state={filterConfig} setState={setFilterConfig} />
          <Target state={filterConfig} setState={setFilterConfig} />
        </SliderContainer>
        <Adsr state={filterConfig} setState={setFilterConfig} />
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

const SvgContainer = styled.div`
  width: 200px;
  height: 80px;
  background-color: var(--color-black);
  position: relative;
`;

const TargetSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 50%;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
`;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default Filter;
