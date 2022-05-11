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
            prompt: `Three Facts About: Giraffes \n1. Giraffes are the tallest animals in the world. \n2. Giraffes can reach up to 18 feet tall and weigh up to 1,500 pounds. \n3. Giraffes have a long neck that they use. Three Facts About: ${this.state.prompt}`,
            temperature: 0.8,
            max_tokens: 100,
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
        if (this.state.prompt) {
            this.getAIResponse();
        } else {
            this.setState({errorMessage: "Please input something you'd like a fact about!"})
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
                <button onClick={event => this.submitPrompt(event)}>Submit</button>
                {this.state.errorMessage && <h4>{this.state.errorMessage}</h4>}
                {this.state.response && this.createNewPrompt()}
            </form>
        )
    }
}

