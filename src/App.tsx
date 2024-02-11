import { useState, useEffect } from 'react';
import Aphorism from './Aphorism.tsx'

const URL = 'http://api.quotable.io/';

interface Item {
  _id: string;
  content: string;
  author: string;
  tags: Array<string>;
}

function App() {
  const [aphorisms, setAphorisms] = useState([]);

  async function getQuotes(amount=20) {
    const quotes = await fetch(URL + 'quotes?limit=' + amount);
    const json = await quotes.json();
    return json.results;
  }

  useEffect(() => {
    getQuotes()
    .then((response) => {
      setAphorisms(response);
    });
  }, []);

  return (
    <div>
      {aphorisms.map((item: Item) => {
        return (
          <div className="m-4" key={item._id}>
            <h2 className="text-xl font-bold underline">Aphorism</h2>
            <Aphorism quote={item.content} author={item.author} tags={item.tags} />
          </div>
        )
      })}
    </div>
  );
}

export default App;
