import { useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "../../contexts/SettingsContext";

import Key from "./Key";
import Pitch from "./Pitch";

import notes from "../../data/notes";

const Keyboard = () => {
  const { masterConfig, setMasterConfig } = useContext(SettingsContext);

  const whiteKeys = notes.filter((note) => !note.note.includes("#"));
  const blackKeys = notes.filter((note) => note.note.includes("#"));

  const keySize = 60;
  const totalWidth = (notes[notes.length - 1].pos + 1) * (keySize + 1);

  return (
    <Wrapper>
      <Pitch state={masterConfig} setState={setMasterConfig} />
      <Keys totalWidth={totalWidth}>
        {notes.map((note) => (
          <Key key={note.id} note={note} keySize={keySize} />
        ))}
      </Keys>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;

const Keys = styled.div`
  position: relative;
  height: 160px;
  width: ${({ totalWidth }) => totalWidth + "px"};
`;

export default Keyboard;
