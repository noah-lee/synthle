import { useContext } from "react";

import { SettingsContext } from "../../contexts/SettingsContext";

import Type from "./Type";
import Frequency from "./Frequency";
import Adsr from "./Adsr";

const Filter = () => {
  const { filterConfig, setFilterConfig } = useContext(SettingsContext);

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
