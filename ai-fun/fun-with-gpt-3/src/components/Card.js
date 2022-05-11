import React from 'react';
import '../styles/Card.css';

export const Card = ( {prompt, response, id, removePrompt} ) => {
    return (
        <div className='card'>
            <h4>{prompt.toUpperCase()}</h4>
            <h4>Facts: {response}</h4>
            <button className='btn btn-remove' onClick={() => removePrompt(id)}>remove</button>
        </div>
    )
}