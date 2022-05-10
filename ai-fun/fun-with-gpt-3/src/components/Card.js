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




// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: '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',
// });
// const openai = new OpenAIApi(configuration);

// const response = await openai.createCompletion("text-curie-001", {
//   prompt: "Generate animal description for the following animal: Giraffe",
//   temperature: 0.8,
//   max_tokens: 200,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
// });