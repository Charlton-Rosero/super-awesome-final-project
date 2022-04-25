
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes, useLocation } from 'react-router-dom'
import Artist from './components/routes/Artist';
import Home from './components/routes/Home';
import ArtistCreate from './components/routes/ArtistCreate';
import ArtistEdit from './components/routes/ArtistEdit';
import Artists from './components/routes/Artists';
import Classical from './components/genre-boxes/Classical';
import ClassicRock from './components/genre-boxes/ClassicRock';
import Jazz from './components/genre-boxes/Jazz';
import HipHop from './components/genre-boxes/HipHop';
import Pop from './components/genre-boxes/Pop';




function App() {

  return (
    <div className="App">

      
      <Routes>
        <Route path="/" element={<Home />} /> 
         <Route path="/artist" element={<Artists />} />
         <Route path="/create-artist" element={<ArtistCreate />} />  
         <Route path="/artist/:id" element={<Artist />} />
         <Route path="/artist/:id/edit" element={<ArtistEdit />} />
         <Route path="/artist/classical" element={<Classical/>} />
         <Route path="/artist/classicrock" element={<ClassicRock/>} />
         <Route path="/artist/pop" element={<Pop />} />
         <Route path="/artist/jazz" element={<Jazz />} />
         <Route path="/artist/hiphop" element={<HipHop />} />
      </Routes>


    </div>
  );
}



export default App;
