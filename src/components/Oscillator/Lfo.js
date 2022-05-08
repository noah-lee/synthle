import styled from "styled-components"

import { Button } from '../Styled';

const Filter = ({ oscId, state, setState }) => {
  const style = {
    backgroundColor: "var(--color-accent)",
  };

  const handleClick = () => {
    setState((prevState) => ({
      ...prevState,
      [oscId]: {
        ...prevState[oscId],
        lfo: !prevState[oscId].lfo,
      },
    }));
  };

  return (
    <StyledButton onClick={handleClick} style={state[oscId].lfo ? style : {}} >
      LFO
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  flex: 1
`

export default Filter;
