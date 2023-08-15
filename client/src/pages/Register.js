import { toast } from "react-toastify";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const initailState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const navigate = useNavigate();

  //  redux
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  // usestate
  const [values, setValues] = useState(initailState);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, isMember } = values;
    if (!email || !password || (!isMember && !firstName)) {
      toast.error("Please Fill Out Empty Fields");
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(
      registerUser({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
    );
  };
 const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [user]);
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
        <button type="submit" className="btn btn-block" disable={isLoading}>
          {isLoading ? "loading..." : "submit"}
        </button>
        <button
          type="button"
          className="btn btn-block btn-hipster"
          disabled={isLoading}
          onClick={() =>
            dispatch(
              loginUser({ email: "testUser@test.com", password: "secret" })
            )
          }
        >
          {isLoading ? "loading..." : "demo app"}
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
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
