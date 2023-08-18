import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, logoutUser } from "../features/user/userSlice";

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const SidebarHandler = () => {
    dispatch(toggleSidebar());
  };
  const [showLogout, setShowLogout] = useState(false);

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={SidebarHandler}>
          <FaAlignLeft />
        </button>
        <div className="dashlogo">
          <Logo />
        </div>
        <div>
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button className="btn" onClick={() => setShowLogout(!showLogout)}>
            <FaUserCircle />
            {user.firstName}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button
              onClick={() => dispatch(logoutUser("Logout Successful!..."))}
              className="dropdown-btn"
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
