import { useState } from 'react';
import { FormRow } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUser } from '../../features/user/userSlice';

const Profile = () => {
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    location: user?.location || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, email, lastName, location } = userData;
    if (!firstName || !email || !lastName || !location) {
      toast.error("please fill out all fields");
      return;
    }
    dispatch(updateUser(userData));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>

        <div className="form-center">
          <FormRow
            type="text"
            name="firstName"
            value={userData.firstName}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="lastName"
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormRow
            type="email"
            name="email"
            value={userData.email}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="location"
            value={userData.location}
            handleChange={handleChange}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please Wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
