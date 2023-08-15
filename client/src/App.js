import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Landing, Error, Register } from "./pages";
import Dashboard from "./pages/dashboard/Dashboard";
import {
  Profile,
  AddJob,
  AllJobs,
  Stats,
  SharedLayout,
} from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center"/>
    </BrowserRouter>
  );
}

export default App;
