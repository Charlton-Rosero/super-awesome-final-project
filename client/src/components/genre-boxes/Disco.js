import axios from 'axios'
import { useState, useEffect } from 'react';
import { NavLink} from "react-router-dom";

function Disco(){
    const [artist, setArtist] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://my-artists-api.herokuapp.com/artist-genre/disco`)
            setArtist(response.data.artist)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    },[])

console.log(artist)

    const artistData = artist.map((artist, index) => {
        return (
        <li key={artist._id}>
           <NavLink to={`/artist/${artist._id}`}>{artist.name}</NavLink>
        
        </li>
        )
    })

    return(
        <div className='main-div'>
             <nav className="navbar">
            <h1>Groov-e</h1>
            <div className="navlinks">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/artist">Artists</NavLink>
              <NavLink to="/create-artist" >Add Artist</NavLink>
            </div>
          </nav>
            {artistData}
        </div>
    )
}

export default Disco