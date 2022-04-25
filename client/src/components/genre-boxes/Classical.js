import axios from 'axios'
import { useState, useEffect } from 'react';
import apiUrl from '../../apiConfig';


function Classical(){
    const [artist, setArtist] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://my-artists-api.herokuapp.com/artist-genre/classical`)
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
        return <li key={artist._id}>{artist.name}</li>
    })

    return(
        <div>
            {artistData}
        </div>
    )
}

export default Classical