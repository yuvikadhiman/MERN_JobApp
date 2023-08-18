import { FormRow, FormRowSelect } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { JobsContainer, SearchContainer } from "../../components";


const AllJobs = () => {
  return (
    <>
      <>
      <SearchContainer />
      <JobsContainer />
    </>
    </>
  )
}

export default AllJobs
