import Artist from "./Artist"
import ArtistEdit from "./ArtistEdit"
import CreateArtist from "./ArtistCreate"
import { NavLink } from "react-router-dom"
import classical from "../../images/classical.jpg"
import beatles from "../../images/beatles.jpg"
import jazz from "../../images/DaveBrubeck.jpg"
import pop from "../../images/elton.jpg"
import hiphop from "../../images/biggie.png"


const Home = () => {
    return(
      <div>
        <nav className="navbar">
        <h1>Groov-e</h1>
        <div className="navlinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/artist">Artists</NavLink>
          <NavLink to="/create-artist" >Add Artist</NavLink>
        </div>
        </nav>

        <h4>Welcome to Groov-e!</h4>

        <div className="genre-boxes">
        {/* <div className="genre-item"><img src={classical}/><NavLink to='/artist/classical'>Classical</NavLink></div>
          <div className="genre-item"><img src={beatles}/><NavLink to='/artist/classicrock'>Classic Rock</NavLink></div>
          <div className="genre-item"><img src={jazz}/><NavLink to='/artist/jazz'>Jazz</NavLink></div>
          <div className="genre-item"><img src={pop}/><NavLink to='/artist/pop'>Pop</NavLink></div>
          <div className="genre-item"><img src={hiphop}/><NavLink to='/artist/hiphop'>hip-hop</NavLink></div> */}
          {/* ******************************** */}
          <NavLink to='/artist/classical'><img className="genre-item" src={classical}/></NavLink>
          <NavLink to='/artist/classicrock'><img className="genre-item" src={beatles}/></NavLink>
          <NavLink to='/artist/jazz'><img className="genre-item" src={jazz}/></NavLink>
          <NavLink to='/artist/pop'><img className="genre-item change_height" src={pop} /></NavLink>
          <NavLink to='/artist/hiphop'><img className="genre-item change_height" src={hiphop}/></NavLink>
        </div>


      </div>
        
    )
}

export default Home