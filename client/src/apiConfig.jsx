let apiUrl
const apiUrls = {
  production: 'https://myartists-api.herokuapp.com/artist',
  development: 'https://myartists-api.herokuapp.com/artist'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
