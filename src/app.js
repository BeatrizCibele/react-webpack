"use-strict";
import React, { Component } from "react";
import AppContent from "./AppContent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        username: "Fernando Daciuk",
        photo: "https://avatars2.githubusercontent.com/u/487669?v=4",
        login: "fdaciuk",
        repos: 12,
        followers: 12,
        following: 10,
      },
      repos: [
        {
          name: "Repo",
          link: "#",
        },
      ],
      starred: [
        {
          name: "Repo",
          link: "#",
        },
      ],
    };
  }

  render() {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    );
  }
}

export default App;
