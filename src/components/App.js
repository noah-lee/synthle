import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Footer from "./Footer";
import Master from "./Master";
import Oscillator from "./Oscillator";
import Filter from "./Filter";
import Keyboard from "./Keyboard";
import Adsr from "./Adsr";
import Lfo from "./Lfo";
import Effects from "./Effects";
import Tooltips from "./Tooltips";

function App() {
  return (
    <>
      <Wrapper>
        <GlobalStyles />
        <Header />
        <Controls>
          <Master />
          <Oscillator id="oscA" />
          <Oscillator id="oscB" />
          <Filter />
          <Adsr id="adsrA" />
          <Adsr id="adsrB" />
          <Lfo />
          <Effects />
          <Tooltips />
        </Controls>
      </Wrapper>
      <Keyboard />
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 32px;
`;

const Main = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Controls = styled.div`
  max-width: 1144px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
`;

export default App;
