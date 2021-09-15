const fetchLangs = () => {
  return fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.min.json")
    .then((res) => res.json())
    .then((data) => {
      return Object.keys(data).map((key) => {
        return data[key].language;
      });
    })
    .then((langs) => {
      return langs.filter((value, index, self) => {
        return self.indexOf(value) === index;
      });
    })
    .then(data => {
        console.log(data);
    })
    .catch((err) => console.log(err.message));
};

export default fetchLangs;
