import React, { Component } from 'react';
import './App.css';
import LangsSelect from './Components/LangsSelect';

class App extends Component {
  state={
    edition: 'Arabic',
  }
  handleLanguage = (newValue) => {
    return this.setState({edition: newValue.value})
  };
  render() {
    return (<div className="App">
        Hello
        <fieldset>
            <legend>
                Filter
            </legend>
            <LangsSelect onChange={this.handleLanguage} />
        </fieldset>
      </div>
    );
  }
}

export default App;
