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
        filter: !prevState[oscId].filter,
      },
    }));
  };

  return (
    <StyledButton onClick={handleClick} style={state[oscId].filter ? style : {}}>
      Filter
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  flex: 1
`

export default Filter;
