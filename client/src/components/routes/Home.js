import Artist from "./Artist"
import ArtistEdit from "./ArtistEdit"
import CreateArtist from "./ArtistCreate"
import { NavLink } from "react-router-dom"
import classical from "../../images/classical.jpg"
import beatles from "../../images/beatles.jpg"
import jazz from "../../images/DaveBrubeck.jpg"
import pop from "../../images/elton.jpg"
import hiphop from "../../images/biggie.jpg"
import disco from "../../images/EWF.jpg"


const Home = () => {
    return(
      <div className="main-div">
        <nav className="navbar">
        <h1>Groov-e</h1>
        <div className="navlinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/artist">Artists</NavLink>
          <NavLink to="/create-artist" >Add Artist</NavLink>
        </div>
        </nav>

        <h3>Welcome to Groov-e!</h3>
 
        <div className="genre-boxes">
        {/* <div className="genre-item"><img src={classical}/><NavLink to='/artist/classical'>Classical</NavLink></div>
          <div className="genre-item"><img src={beatles}/><NavLink to='/artist/classicrock'>Classic Rock</NavLink></div>
          <div className="genre-item"><img src={jazz}/><NavLink to='/artist/jazz'>Jazz</NavLink></div>
          <div className="genre-item"><img src={pop}/><NavLink to='/artist/pop'>Pop</NavLink></div>
          <div className="genre-item"><img src={hiphop}/><NavLink to='/artist/hiphop'>hip-hop</NavLink></div> */}
          {/* ******************************** */}

          <div className="genre-container"><NavLink to='/artist/classical'><div><img className="genre-item" src={classical}/></div><p>Classical</p></NavLink></div>
          <div className="genre-container"><NavLink to='/artist/disco'><div><img className="genre-item" src={disco}/></div><p>Disco</p></NavLink></div>
          <div className="genre-container"><NavLink to='/artist/classicrock'><div><img className="genre-item" src={beatles}/></div><p>Classic Rock</p></NavLink></div>
          <div className="genre-container"><NavLink to='/artist/jazz'><div><img className="genre-item" src={jazz}/></div><p>Jazz</p></NavLink></div>
          <div className="genre-container"><NavLink to='/artist/pop'><div><img className="genre-item " src={pop} /></div><p>Pop</p></NavLink></div>
          <div className="genre-container"><NavLink to='/artist/hiphop'><div><img className="genre-item " src={hiphop}/></div><p>Hip-Hop</p></NavLink></div>
        </div>


      </div>
        
    )
}

export default Home