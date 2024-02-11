import { useState, useEffect } from 'react';
import Aphorism from './Aphorism.tsx'

const URL = 'http://api.quotable.io/';

async function getQuotes(amount=20) {
  const quotes = await fetch(URL + 'quotes?limit=' + amount);
  const json = await quotes.json();
  return json.results;
}

function App() {
  const [aphorisms, setAphorisms] = useState([]);

  useEffect(() => {
    getQuotes()
    .then((response) => {
      setAphorisms(response);
    });
  }, []);

  return (
    <div>
      {aphorisms.map((item) => {
        return (
          <div key={item._id}>
            <h2>Aphorism</h2>
            <Aphorism quote={item.content} author={item.author} tags={item.tags} />
          </div>
        )
      })}
    </div>
  );
}

export default App;
