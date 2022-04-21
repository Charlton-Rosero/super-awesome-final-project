import axios from 'axios'


async function fetchData(){
    const DEFAULT_URL = `https://myartists-api.herokuapp.com/artist`
    try{
        const response = await axios.get(DEFAULT_URL)
        console.log(response.data.artist);

        return response.data
    
    }
    catch (error) {
        console.log(error)
    }  

}

export default fetchData