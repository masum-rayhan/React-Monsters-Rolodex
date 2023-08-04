import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Jacky",
          id: 1,
        },
        {
          name: "Linda",
          id: 2,
        },
        {
          name: "Frank",
          id: 3,
        },
      ],
    };
  }
  render() {
    return (
      <>
        <div>
          {this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default App;
