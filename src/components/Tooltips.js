import { useContext } from 'react';
import styled from "styled-components";

import { SettingsContext } from '../contexts/SettingsContext';

const Tooltips = () => {
  const {tooltip} = useContext(SettingsContext)

  return (
    <Wrapper>
      <h2>Tooltips</h2>
      <TextWindow>{tooltip}</TextWindow>
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

const TextWindow = styled.div`
  flex: 1;
  margin-top: 16px;
  padding: 8px;
  background-color: var(--color-black);
`;

export default Tooltips;
