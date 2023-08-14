import styled from "styled-components";
import { useState, useEffect } from "react";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";
const initailState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  isMember: false,
};

const Register = () => {
  const [values, setValues] = useState(initailState);

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/* name field */}
        {!values.isMember && (
          <>
              <FormRow
                type="text"
                name="firstName"
                value={values.firstName}
                handleChange={handleChange}
              />
            <FormRow
              type="text"
              name="lastName"
              value={values.lastName}
              handleChange={handleChange}
            />
          </>
        )}
        {/* email field */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" >
          {/* {isLoading ? "loading..." : "submit"} */}
        </button>
        <button
          type="button"
          className="btn btn-block btn-hipster"
          // disabled={isLoading}
          // onClick={() =>
          //   dispatch(
          //     loginUser({ email: "testUser@test.com", password: "secret" })
          //   )
          // }
        >
          {/* {isLoading ? "loading..." : "demo app"} */}
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button"  className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    width: 70px;
    height: 70px;
    margin-bottom: 0.8rem;
  }
  .form {
    max-width: 500px;
    border-top: 5px solid var(--primary-500);
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`;

export default Register;
