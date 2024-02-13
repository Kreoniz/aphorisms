const URL = 'http://api.quotable.io/';

export default async function getQuotes(tag='famous-quotes', amount=20) {
  const quotes = await fetch(URL + 'quotes?tags=' + tag + '&limit=' + amount, { mode: 'cors' });
  const json = await quotes.json();
  return json.results;
}
