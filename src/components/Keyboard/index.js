import { useContext } from "react";

import { SettingsContext } from "../../contexts/SettingsContext";

import Key from "./Key";
import Pitch from "./Pitch";

import notes from "../../data/notes";

const Keyboard = () => {
  const { masterConfig, setMasterConfig } = useContext(SettingsContext);

  // const blackNotes = notes.map(note => {
  //   console.log(note);
  // })

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
