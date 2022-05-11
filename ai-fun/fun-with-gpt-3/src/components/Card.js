import React from 'react';
import '../styles/Card.css';

export const Card = ( {prompt, response, id, removePrompt} ) => {
    return (
        <div className='card'>
            <h3>{prompt.toUpperCase()}</h3>
            <p>Facts: {response}</p>
            <button className='btn btn-remove' onClick={() => removePrompt(id)}>remove</button>
        </div>
    )
}