import { useState, useEffect } from 'react';
import Header from './compenents/Header';
import Movie from './compenents/Movie';
import axios from 'axios';
import './App.css';

const moviesList = `https://api.themoviedb.org/3/discover/movie?api_key=c9fd3a3ff02ea8c83f2640c4e7ec0e2e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=`;

function App() {

  const [movies, setMovies] = useState([])
  let [count, setCount] = useState(1)

  useEffect( async () => {

    await axios.get(moviesList + count)
          .then(res => { setMovies(res.data.results) })
  }, [])

  const Search = (query) => {
    setMovies(query)
  }

  const previousMovies = async () => {
    count = count-1;

    if (count <= 0) {
      count = 1
      setCount(count)
      return
    }else{
      setCount(count)
      await axios.get(moviesList + count)
            .then(res => { setMovies(res.data.results) })
    }
  }
  
  const nextMovies = async () => {
    count = count+1;

    if (count > 500) {
        count = 500;
        setCount(count);
        return
    }else{
        setCount(count)
        await axios.get(moviesList + count)
            .then(res => { setMovies(res.data.results) })
    }
  }

  return (
    <div className="App">
      <Header data = {Search} />
      <div className="next_back pt-4">
        <span className="backword-button">
          <button className="button btn-prev" onClick={ () =>  previousMovies()}>
            <i class="fas fa-angle-double-left"></i>
            <span className="texto prev-text">Prev</span>
          </button>
        </span>
        <span className="forword-button">
          <button className="button btn-next" onClick={ () =>  nextMovies()}>
            <span className="texto next-text">Next</span>
            <i className="fas fa-angle-double-right"></i>          
          </button>
        </span>
      </div>
      <div className="movies-container">
        {
          movies.map(movie => (
            <Movie key={movie.id} data={movie} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
