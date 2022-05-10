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
                response: `${response.data.choices[0].text}`
            });

            const newPrompt = {
                id: Date.now(),
                ...this.state
            }
            this.props.addPrompt(newPrompt);
            this.clearInputs();
        })
        .catch(err => console.log('Error: ', err));
    }

    submitPrompt = (event) => {
        event.preventDefault();
        this.getAIResponse();
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







// export class Form extends Component {
//     constructor() {
//         super();
//         this.state = {
//             prompt: ''
//             // response: ''
//         }
//     }

//     getAIResponse = () => {
//         const configuration = new Configuration({
//             apiKey: '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',
//           });
        
//         const openai = new OpenAIApi(configuration);

//         openai.createCompletion("text-curie-001", {
//             prompt: `Generate animal description for the following animal: ${this.state.prompt}`,
//             temperature: 0.8,
//             max_tokens: 200,
//             top_p: 1,
//             frequency_penalty: 0,
//             presence_penalty: 0,
//         })
//         .then((response) => {
//             console.log(response);
//             this.setState({
//                 response: response
//             });
//         })
//     }

//     submitPrompt = (event) => {
//         event.preventDefault();
//         this.getAIResponse();
//         const newPrompt = {
//             id: Date.now(),
//             ...this.state
//             // API response here (taken care of by spread operator)
//         }
//         this.props.addPrompt(newPrompt);
//         this.clearInputs();
//     }

//     clearInputs = () => {
//         this.setState({prompt: '' }) // response: '' 
//     }

//     handleChange = (event) => {
//         this.setState({ [event.target.name]: event.target.value });
//         // this.setState({ prompt: event.target.value }); ^same as above, just less dynamic
//     }

//     render() {
//         return (
//             <form>
//                 <input
//                     type='text'
//                     placeholder='Enter a prompt here'
//                     name='prompt'
//                     value={this.state.prompt}
//                     onChange={event => this.handleChange(event)}
//                 />
//                 <button onClick={event => this.submitPrompt(event)}>Submit</button>
//             </form>
//         )
//     }
// }