import { useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "../contexts/SettingsContext";

import FilterType from "./Controls/FilterType";
import Range from "./Controls/Range";
import AdsrToggle from "./Controls/AdsrToggle";

import { logToLin } from "../utils/conversion";

import { Module } from '../styles/Styled';

const Filter = () => {
  // Filter settings
  const { filterConfig, setFilterConfig, handleMouseOver, handleMouseLeave } =
    useContext(SettingsContext);

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

  // Tooltips
  const filterTooltip =
    "Filter module modifies the sound by 'cutting' ranges of frequencies based on its shape and cutoff points.";
  const svgTooltip = "Visual representation of the filter shape, as well as the cutoff and target frequencies."
  const filterTypeTooltip =
    "Filter's two most basic shapes are lowpass (cutting frequencies above cutoff frequency) and highpass (cutting frequencies below cutoff frequency).";
  const freqTooltip = "Filter frequency controls the cutoff frequency."
  const targetTooltip = "If routed to ADSR, Filter target will define the maximum cutoff frequency reached after the attack time. Hover over the ADSR modules to learn more."
  const adsrTooltip = "Toggle between routing the filter output to the ADSR envelope modules A, B or bypass them. Hover over the ADSR modules to learn more."

  return (
    <Module>
      <h2
        onMouseOver={() => handleMouseOver(filterTooltip)}
        onMouseLeave={handleMouseLeave}
      >
        Filter
      </h2>
      <Container>
        <SvgContainer
          onMouseOver={() => handleMouseOver(svgTooltip)}
          onMouseLeave={handleMouseLeave}
        >
          <FilterSvg>
            <polygon points={filterPolygon} />
          </FilterSvg>
          {filterConfig.adsr !== "none" && (
            <TargetSvg>
              <polygon points={targetPolygon} />
            </TargetSvg>
          )}
        </SvgContainer>
        <FilterType state={filterConfig} setState={setFilterConfig} tooltip={filterTypeTooltip} />
      </Container>
      <Container>
        <Range
          state={filterConfig}
          setState={setFilterConfig}
          parameter="frequency"
          name="Freq"
          type="frequency"
          min={20}
          max={20000}
          tooltip={freqTooltip}
        />
        <Range
          state={filterConfig}
          setState={setFilterConfig}
          parameter="target"
          name="Target"
          type="frequency"
          min={20}
          max={20000}
          tooltip={targetTooltip}
        />
      </Container>
      <AdsrToggle state={filterConfig} setState={setFilterConfig} tooltip={adsrTooltip} />
    </Module>
  );
};

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
