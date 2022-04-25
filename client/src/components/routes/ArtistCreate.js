import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ArtistForm from "../shared/ArtistForm";

import apiUrl from "../../apiConfig";


export default function ArtistCreate(){
  const navigate = useNavigate();
  const [artist, setArtist] = useState({
    name:'',
    genre:'',
    years_active:'',
    bio:''
  });

  const [createArtist, setCreatedArtist] = useState(null);

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };

    const editedArtist = Object.assign(artist, updatedField);
    setArtist(editedArtist);

  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      url: `${apiUrl}`,
      method: "POST",
      data: artist,
    }).then((res) => {
      setCreatedArtist(res.data.item).catch(console.error);
    });
  };

  useEffect(() => {
    if (createArtist) {
      return navigate(`/artist`);
    }
  }, [createArtist, navigate]);

    return(
      <div>
      <ArtistForm
        artist={artist}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        cancelPath="/"
      />
    </div>
    );
}