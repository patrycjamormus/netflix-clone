import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./row.css";

const base_URL = "https://image.tmdb.org/t/p/original";

function Row({title, fetchUrl, isLargeRow}) {
const [movies, setMovies] = useState([]);

useEffect (() => {

async function fetchData (){
    const request = await axios.get(fetchUrl);
    //zapytanie zwraca:"https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213"//
    setMovies (request.data.results);
    console.log(request);
    return request;
}
fetchData();
}, [fetchUrl]);


    return (
        <div className="row"> 
                <h2>{title}</h2>

                <div className="row_posters">
                    {}
                    {movies.map(movie => (
                        <img 
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${base_URL}${isLargeRow ? movie.poster_path: movie.backdrop_path }`} alt={movie.name}/> /*wyswietlanie obrazkow jako prostokat a nie poster - isLargeRow + movie.backdrop_path*/
                        
                        ))}
                </div>
        </div>
    )
}

export default Row
// mozliwosc uzycia w innym pliku tej zmiennej//
