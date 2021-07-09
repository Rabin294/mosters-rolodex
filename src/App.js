import React from "react";

import { CardList } from "./component/card-list/card-list.component";

import { SearchBox } from "./component/search-box/search-box.component";

import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFields: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchFields } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFields.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={(e) => this.setState({ searchFields: e.target.value })}
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
