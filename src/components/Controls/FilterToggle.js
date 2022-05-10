import styled from "styled-components";

import { Button } from "../../styles/Styled";

const FilterToggle = ({ state, setState }) => {
  const style = {
    backgroundColor: "var(--color-accent)",
  };

  const handleClick = () => {
    setState((prevState) => ({
      ...prevState,
      filter: !prevState.filter,
    }));
  };

  return (
    <StyledButton onClick={handleClick} style={state.filter ? style : {}}>
      Filter
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  flex: 1;
`;

export default FilterToggle;
