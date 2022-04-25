let apiUrl
const apiUrls = {
  production: 'https://my-artists-api.herokuapp.com/artist',
  development: 'https://my-artists-api.herokuapp.com/artist'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl


// import axios from "axios";

// topics api
// export async function postArtist({ name, genre, years_active}) {
//   return axios.post(
//     'https://myartists-api.herokuapp.com/artist',{ name, genre, years_active }
//   );
// }
// const url = 'https://myartists-api.herokuapp.com/artist'
// export const getAllArtist = async () => {
//         try {
//             const response = await axios.get(`https://myartists-api.herokuapp.com/artist`)
//            return(response.data.artist)
           
//         } catch (error) {
//             console.log(error)
//         }
//     }


//     export const postArtist = async ({ name, genre, years_active}) => {
//       try {
//           const response = await axios.post(
//             'https://myartists-api.herokuapp.com/artist',{ name, genre, years_active }
//           );
//           return(response.data.artist)
        
//       } catch (error) {
//           console.log(error)
//       }
//   }