import { useContext } from "react";

import { AudioContext } from "../../contexts/AudioContext";

import Type from "./Type";
import Frequency from "./Frequency";
import Adsr from "./Adsr";

const Filter = () => {
  const { filterConfig, setFilterConfig } = useContext(AudioContext);

  return (
    <div>
      Filter
      <Type state={filterConfig} setState={setFilterConfig} />
      <Frequency
        parameter="frequency"
        state={filterConfig}
        setState={setFilterConfig}
      />
      <Frequency
        parameter="target"
        state={filterConfig}
        setState={setFilterConfig}
      />
      <Adsr state={filterConfig} setState={setFilterConfig} />
    </div>
  );
};

export default Filter;
