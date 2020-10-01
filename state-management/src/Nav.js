import React, { useContext } from 'react';
import './Nav.css';
import {MovieContext} from './MovieContext';
import Movie from './Movie';


function Nav(){

    const [movies,setMovies] = useContext(MovieContext)

    return(
        <nav className="nav">
          <h3>Fred</h3>
    <p className="nav-links">List of Movies: {movies.length}</p>  
        </nav>
    );
}

export default Nav;