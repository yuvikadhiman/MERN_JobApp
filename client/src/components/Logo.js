import logo from "../assets/images/logo.png";
import styled from "styled-components";

const Logo = () => {
  return (
    <Wrapper>
      <img src={logo} alt="" className="logo" />
      <h5>
        <span>JOBSEARCHFLOW</span>
      </h5>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  .logo {
    width: 80px;
    height: 110px;
    padding: 2.4rem;
    margin-left: 0;
    padding-left: 0;
  }
  h5 {
    font-size: 1rem;
    font-weight: 700;
    margin-top: 1.4rem;
    span {
      color: var(--primary-500);
    }
  }
`;
export default Logo;
