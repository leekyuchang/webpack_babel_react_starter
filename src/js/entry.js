import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Ohai</p>
        <Button />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#render-target'));
