import { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import apiUrl from "../../apiConfig";

export default function Artist(){
    const [artist, setArtist] = useState([]);
    const [deleted, setDeleted] = useState(false);
    const { id } = useParams();
    console.log('params', id)
    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios(`${apiUrl}/${id}`);
            
            setArtist(response.data.artist);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);

      useEffect(() => {
        if (!artist) {
          return <p>Loading...</p>;
        }
      }, [artist]);

      const destroy = () => {
        axios.delete(`${apiUrl}/${id}`)
          .then(() => setDeleted(true))
          .catch(console.error);
      };
      useEffect(() => {
        if (deleted) {
          return navigate("/");
        }
      }, [deleted, navigate]);
    
    
console.log(artist);
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
          <div className="artist">
                <h4>{artist.name}</h4>
                <p>Genre: {artist.genre}</p>
                <p>Years active: {artist.years_active}</p>
                { artist.labels ?  <p>Labels: {artist.labels}</p> : <p></p> }
                { artist.members ?  <p>Members: {artist.members}</p> : <p></p> }
                <h5>About the artist:</h5> <p>{artist.bio}</p>
          </div> 
                <button onClick={() => destroy()}>Delete Item</button>
                <NavLink to={`/artist/${id}/edit`}>
                  <button>Edit</button>
                </NavLink>
            <NavLink to="/artist">Back to Artist List</NavLink>
      </div>      
  );
}