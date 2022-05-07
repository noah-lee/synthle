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
    <Button onClick={handleClick} style={state[oscId].lfo ? style : {}} >
      LFO
    </Button>
  );
};

export default Filter;
