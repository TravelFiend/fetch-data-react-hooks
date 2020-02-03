export const getQuotes = () => {
  return fetch('https://futuramaapi.herokuapp.com/api/quotes')
    .then(res => res.json());
};
