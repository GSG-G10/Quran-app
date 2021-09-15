import React, { Component } from 'react';
import './App.css';
import LangsSelect from './Components/LangsSelect';
import ChaptersList from './Components/ChaptersList';

class App extends Component {
  state={
    edition: 'Arabic',
    selectedChapter: 1,
  }
  handleLanguage = (newValue) => {
    return this.setState({edition: newValue.value})
  };
  handleChange = (e, key) => {
    this.setState({[key]: e.value})
  };
  render() {
    return (<div className="App">
        Hello
        <fieldset>
            <legend>
                Filter
            </legend>
            <LangsSelect onChange={this.handleLanguage} />
            <ChaptersList handleChange={this.handleChange}/>
        </fieldset>
      </div>
    );
  }
}

export default App;
