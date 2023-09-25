import React, { useState } from 'react';
import axios from 'axios';

function NumberInputForm() {
    const [number, setNumber] = useState('');

    const handleNumberChange = (e) => {
        setNumber(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('/api/number/', { number })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                placeholder="Enter a number"
                value={number}
                onChange={handleNumberChange}
            />
            <button type="submit">Save Number</button>
        </form>
    );
}

export default NumberInputForm;
