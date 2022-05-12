import React, { Component } from 'react';
import '../styles/Form.css';
const { Configuration, OpenAIApi } = require("openai");

export class Form extends Component {
    constructor() {
        super();
        this.state = {
            prompt: '',
            response: '',
            errorMessage: ''
        }
    }

    getAIResponse = () => {
        const configuration = new Configuration({
            apiKey: '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',
          });
        
        const openai = new OpenAIApi(configuration);
        
        openai.createCompletion("text-curie-001", {
            prompt: `List Three Facts About Giraffes: \n 1. Giraffes can reach heights of up to 18 feet tall and weight up to 1,600 pounds. \n 2. They have a long neck and legs that give them a surprising level of agility for their size. \n 3. Giraffes are the tallest living animals on Earth.
            List Three Facts About ${this.state.prompt}: `,
            temperature: 0.6,
            max_tokens: 150,
            top_p: 1,
            frequency_penalty: 0.52,
            presence_penalty: 0.5,
            stop: ["4."],
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
        if (this.state.prompt) {
            this.getAIResponse();
        } else {
            this.setState({errorMessage: "Sorry, you can't have three facts about nothing..."})
        }
    }

    createNewPrompt = () => {
        const newPrompt = {
            id: Date.now(),
            prompt: this.state.prompt,
            response: this.state.response
        }
        this.props.addPrompt(newPrompt);
        this.clearInputs();
    }

    clearInputs = () => {
        this.setState({prompt: '', response: '', errorMessage: ''});
    }

    handleChangePrompt = (event) => {
        this.setState({ prompt: event.target.value });
    }

    render() {
        return (
            <form>
                <input
                    type='text'
                    placeholder='Let me give you three facts about...'
                    name='prompt'
                    value={this.state.prompt}
                    onChange={event => this.handleChangePrompt(event)}
                    required='required'
                />
                <button className='btn btn-submit' onClick={event => this.submitPrompt(event)}>Submit</button>
                {this.state.errorMessage && <h3>{this.state.errorMessage}</h3>}
                {this.state.response && this.createNewPrompt()}
            </form>
        )
    }
}

