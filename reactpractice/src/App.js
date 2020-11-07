import React, { Component } from "react";
import UserCard from "./components/UserCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import API from "./utils/API"; 
import SortDropDown from "./components/SortForm";

class App extends Component {
  
  state = {
    users: []
  };

  componentDidMount() {
    API.search()
      .then(res => this.setState({ users: res.data.results }))
      .catch(err => console.log(err));
  }

  // handleFirstNameSort = (event) => {
  //   const value = event.target.value;
  //   this.setState({ search: value });
  // };

   // handleLastNameSort = (event) => {
  //   const value = event.target.value;
  //   this.setState({ search: value });
  // };

   // handleEmailSort = (event) => {
  //   const value = event.target.value;
  //   this.setState({ search: value });
  // };
  
  render() {
    return (
      <Wrapper>
        <Title>User List</Title>
        <SortDropDown
        handleFirstNameSort={this.handleFirstNameSort}
        handleLastNameSort={this.handleLastNameSort}
        handleEmailSort={this.handleEmailSort}
        handleMaleSort={this.handleMaleSort}
        handleFemaleSort={this.handleFemaleSort}
        />
        {this.state.users.map(user => (
          <UserCard
            id={user.login.uuid}
            key={user.login.uuid}
            firstName={user.name.first}
            lastName={user.name.last}
            email={user.email}
            image={user.picture.thumbnail}
            gender={user.gender}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
