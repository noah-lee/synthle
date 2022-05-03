import { useContext } from "react";

import { AudioContext } from "../../contexts/AudioContext";

import Key from "./Key";
import Pitch from "./Pitch";

import notes from "../../data/notes";

const Keyboard = () => {
  const { masterConfig, setMasterConfig } = useContext(AudioContext);

  return (
    <div>
      Keyboard
      {notes.map((note) => (
        <Key key={note.id} note={note} />
      ))}
      <Pitch state={masterConfig} setState={setMasterConfig} />
    </div>
  );
};

export default Keyboard;
