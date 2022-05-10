import React from 'react';
import '../styles/PromptContainer.css';
import { Card } from './Card';

export const PromptContainer = ({ prompts }) => {
    const promptCards = prompts.map(prompt => {
        return (
            <Card 
                prompt={prompt.prompt}
                response={prompt.response}
                id={prompt.id}
                key={prompt.id}
            />
        )
    });
    return (
        <div className='prompt-container'>
            {promptCards}
        </div>
    )
}