import Master from "./Master";
import Oscillator from "./Oscillator";
import Filter from "./Filter";
import Keyboard from "./Keyboard";
import Adsr from "./Adsr";
import Lfo from "./Lfo";

function App() {
  return (
    <div>
      <Master />
      <Oscillator id="oscA" />
      <Oscillator id="oscB" />
      <Filter />
      <Adsr id="adsrA" />
      <Adsr id="adsrB" />
      <Lfo />
      <Keyboard />
    </div>
  );
}

export default App;
