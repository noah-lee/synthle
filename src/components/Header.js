import styled from "styled-components";
import {ReactComponent as SynthleIcon} from '../assets/synthle_icon.svg'

const Header = () => {
  return (
    <Wrapper>
      <Logo>
      {/* <SynthleIcon width={64}/> */}
      <Name>Synthle.</Name>
      </Logo>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  max-width: 1144px;
  width: 100%;
  height: 80px;
  display: flex;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const Name = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: var(--color-accent);
`

export default Header;
