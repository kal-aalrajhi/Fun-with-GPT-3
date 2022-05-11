import React from 'react';
import '../styles/Card.css';

export const Card = ( {prompt, response, id, removePrompt} ) => {
    const formattedResponse = response.split(/\s(?=\d+\.)/);
    console.log(formattedResponse);
    
    return (
        <div className='card'>
            <h3>{prompt.toUpperCase()}</h3>
            <ul>
                <li>{formattedResponse[1]}</li>
                <li>{formattedResponse[2]}</li>
                <li>{formattedResponse[3]}</li>
            </ul>
            <button className='btn btn-remove' onClick={() => removePrompt(id)}>remove</button>
        </div>
    )
}