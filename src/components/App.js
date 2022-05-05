import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";
import Master from "./Master";
import Oscillator from "./Oscillator";
import Filter from "./Filter";
import Keyboard from "./Keyboard";
import Adsr from "./Adsr";
import Lfo from "./Lfo";

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
