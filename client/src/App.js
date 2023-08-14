import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Error, Register } from "./pages";
import Dashboard from "./pages/dashboard/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
