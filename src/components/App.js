import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";
import Master from "./Master";
import Oscillator from "./Oscillator";
import Filter from "./Filter";
import Keyboard from "./Keyboard";
import Adsr from "./Adsr";
import Lfo from "./Lfo";
import Reverb from "./Reverb";
import Delay from "./Delay";
import Distortion from "./Distortion";

function App() {
  return (
    <>
      <GlobalStyles />
      <Main>
        <Master />
        <Oscillator id="oscA" />
        <Oscillator id="oscB" />
        <Filter />
        <Adsr id="adsrA" />
        <Adsr id="adsrB" />
        <Lfo />
        <Reverb />
        <Delay />
        <Distortion />
        <Keyboard />
      </Main>
    </>
  );
}

const Main = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export default App;
