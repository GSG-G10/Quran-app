import React, { Component } from "react";
import "./App.css";
import LangsSelect from "./Components/LangsSelect";
import ChaptersList from "./Components/ChaptersList";
import VersesList from "./Components/VersesList";
import { chapters } from "./data";
import bismAllah from "./bismAllah.png"

class App extends Component {
  state = {
    selectedChapter: 1,
    selectedVerse: 1,
    edition: "ara-kingfahadquranc-la",
    chapter: null,
  };

  componentDidMount() {
    const { selectedChapter, edition } = this.state;
    // fetch data from api
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/${edition}/${selectedChapter}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ chapter: data.chapter });
      })
      .catch((err) => {
        console.log({ err: err });
      });
  }

  componentDidUpdate(preProps, preState) {
    const { edition, selectedChapter } = this.state;
    console.log(`preStatee:`, preState, `this :`, this.state);
    // update data on selection
    if (
      edition !== preState.edition ||
      selectedChapter !== preState.selectedChapter
    ) {
      fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/${edition}/${selectedChapter}.json`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("Update",data);
          this.setState({ chapter: data.chapter });
        })
        .catch((err) => {
          console.log({ err: err });
        });
    }
  }

  handleChange = (e, key) => {
    this.setState({ [key]: e.value });
  };

  render() {
    const { selectedChapter, chapter } = this.state;
    console.log(chapter);
    if (!chapter) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className="App">
        <header>
          <nav className="navBar">
            <h1>Holy Quran | القرآن الكريم</h1>
          </nav>
        </header>
        <div className="hint">
          <p>
            Browse editions of the Holy Quran in all languages all over the
            world
          </p>
        </div>
        <form className="filter">
          <div className="list"><LangsSelect onChange={this.handleChange} /></div>
          <div className="list"><ChaptersList className="list" handleChange={this.handleChange} /></div>
          <div className="list">
          <VersesList
            className="list"
            handleChange={this.handleChange}
            selectedChapter={selectedChapter}
          />
          </div>
        </form>
        <section className="data-section">
          <div className="data-container">
            <h2> {chapters[(selectedChapter - 1)].arabicChapters} </h2>
            <div className="bismAllah-container">
              <img src={bismAllah} alt="bismAllah" className="bismAllah"></img>
            </div>
            {chapter.map((ele, index) => {
              const { text, verse } = ele;
              return (
                <React.Fragment key={index}>
                  <ul className="versesList">
                    <li className="verseText">
                      <span className="VerseNum">{verse} -</span> {text}
                    </li>
                  </ul>
                </React.Fragment>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
