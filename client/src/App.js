
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes, useLocation } from 'react-router-dom'
import Jazz from './components/routes/Jazz';
import Artist from './components/routes/Artist';
import Home from './components/routes/Home';
import HipHop from './components/routes/HipHop';
import ClassicRock from './components/routes/ClassicRock';
import Classical from './components/routes/Classical';
import Pop from './components/routes/Pop';
function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} /> 
         <Route path="/artist" element={<Artist />} />
         <Route path="/jazz" element={<Jazz />} />
         <Route path="/hiphop" element={<HipHop />} />
         <Route path="/classic-rock" element={<ClassicRock />} />
         <Route path="/pop" element={<Pop />} />
         <Route path="/classical" element={<Classical />} />
      </Routes>
    </div>
  );
}

export default App;
