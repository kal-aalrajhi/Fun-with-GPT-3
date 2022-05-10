import React, { Component } from 'react';
import '../styles/Form.css';

export class Form extends Component {
    constructor() {
        super();
        this.state = {
            prompt: ''
            // response: ''
        }
    }

    submitPrompt = (event) => {
        event.preventDefault();
        const newPrompt = {
            id: Date.now(),
            ...this.state
            // API response here (taken care of by spread operator)
        }
        this.props.addPrompt(newPrompt);
        this.clearInputs();
    }

    clearInputs = () => {
        this.setState({prompt: '' }) // response: '' 
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        // this.setState({ prompt: event.target.value }); ^same as above, just less dynamic
    }

    render() {
        return (
            <form>
                <input
                    type='text'
                    placeholder='Enter a prompt here'
                    name='prompt'
                    value={this.state.prompt}
                    onChange={event => this.handleChange(event)}
                />
                <button onClick={event => this.submitPrompt(event)}>Submit</button>
            </form>
        )
    }
}