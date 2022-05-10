import styled from "styled-components";

import { Button } from "../../styles/Styled";

const LfoToggle = ({ state, setState }) => {
  const style = {
    backgroundColor: "var(--color-accent)",
  };

  const handleClick = () => {
    setState((prevState) => ({
      ...prevState,
      lfo: !prevState.lfo,
    }));
  };

  return (
    <StyledButton onClick={handleClick} style={state.lfo ? style : {}}>
      LFO
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  flex: 1;
`;

export default LfoToggle;
