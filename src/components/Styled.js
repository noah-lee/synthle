import styled from "styled-components"

export const Button = styled.button`
    background-color: var(--color-light);
    color: var(--color-main);
    font-size: 0.9rem;
    font-weight: bold;
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
  width: 24px;
  height: 100px;
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
  top: 88px;
  left: 12px;
  z-index: 3;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    position: relative;
    width: 24px;
    height: 24px;
    background-color: var(--color-accent);
    cursor: pointer;
  }
`;

export const VSliderTrack = styled.div`
  width: 24px;
  height: 100px;
  background: var(--color-black);
  z-index: 0;
`;

export const VSliderRange = styled.div`
  position: absolute;
  width: 24px;
  height: ${({ value, max }) => (value / max) * 100}%;
  background-color: var(--color-accent);
  top: ${({ value, max }) => 100 - (value / max) * 100}%;
  z-index: 1;
`;

export const VSliderText = styled.p`
  width: 100px;
  height: 24px;
  padding-right: 8px;
  transform: rotate(270deg);
  transform-origin: left;
  z-index: 4;
  position: absolute;
  top: 88px;
  left: 12px;
  pointer-events: none;
  line-height: 24px;
  text-align: end;
  opacity: 0.5;
`;

export const HSliderContainer = styled.div`
  position: relative;
  width: 100px;
  height: 24px;
`;

export const HSliderInput = styled.input`
  -webkit-appearance: none;
  background: transparent;
  margin: 0;
  padding: 0;
  width: 100px;
  z-index: 3;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    position: relative;
    width: 24px;
    height: 24px;
    background-color: var(--color-accent);
    cursor: pointer;
    z-index: 3;
  }
`;

export const HSliderTrack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 24px;
  background: var(--color-black);
  z-index: 0;
`;

export const HSliderRange = styled.div`
  position: absolute;
  width: ${({ value, max }) => (value / max) * 100}%;
  height: 24px;
  background-color: var(--color-accent);
  z-index: 1;
`;

export const HSliderText = styled.p`
  width: 100px;
  height: 24px;
  padding-right: 8px;
  z-index: 4;
  position: absolute;
  top: 0px;
  left: 0px;
  pointer-events: none;
  line-height: 24px;
  text-align: end;
  opacity: 0.5;
`;