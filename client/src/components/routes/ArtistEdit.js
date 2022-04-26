import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import ArtistForm from "../shared/ArtistForm";
import apiUrl from "../../apiConfig";


export default function ArtistEdit(){
  const navigate = useNavigate();
  const { id } = useParams();
  const [artist, setArtist] = useState({
    name:'',
    genre:'',
    years_active:'',
    bio:'',
    img:''
  })
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`${apiUrl}/${id}`);
        console.log("artistEdit", response);
        setArtist(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  
  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };

    const editedArtist = Object.assign(artist, updatedField);
    setArtist(editedArtist);

  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      url: `${apiUrl}/${id}`,
      method: "PUT",
      data: artist,
    })
      .then(() => setUpdated(true))
      .catch(console.error);
  };

  useEffect(() => {
    if (updated) {
      return navigate(`/${id}`);
    }
  }, []);

    return(
      <div >
      <ArtistForm
        artist={artist}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        cancelPath={`/${id}`}
      />
    </div>
    );
}