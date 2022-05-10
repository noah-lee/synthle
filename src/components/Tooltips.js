import styled from "styled-components";

const Tooltips = () => {
  return (
    <Wrapper>
      <h2>Tooltips</h2>
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

export default Tooltips;
