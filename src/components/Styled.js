import styled from "styled-components"

export const Button = styled.button`
    background-color: var(--color-light);
    color: var(--color-main);
    font-size: 0.9rem;
    border: none;
    padding: 4px;
    cursor: pointer;
    min-width: 24px;
`

export const EmptyButton = styled.button`
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
`

export const VSliderContainer = styled.div`
  position: relative;
  width: 16px;
  height: 100px;
  margin: 8px;
`;

export const VSliderInput = styled.input`
  -webkit-appearance: none;
  background: transparent;
  margin: 0;
  padding: 0;
  transform: rotate(270deg);
  transform-origin: left;
  width: 100px;
  position: absolute;
  top: 92px;
  left: 8px;
  z-index: 3;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    position: relative;
    width: 16px;
    height: 16px;
    background-color: var(--color-accent);
    cursor: pointer;
  }
`;

export const VSliderTrack = styled.div`
  width: 16px;
  height: 100px;
  background: var(--color-black);
  z-index: 0;
`;

export const VSliderRange = styled.div`
  position: absolute;
  width: 16px;
  height: ${({ value, max }) => (value / max) * 100}%;
  background-color: var(--color-accent);
  top: ${({ value, max }) => 100 - (value / max) * 100}%;
  z-index: 1;
`;