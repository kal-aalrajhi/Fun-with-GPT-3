# Three Facts (Fun with GPT-3)
<img width="479" alt="Screen Shot 2022-05-11 at 9 51 16 PM" src="https://user-images.githubusercontent.com/97044701/167988535-eec92026-9422-47ff-9f9f-be384b4b5678.png">

#### Full Demo
![Three_Facts_Full_Demo](https://user-images.githubusercontent.com/97044701/168196109-15a43666-4227-4a4f-bfeb-2ec170e2ab6a.gif)

#### Deployable
- [Visit Three Facts Deployable](https://kal-aalrajhi.github.io/Fun-with-GPT-3/)

#### Getting Started
1. Clone the repo from [github](https://github.com/kal-aalrajhi/Fun-with-GPT-3).

2. Cd into the directory from your terminal and install the project dependencies:
- Run `npm install` or `npm i` in the terminal

3. You will need to generate your own API key from [OpenAI API](https://beta.openai.com/overview). 

4. Once you have the API key, do the following: 
- Open the repo in your favorite text editor and navigate to the `.env` file in the repo's root directorynavgiateToE
![navigateoEnv](https://user-images.githubusercontent.com/97044701/168192366-d4c3a28a-14b5-4d78-a37b-452ced6a3d54.png)

- In the `.env` file, assign the `REACT_APP_API_API_KEY=` variable to your assigned API key
![assignKeyToVariable](https://user-images.githubusercontent.com/97044701/168192743-3b2625dd-bf1e-40a1-a796-d21390d54ecf.png)

- Example: 
![dummyAPI](https://user-images.githubusercontent.com/97044701/168192785-0677078f-2e2d-4431-9288-5139187b59ee.png)

- Don't forget to save! You should be good to go now 👍🏽

5. To see the HTML page:
- Run `npm start` in the terminal
- Press `ctrl/cmd + c` to exit
6. Copy the local host address from your terminal and add to your web browser to see the HTML page


### Table of Contents
- [About the Project](#about-the-project)
- [Contributors](#contributors)
- [Technologies Used](#technologies-used)
- [Instructions on Use](#instructions-on-use)
- [Demo of Features](#demo-of-features)
- [Challenges and Wins](#challenges-and-wins)
- [Project Overview and Goals](#project-overview-and-goals)
- [Future Additons](#future-additons)
- [Deployable](#deployable)

#### About the Project
Did you know kangaroos are the only animals in the world that can walk backwards? Heck, if you're hankering for more kangaroo facts (or facts about anything else) try out Three Facts. This webapp allows users to type in the name of anything and get three facts about it! Users are encouraged to use nouns and verbs, but you're always welcome to goof around and see what the AI spits out! 

**Two additional** features have been added to the base requirements: 
1. *Remove card feature* where users can delete fact cards they no longer want. 
2. *Make the app more focused* where the app utilizes the AI to specifically provide three facts about the input.

This was part of the Fall 2022 Shopify Front End Developer Intern Challenge.

#### Contributors
 - [Kal Al-Rajhi](https://github.com/kal-aalrajhi)

#### Technologies Used
- React
- Javascript
- HTML
- CSS
- GPT-3 text-curie-001 AI Engine (from OpenAI)

#### Instructions on Use
Type in the name of anything, ideally a verb or noun, and then hit 'submit'. Users should see a card appear with the text the user input and three facts about it. That's it! 

Notice that the cards appear from most recent, to last input - thus each card that's created will be prioritized to the top. 

Users are welcome to remove cards they're no longer using.

Three Facts is completely tabbable, thus making it fully usable without a mouse!

#### Demo of Features
*note that all features shown are accessable with just a keyboard*

1. On page load users are prompted to input something they would like three facts about and a fact card appears display the users input as the card's title and three facts about the input.

![Add Fact Cards](https://media.giphy.com/media/L9Z1fKZ7XaMrVKBW4a/giphy.gif)

2. Users can delete as many fact cards and in any order they would like. 

![Delete Fact Cards](https://media.giphy.com/media/Vm64HC7ox5xHqM2YH7/giphy.gif)

#### Challenges and Wins

##### Challenges
- Unable to get deployable to work without openAI automatically cycling the working API.
##### Wins
- Learning to use React with only a couple days of experience with it and implementing GPT-3 with no prior experience.

#### Project Overview And Goals
- Use OOP to drive the design of the application and the code
- Gain competency with React fundamentals by creating my first React project
- Work with an API to send and receive data

#### Future Additions
- Full deployable
- Implement local storage to allow users to keep their cards on page reload
- Add more thematic styling
