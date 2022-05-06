import styled from "styled-components";
import {ReactComponent as SynthleIcon} from '../assets/Synthle_Icon.svg'

const Header = () => {
  return (
    <Wrapper>
      <SynthleIcon width={64}/>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  max-width: 1024px;
  width: 100%;
  height: 120px;
  display: flex;
`;


export default Header;
