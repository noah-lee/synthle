import styled from "styled-components";
import {ReactComponent as SynthleIcon} from '../assets/Synthle_Icon.svg'

const Header = () => {
  return (
    <Wrapper>
      <Logo>
      <SynthleIcon width={64}/>
      <Name>Synthle.</Name>
      </Logo>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  max-width: 1024px;
  width: 100%;
  height: 120px;
  display: flex;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const Name = styled.h1`
  font-size: 3rem;
`

export default Header;
