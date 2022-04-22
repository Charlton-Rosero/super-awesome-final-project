import axios from 'axios'
import { useState, useEffect } from 'react';
import apiUrl from '../../apiConfig';


function Jazz(){
    const [artist, setArtist] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get(`${apiUrl}/jazz`)
           
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
        return <li key={artist._id}>
            {artist.name}
        </li>
    })

    return(
        <div>
            {artistData}
        </div>
    )

}

export default Jazz

