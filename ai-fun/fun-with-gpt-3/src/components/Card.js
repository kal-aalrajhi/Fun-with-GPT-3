import React from 'react';
import '../styles/Card.css';

export const Card = ( {prompt, response, id, removePrompt} ) => {
    return (
        <div className='card'>
            <h4>Prompt: {prompt}</h4>
            <h4>Response: {response}</h4>
            <button onClick={() => removePrompt(id)}>❌</button>
        </div>
    )
}