import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            prompt: ''
        }
    }

    render() {
        return (
            <form>
                <input
                    type='text'
                    placeholder='Enter a prompt here'
                    name='prompt'
                    value={this.state.prompt}
                />
                <button>Submit</button>
            </form>
        )
    }
}