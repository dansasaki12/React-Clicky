import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from "./components/CharacterCard/CharacterCard.js";
import Wrapper from "./components/Wrapper/Wrapper.js";
import Navbar from "./components/Navbar/Navbar.js";
import Jumbotron from "./components/Jumbotron/Jumbotron.js";
import Footer from "./components/Footer/Footer.js";
import characters from "./characters.json";

class App extends Component {
  state = {
    guessArray: [],
    message: "Click an image to begin!",
    score: 0,
    topScore: 0,
    shake: 0
  };

  // Card is clicked
  clickCard = card => {
    let guessArray = this.state.guessArray;
    let score = this.state.score;
    // If we already clicked this card...
    if (guessArray[card.id]) {
      this.setState({
        message: "You already guessed that! Starting over!",
        topScore: Math.max(this.state.score, this.state.topScore),
        guessArray: [],
        score: 0,
        shake: 0.75      // Shake screen for 0.75 seconds
      })
      // Otherwise it was a good guess!
    } else {
      guessArray[card.id] = true;
      this.setState({
        message: "Good Guess!",
        guessArray: guessArray,
        score: ++score,
        shake: 0
      })
    }
  };

  // Render the page
  render() {
    return (
      <div>
        <Navbar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore} />
        <Jumbotron />
        {/* Use "reshake" to shake the page on a wrong answer */}
        
          <Wrapper>
            {characters
              .sort((a, b) => 0.5 - Math.random())
              .map(randomCard => (
                <CharacterCard
                  clickCard={this.clickCard}
                  id={randomCard.id}
                  key={randomCard.id}
                  image={randomCard.image} />))}
          </Wrapper>
        
        <Footer />
      </div>
    );
  }
}


export default App;
