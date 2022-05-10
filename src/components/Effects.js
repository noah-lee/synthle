import styled from "styled-components";

import Reverb from "./Effects/Reverb";
import Delay from "./Effects/Delay";
import Distortion from "./Effects/Distortion";

const Effects = () => {
  return (
    <Wrapper>
      <h2>Effects</h2>
      <Container>
        <Delay />
        <RightContainer>
          <Reverb />
          <Distortion />
        </RightContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 360px;
  height: 210px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-dark);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default Effects;
