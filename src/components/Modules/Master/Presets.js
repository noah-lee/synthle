import { useContext, useState } from 'react';
import styled from 'styled-components';

import { SettingsContext } from '../../../contexts/SettingsContext';

import useDocumentTitle from '../../../hooks/use-document-title.hook';

import { presets } from '../../../data/presets';

const Presets = ({ tooltip }) => {
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
    handleMouseOver,
    handleMouseLeave,
  } = useContext(SettingsContext);

  const options = Object.keys(presets);

  const [preset, setPreset] = useState(null);

  const title = preset !== null ? `Synthle - ${preset}` : 'Synthle';
  useDocumentTitle(title, 'Synthle');

  const handleChange = (ev) => {
    const value = ev.target.value;
    setPreset(value);
    const preset = presets[value];
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
    <Wrapper
      onMouseOver={() => handleMouseOver(tooltip)}
      onMouseLeave={handleMouseLeave}
      onFocus={() => handleMouseOver(tooltip)}
      onBlur={handleMouseLeave}
    >
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
  font-family: 'Roboto Mono';
  color: var(--color-white);
`;

export default Presets;
