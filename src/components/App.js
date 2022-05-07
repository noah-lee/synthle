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
import Reverb from "./Reverb";
import Delay from "./Delay";
import Distortion from "./Distortion";

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      <Main>
        <Controls>
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
        </Controls>
        <Keyboard />
      </Main>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
`;

const Main = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Controls = styled.div`
  max-width: 1024px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 32px;
`;

export default App;
