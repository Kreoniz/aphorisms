const URL = 'http://api.quotable.io/';

export default async function getQuotes(amount=20, tags='famous-quotes') {
  const quotes = await fetch(URL + 'quotes?tags=' + tags + '&limit=' + amount, { mode: 'cors' });
  const json = await quotes.json();
  return json.results;
}
