import React, { Component } from "react";
import Beers from "./Beers";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      beers: [],
      isLiked: false,
      text: "Don't Like",
    };
  }

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
      .then(res => res.json())
      .then(data => {
        this.setState({
          beers: data,
        });
      });
  }

  handleLike = id => {
    const filteredBeer = this.state.beers.filter(beer => beer.id === id);
    console.log("the beer", filteredBeer[0].id);
    if (filteredBeer[0].id === id) {
      this.setState({
        isLiked: !this.state.isLiked,
        text: this.state.isLiked ? "Like It" : "Don't Like",
      });
    }

    console.log(this.state.isLiked);
    console.log("filter", filteredBeer);
    console.log("value, id", id);
    console.log("id", id);
  };
  componentDidUpdate() {
    console.log("beers", this.state.beers);
    console.log("beers array", this.state.beers[0].id);
    // console.log("id", this.state.id);
  }

  render() {
    return (
      <div className="app">
        <Beers
          text={this.state.text}
          liked={this.state.isLiked}
          likeBeer={this.handleLike}
          beers={this.state.beers}
        />
      </div>
    );
  }
}

export default App;
