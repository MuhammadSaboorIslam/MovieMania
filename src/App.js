import {useEffect, useState} from 'react'
import "./App.css"
import SearchIcon from "./search.svg"
import MovieCard from './MovieCard'

const App = () =>{
    const API_URL = "https://www.omdbapi.com?apikey=4280eb5b"
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        console.log(data.Search)
        setMovies(data.Search)
    }


    
    return(
        <div className='app'>
            <h1>MovieMania</h1>
            <div className="search">
                <input type="text" placeholder='Search for Movies' value={searchTerm} onChange={(event) => {setSearchTerm(event.target.value)}}/>
                <img src={SearchIcon} alt="Search" onClick={() => {searchMovies(searchTerm)}} />
            </div>
            {
                typeof movies !== "undefined" ?
                (<div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie}/>
                    ))}
                </div>):(
                <div className="empty">
                    <h2>No Movies Found :(</h2>
                </div>
            )
            }

        </div>
    );
}

export default App