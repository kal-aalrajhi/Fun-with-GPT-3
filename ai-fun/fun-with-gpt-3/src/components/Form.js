import React, { Component } from 'react';
import '../styles/Form.css';
const { Configuration, OpenAIApi } = require("openai");

export class Form extends Component {
    constructor() {
        super();
        this.state = {
            prompt: '',
            response: ''
        }
    }

    getAIResponse = () => {
        const configuration = new Configuration({
            apiKey: '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',
          });
        
        const openai = new OpenAIApi(configuration);
        
        openai.createCompletion("text-curie-001", {
            prompt: `Generate animal description for the following animal: ${this.state.prompt}`,
            temperature: 0.8,
            max_tokens: 200,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
        .then((response) => {
            this.setState({
                ...this.state, 
                response: `${response.data.choices[0].text}`
            });
        })
        .catch(err => console.log('Error: ', err))
    }

    submitPrompt = (event) => {
        event.preventDefault();
        this.getAIResponse();
    }

    updateStuff = () => {
        const newPrompt = {
            id: Date.now(),
            prompt: this.state.prompt,
            response: this.state.response
        }
        this.props.addPrompt(newPrompt);
        console.log(newPrompt);
        this.clearInputs();
    }

    clearInputs = () => {
        this.setState({prompt: '', response: ''});
    }

    handleChange = (event) => {
        this.setState({ prompt: event.target.value });
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
                {this.state.response && this.updateStuff()}
            </form>
        )
    }
}