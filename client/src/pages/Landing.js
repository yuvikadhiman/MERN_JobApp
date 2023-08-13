import React from "react";
import logo from "../assets/images/logo.png";
import styled from 'styled-components'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam at
            quam totam tenetur nam odit sed quae voluptate, suscipit dolor
            commodi velit, ipsum blanditiis nihil repudiandae cupiditate
            quibusdam. Maxime, optio!
          </p>
          <button className="btn btn-hero">Register</button>
          <button className="btn btn-hero">Login</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`
export default Landing;