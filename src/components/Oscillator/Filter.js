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
    <Button onClick={handleClick} style={state[oscId].filter ? style : {}}>
      Filter
    </Button>
  );
};

export default Filter;
