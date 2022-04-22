
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes, useLocation } from 'react-router-dom'
import Jazz from './components/routes/Jazz';
import { NavLink } from "react-router-dom";

import Artist from './components/routes/Artist';
function App() {

  return (
    <div className="App">
         <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/artist">Artist</NavLink>
        <NavLink to="/jazz">
          Jazz
        </NavLink>
        </nav>    
      
      <Routes>
         
         <Route path="/artist" element={<Artist />} />
         <Route path="/jazz" element={<Jazz />} />
      </Routes>
    </div>
  );
}

export default App;
