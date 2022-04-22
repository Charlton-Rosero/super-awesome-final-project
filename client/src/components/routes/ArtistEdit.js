import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../shared/Layout";
import ArtistForm from "../shared/ArtistForm";
import apiUrl from '../../apiConfig';

function ArtistEdit() {
  const navigate = useNavigate();
  const { id } = useParams(); //get the id from the current object to update
  const [item, setItem] = useState({
    name: "",
    genre: "",
    years_active:"",
    members:"",
    labels:"",
    bio:"",

  });
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`${apiUrl}/${id}`);
        console.log("ArtistEdit", response);
        setItem(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleChange = (event) => {
    //created a placeholder grabbing the value from the user input form
    const updatedField = { [event.target.name]: event.target.value };
    //assigned the empty state with the updatedField into one object
    const editedItem = Object.assign(item, updatedField);
    //assigned the new object to be updated to the state
    setItem(editedItem);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      url: `${apiUrl}/${id}`,
      method: "PUT",
      data: item,
    })
      .then(() => setUpdated(true))
      .catch(console.error);
  };

  useEffect(() => {
    if (updated) {
      return navigate(`/${id}`);
    }
  }, []);

  return (
    <Layout>
      <ArtistForm
        item={item}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        cancelPath={`/${id}`}
      />
    </Layout>
  );
}

export default ArtistEdit;
