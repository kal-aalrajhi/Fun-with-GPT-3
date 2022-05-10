import React from 'react';
import '../styles/PromptContainer.css';
import { Card } from './Card';

export const PromptContainer = () => {
    return (
        <div className='promptContainer'>
            <Card />
            <Card />
            <Card />
        </div>
    )
}