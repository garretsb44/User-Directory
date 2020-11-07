import React, { Component } from "react";
import UserCard from "./components/UserCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import users from "./friends.json"; //from API

class App extends Component {
  
  state = {
    users
  };
  
  render() {
    return (
      <Wrapper>
        <Title>User List</Title>
        {this.state.users.map(user => (
          <UserCard
            id={user.id}
            key={user.id}
            name={user.name}
            image={user.image}
            occupation={user.occupation}
            location={user.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
