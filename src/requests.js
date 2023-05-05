const API_KEY = "a412ccca593f38b6b2191ac1e54699a0"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/movie?api?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api?api_key=${API_KEY}&with_genres=99`,

};

export default requests; 


