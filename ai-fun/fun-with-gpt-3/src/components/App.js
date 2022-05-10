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
                <h1>Fun with GPT-3!</h1>
                <Form addPrompt={this.addPrompt} />
                {!this.state.prompts.length && <h2>No prompts yet -- add some!</h2>}
                <PromptContainer prompts={this.state.prompts} removePrompt={this.removePrompt} />
            </main>
        )
    }
}

// Sample Prompt/response
// [
//     { id: 1, prompt: 'Best bagel toppings', response: 'creamcheese, olive, orange jam' },
//     { id: 2, prompt: 'Worst bagel toppings', response: 'pepper, corn bread, grape' },
//     { id: 3, prompt: 'Best pizza toppings', response: 'onion, olive, pineapple' }
// ]