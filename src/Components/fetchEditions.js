const fetchEditions = () => {
  return fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.min.json")
    .then((res) => res.json())
    .then(data => {
        return Object.keys(data).map(key => {
            return {
                name: data[key].name,
                author: data[key].author,
                language: data[key].language
            }
        })
    })
    .catch((err) => console.log(err.message));
};

export default fetchEditions;
