import styled from "styled-components";

import Key from "./Key";

import notes from "../../data/notes";

const Keyboard = () => {
  const keySize = 60;
  const totalWidth = (notes[notes.length - 1].pos + 1) * (keySize + 1);

  return (
    <Wrapper>
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
  width: 100%;
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
