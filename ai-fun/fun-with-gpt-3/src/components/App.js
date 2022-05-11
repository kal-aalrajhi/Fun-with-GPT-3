import React, { Component } from 'react';
import { Form } from './Form';
import { PromptContainer } from './PromptContainer'
import '../styles/App.css';

export class App extends Component {
    constructor() {
        super();
        this.state = {
            prompts: []
        }
    }

    addPrompt = (newPrompt) => {
        this.setState({ prompts: [...this.state.prompts, newPrompt] });
    }

    removePrompt = (id) => {
        const filteredPrompts = this.state.prompts.filter(prompt => prompt.id !== id);
        this.setState({ prompts: filteredPrompts });
    }

    render() {
        return (
            <main className='App container'>
                <h1>Ready to learn something new?</h1>
                <h2>For best results input a single noun or verb</h2>
                <Form addPrompt={this.addPrompt} />
                {!this.state.prompts.length && <h2>Suggestions: Giraffes, Running, or Pizza</h2>}
                <PromptContainer prompts={this.state.prompts} removePrompt={this.removePrompt} />
            </main>
        )
    }
}
