import React, { Component } from "react";
import API from "../utils/API";
import SearchResults from "../components/SearchResults";

class Saved extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount() {
    API.savedBooks()
      .then((savedBooks) => this.setState({ savedBooks: savedBooks }))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="container">
        <h2>Saved books</h2>
        <SearchResults books={this.state.savedBooks} />
      </div>
    );
  }
}

export default Saved;
