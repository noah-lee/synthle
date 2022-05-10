import { useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "../contexts/SettingsContext";

import GlobalStyles from "../styles/GlobalStyles";
import Header from "./Header";
import Master from "./Master";
import Oscillator from "./Oscillator";
import Filter from "./Filter";
import Keyboard from "./Keyboard";
import Adsr from "./Adsr";
import Lfo from "./Lfo";
import Effects from "./Effects";
import Tooltips from "./Tooltips";

function App() {
  const { oscAConfig, setOscAConfig, oscBConfig, setOscBConfig } =
    useContext(SettingsContext);
  return (
    <>
      <Wrapper>
        <GlobalStyles />
        <Header />
        <Controls>
          <Master />
          <Oscillator state={oscAConfig} setState={setOscAConfig} />
          <Oscillator state={oscBConfig} setState={setOscBConfig} />
          <Filter />
          <Adsr id="adsrA" />
          <Adsr id="adsrB" />
          <Lfo />
          <Effects />
          {/* <Tooltips /> */}
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
