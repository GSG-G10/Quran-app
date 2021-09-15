import React, { Component } from 'react';
import './App.css';
import LangsSelect from './Components/LangsSelect';

class App extends Component {
  state={
    langValue: 'Arabic',

  }
  handleChange = (e) => {
    console.log(e.target);
  }
  render() {
    return (<div className="App">
        Hello
        <fieldset>
            <legend>
                Filter
            </legend>
            <LangsSelect onChange={this.handleChange} />
            <LangsSelect onChange={this.handleChange} />

        </fieldset>
      </div>
    );
  }
}

export default App;
