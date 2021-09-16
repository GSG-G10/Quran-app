import React, { Component } from 'react';
import './App.css';
import LangsSelect from './Components/LangsSelect';
import ChaptersList from './Components/ChaptersList';
// import VersesList from './Components/VersesList';
import {fatha} from './data'

class App extends Component {
  state={
    selectedChapter: 1,
    selectedVerse: 1,
    edition: 'ara-kingfahadquranc-la',
    chapter: fatha
  }

  componentDidMount() {
    const {selectedChapter, edition} = this.state;
    // fetch data from api
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/${edition}/${selectedChapter}.json`)
    .then(res => res.json())
    .then(data => {
      console.log('fetchData',data);
      this.setState({chapter: data.chapter})
    })
    .catch(err => {
      console.log({'err': err});
    })
  }

  componentDidUpdate(preProps, preState) {
    console.log(`preStatee:`, preState , `this :`, this.state);
    const {edition, selectedChapter} = this.state;
    // update data on selection
    if (edition !== preState.edition && selectedChapter !== preState.selectedChapter) {
      fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/${edition}/${selectedChapter}.json`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({chapter: data.chapter})
    })
    .catch(err => {
      console.log({'err': err});
    })
    }
  }

  handleChange = (e, key) => {
    this.setState({[key]: e.value})
  };

  render() {
    const {selectedChapter, chapter} = this.state;
    console.log(chapter);
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
            <LangsSelect onChange={this.handleChange} />
            <ChaptersList handleChange={this.handleChange}/>
            {/* <VersesList handleChange={this.handleChange} selectedChapter={selectedChapter}/> */}
        </fieldset>
        <section className='data-section'>
          <div className='data-container'>
            <h3> {selectedChapter} </h3>
            {
              chapter.map((ele, index) => {
                const {text, verse} = ele;
                return( <React.Fragment key={index}>
                  <ul>
                    <li>
                      <span>{verse} -</span> {text}
                    </li>
                  </ul>
                  </React.Fragment>
                )
              })
            }
          </div>
        </section>
      </div>
    );
  }
}

export default App;
