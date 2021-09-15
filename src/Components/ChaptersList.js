import Creatable from "react-select/creatable";
import { chapters } from "../data";

function ChaptersList({handleChange}) {
  const options = [];
  chapters.forEach(({ id, arabicChapters, englishChapters, chaplength }) => {
    const option = {
      // set the value and label for the option
      value: arabicChapters,
      label: `${chaplength} - ${arabicChapters} (${englishChapters})`,
    };
    options.push(option);
  });

  return (
    // create select element and its options
    <Creatable options={options} placeholder="Chapter" onChange={(e) => handleChange(e, "selectedChapter")} />
  );
}

export default ChaptersList;
