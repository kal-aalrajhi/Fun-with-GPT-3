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
                <h1>Three Facts</h1>
                <h2>A simple way to learn three things about one thing!</h2>
                <Form addPrompt={this.addPrompt} />
                {!this.state.prompts.length && <h3>For best results input a single noun or verb like Giraffes, Running, or Pizza</h3>}
                <PromptContainer prompts={this.state.prompts} removePrompt={this.removePrompt} />
            </main>
        )
    }
}
