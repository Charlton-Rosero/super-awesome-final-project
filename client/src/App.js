
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/routes/Home'
import { NavLink } from "react-router-dom";
import fetchData from './service/constants';
import Artist from './components/routes/Artist';
function App() {
fetchData()
  return (
    <div className="App">
      
      <Routes>
         <Route path="/home" element={<Home />} />
         <Route path="/artist" element={<Artist />} />
      </Routes>
    </div>
  );
}

export default App;
