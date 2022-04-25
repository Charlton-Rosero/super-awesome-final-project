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
          <li key={artist._id}>
            <NavLink to={`/artist/${artist._id}`}>{artist.name}</NavLink>
          </li>
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
        <ul>
            {artistData}
        </ul>
      </div>
    );
}