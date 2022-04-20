import axios from "axios";

async function fetchData() {
  try {
    const response = await axios(
      `http://localhost:3000/artist`
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default fetchData;
