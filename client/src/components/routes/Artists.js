import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import apiUrl from "../../apiConfig";

export default function Artists(){
    const [artists, setArtists] = useState([]);

    const fetchData = async () => {
        try {
          const response = await axios(`${apiUrl}`);
          console.log(response.data.artist)
          setArtists(response.data.artist);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        fetchData();
      }, []);

      const artistData = artists.map((artist, index) => {
        return (
          <div key={artist._id}>
        <div className="genre-container"><NavLink to={`/artist/${artist._id}`}><div><img className="genre-item" src={artist.img}/></div><p>{artist.name}</p></NavLink>
          </div>
           
          </div>
        );
      });
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
        <h3 >List of all Artist</h3>
        <div className="genre-boxes">
            {artistData}
       </div>
      </div>
    );
}