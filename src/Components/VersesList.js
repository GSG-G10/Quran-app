import Creatable from "react-select/creatable";
import { chapters } from "../data";

const versesArray = (selectedChapter) => {
  const verses = chapters[(selectedChapter-1)].chaplength;
  const arr = [];
  for (let i = 1; i <= verses; i++) {
    arr.push(i);
  }
  return arr;
};

function VersesList({ selectedChapter, handleChange }) {
  const options = [];
  versesArray(selectedChapter).forEach((verse) => {
    const option = { // set the value and label for the option
      value: verse,
      label: verse
  }
  options.push(option);
  })
  return (
    <Creatable options={options} placeholder="Verse" onChange={(e) => handleChange(e, "selectedVerse")} />
  );
}

export default VersesList;
