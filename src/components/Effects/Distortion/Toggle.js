import { Button } from "../../Styled";

const Toggle = ({ state, setState }) => {
  const style = {
    backgroundColor: "var(--color-accent)",
  };

  const handleClick = () => {
    setState((prevState) => ({
      ...prevState,
      on: !prevState.on,
    }));
  };
  return (
    <Button onClick={handleClick} style={state.on ? style : {}}>
      Distortion
    </Button>
  );
};

export default Toggle;
