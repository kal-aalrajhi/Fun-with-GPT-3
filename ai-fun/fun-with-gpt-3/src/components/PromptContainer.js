import React from 'react';
import '../styles/PromptContainer.css';
import { Card } from './Card';

export const PromptContainer = () => {
    return (
        <div className='prompt-container'>
            <Card />
            <Card />
            <Card />
        </div>
    )
}