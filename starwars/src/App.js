import React, { Component } from "react";
import CharacterList from "./components/CharacterList";
import Pagination from "./components/Pagination";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      films: []
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ 
          starwarsChars: data.results,
          next: data.next,
          previous: data.previous,
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  previous = () => {
    console.log('previous');
    if (this.state.previous !== null) {
      this.getCharacters(this.state.previous)
    }
  }

  next = () => {
    console.log('next');
    this.getCharacters(this.state.next)
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList
          data={this.state.starwarsChars}
          films={this.state.films}
        />

        <Pagination
          previous={this.previous}
          next={this.next}
        />
      </div>
    );
  }
}

export default App;
