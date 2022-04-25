
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom"
import  Button  from "react-bootstrap/Button";
const ArtistForm = ({artist, handleSubmit, handleChange, cancelPath}) => {

  return (
    <div className="main-div">
        <nav className="navbar">
        <h1>Groov-e</h1>
        <div className="navlinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/artist">Artists</NavLink>
          <NavLink to="/create-artist" >Add Artist</NavLink>
        </div>
        </nav>
    <form onSubmit={handleSubmit}>
      <div className="form">
      <input
        placeholder="Artist name"
        defaultValue={artist.name}
        name="name"
        onChange={(e) => handleChange(e)}
      /><br/>
     
    
      <input
        placeholder="genre"
        defaultValue={artist.genre}
        name="genre"
        onChange={(e) => handleChange(e)}
      /><br/>
     
     
      <input
        placeholder="active years"
        defaultValue={artist.years_active}
        name="years_active"
        onChange={(e) => handleChange(e)}
      /><br/>
     
   
      <textarea cols={30} rows={5} type='text'
        placeholder="About the artist"
        defaultValue={artist.bio}
        name="bio"
        onChange={(e) => handleChange(e)}/>
  
     </div>
       <Button type="submit">Submit</Button>
       <> </>
      <Link to={cancelPath}>
        <Button>Back to Home</Button>
      </Link>
      
    </form>
    </div>
  );
};

export default ArtistForm;