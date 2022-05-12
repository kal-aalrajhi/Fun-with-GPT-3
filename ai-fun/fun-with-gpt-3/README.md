# Three Facts (Fun with GPT-3)


#### Getting Started
1. Clone the repo from [github](https://github.com/kal-aalrajhi/Fun-with-GPT-3).
2. Cd into the directory from your terminal and install the project dependencies:
- Run `npm install` or `npm i` in the terminal
3. To see the HTML page:
- Run `npm start` in the terminal
- Press `ctrl/cmd + c` to exit
4. Copy the local host address from your terminal and add to your web browser to see the HTML page

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
- Fetch API
- WAI-ARIA
- Lighthouse

#### Instructions on Use
Type in the name of anything, ideally a verb or noun, and then hit 'submit'. Users should see a card appear with the text the user input and three facts about it. That's it! 

Notice that the cards appear from most recent, to last input - thus each card that's created will be prioritized to the top. 

Users are welcome to remove cards they're no longer using.

Three Facts is completely tabbable, thus making it fully usable without a mouse!

Finally, with the use of semantic tags and WAI-ARIA tags, the website is screen reader friendly.

#### Demo of Features
*note that all features shown are accessable with just a keyboard*

1. On page load users are prompted to input something they would like three facts about and a fact card appears display the users input as the card's title and three facts about the input.

![Add Fact Cards](https://media.giphy.com/media/L9Z1fKZ7XaMrVKBW4a/giphy.gif)

2. Users can delete as many fact cards and in any order they would like. 

![Delete Fact Cards](https://media.giphy.com/media/Vm64HC7ox5xHqM2YH7/giphy.gif)

#### Challenges and Wins

##### Challenges
- Learning to use React with only a couple days of experience with it and implementing GPT-3 with no prior experience.
##### Wins
- Working with asynchronous features and making sure the web app fully accessable.

#### Project Overview And Goals
- Use OOP to drive the design of the application and the code
- Gain competency with React fundamentals by creating my first React project
- Work with an API to send and receive data

#### Future Additions
- Fix logged issues (see Github Issues) / add more error handling
- Implement local storage to allow users to keep their cards on page reload
- Add more thematic styling

#### Deployable
- [Visit Overlook-Hotel](https://kal-aalrajhi.github.io/overlook-hotel/)