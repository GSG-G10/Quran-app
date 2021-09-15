import React, { Component } from 'react';
import './App.css';
import LangsSelect from './Components/LangsSelect';
import ChaptersList from './Components/ChaptersList';

class App extends Component {
  state={
    selectedChapter: 1,
    edition: 'ara-kingfahadquranc-la',
  }
  handleLanguage = (newValue) => {
    return this.setState({edition: newValue.value})
  };
  handleChange = (e, key) => {
    this.setState({[key]: e.value})
  };
  render() {
    return (<div className="App">
      <header>
        <h1>
          Holy Quran | القرآن الكريم 
        </h1>
      </header>
      <div className='hint'>
        <p>Browse editions of the Holy Quran in all languages all over the world</p>
      </div>
        <fieldset className='filter'>
            <legend>
                Filter
            </legend>
            <LangsSelect onChange={this.handleLanguage} />
            <ChaptersList handleChange={this.handleChange}/>
        </fieldset>
        <section className='data-section'>
          <div className='data-container'>
            <h3>
              سورة الفاتحة
            </h3>
            <ul>
              <li> 
                <span> 4 </span>
               - الحمد لله رب العالمين</li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
