import React, {useState, useContext } from 'react';
import {MovieContext} from './MovieContext';

function AddMovie(){

    const [movies, setMovies] = useContext(MovieContext);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updatePrice = (e) => {
        setPrice(e.target.value);
    }

    const addMovie = (e) => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {name: name, price: price}]);
        
    }

    return (
        <form onSubmit={addMovie}>
            <label for='name'>Name</label>
            <input 
                id='name'
                type='text' 
                name="name" 
                value={name} 
                onChange={updateName} 
            />
            <label for='price'>Price</label>
            <input 
                id='price'
                type='text' 
                name="price" 
                value={price}
                onChange={updatePrice} 
            />
            <button>Submit</button>
        </form>
    );
}

export default AddMovie;