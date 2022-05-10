import React, { Component } from 'react';

export class App extends Component {
    constructor() {
        super();
        this.state = {
            prompt: []
        }
    }

    render() {
        return (
            <main className='App'>
                <h1>Fun with GPT-3!</h1>
            </main>
        )
    }
}