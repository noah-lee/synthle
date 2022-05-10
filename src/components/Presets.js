import { useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "../contexts/SettingsContext";

import { presets } from "../data/presets";

const Presets = () => {
  const {
    setMasterConfig,
    setOscAConfig,
    setOscBConfig,
    setAdsrConfig,
    setFilterConfig,
    setLfoConfig,
    setReverbConfig,
    setDelayConfig,
    setDistortionConfig,
  } = useContext(SettingsContext);

  const options = Object.keys(presets);

  const handleChange = (ev) => {
    const preset = presets[ev.target.value];
    setMasterConfig(preset.master);
    setOscAConfig(preset.oscA);
    setOscBConfig(preset.oscB);
    setAdsrConfig(preset.adsr);
    setFilterConfig(preset.filter);
    setLfoConfig(preset.lfo);
    setReverbConfig(preset.reverb);
    setDelayConfig(preset.delay);
    setDistortionConfig(preset.distortion);
  };

  return (
    <Wrapper>
      <h2>Presets</h2>

      <Select onChange={handleChange} defaultValue="none">
        <option value="none" hidden={true} disabled={true}>
          Select Preset
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const Select = styled.select`
  background-color: var(--color-black);
  height: 24px;
  min-width: 160px;
  font-family: "Roboto Mono";
  color: var(--color-white);
`;

export default Presets;
