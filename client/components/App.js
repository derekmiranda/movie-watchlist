import React, { Component } from 'react';
import ReactDom from 'react-dom';
import MovieTable from './MovieTable';

class App extends Component {
  render() {
    return (
      <main>
        <MovieTable />
      </main>
    );
  }
}

export default App;