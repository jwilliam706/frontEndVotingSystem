import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>Front end started! {this.state.date}</div>
    );
  }
}

export default App;
