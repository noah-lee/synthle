import { useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "../contexts/SettingsContext";

import FilterTypeSelect from "./Controls/FilterTypeSelect";
import FrequencyRange from "./Controls/FrequencyRange";
import AdsrSelect from "./Controls/AdsrSelect";

import { logToLin } from "../utils/conversion";

const Filter = () => {
  // Filter settings
  const { filterConfig, setFilterConfig } = useContext(SettingsContext);

  // Filter frequency SVG
  const freqSvgPos = logToLin(filterConfig.frequency, 20, 20000) * 2.4;
  const filterPolygon =
    filterConfig.type === "lowpass"
      ? `0,30 ${freqSvgPos}, 30 ${freqSvgPos + 30},100 0,100`
      : `${freqSvgPos},30 240,30 240,100 ${freqSvgPos - 30},100`;

  // Filter target SVG
  const targetSvgPos = logToLin(filterConfig.target, 20, 20000) * 2.4;
  const targetPolygon =
    filterConfig.type === "lowpass"
      ? `0,30 ${targetSvgPos}, 30 ${targetSvgPos + 30},100 0,100`
      : `${targetSvgPos},30 240,30 240,100 ${targetSvgPos - 30},100`;

  return (
    <Wrapper>
      <h2>Filter</h2>
      <Container>
        <SvgContainer>
          <FilterSvg>
            <polygon points={filterPolygon} />
          </FilterSvg>
          {filterConfig.adsr !== "none" && (
            <TargetSvg>
              <polygon points={targetPolygon} />
            </TargetSvg>
          )}
        </SvgContainer>
        <FilterTypeSelect state={filterConfig} setState={setFilterConfig} />
      </Container>
      <Container>
        <FrequencyRange
          state={filterConfig}
          setState={setFilterConfig}
          parameter="frequency"
          name="Freq"
          min={20}
          max={20000}
        />
        <FrequencyRange
          state={filterConfig}
          setState={setFilterConfig}
          parameter="target"
          name="Target"
          min={20}
          max={20000}
        />
      </Container>
      <AdsrSelect state={filterConfig} setState={setFilterConfig} />
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
  width: 240px;
  height: 80px;
  background-color: var(--color-black);
  position: relative;
`;

const FilterSvg = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  fill: var(--color-accent);
`;

const TargetSvg = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  fill: var(--color-main);
  opacity: 0.25;
`;

export default Filter;
