import React, { Component } from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import Minidrawer from './Minidrawer';

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Minidrawer />
      </div>
    );
  }
}

export default App;
