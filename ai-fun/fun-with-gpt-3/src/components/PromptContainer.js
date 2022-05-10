import React from 'react';
import '../styles/PromptContainer.css';
import { Card } from './Card';

export const PromptContainer = ({ prompts, removePrompt }) => {
    const sortedPrompts = prompts.sort((promptA, promptB) => Number(promptB.id) - Number(promptA.id));

    const promptCards = sortedPrompts.map(prompt => {
        return (
            <Card 
                prompt={prompt.prompt}
                response={prompt.response}
                id={prompt.id}
                key={prompt.id}
                removePrompt={removePrompt}
            />
        )
    });

    return (
        <div className='prompt-container'>
            {promptCards}
        </div>
    )
}