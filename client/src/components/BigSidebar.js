import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/BigSidebar";
import { useDispatch, useSelector } from "react-redux";
import links from "../Utilis/links";
import { NavLink } from "react-router-dom";
import { toggleSidebar } from "../features/user/userSlice";

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  

  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? "sidebar-container "
            : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            {links.map((link) => {
              const { text, path, id, icon } = link;

              return (
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  key={id}
                >
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
