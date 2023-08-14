import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Landing,Error} from './pages'
function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/landing' element={<Landing/>}/>
      <Route path='*' element={<Error />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
