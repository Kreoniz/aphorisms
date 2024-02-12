import { useState, useEffect } from 'react';
import Aphorism from './Aphorism.tsx'

const URL = 'http://api.quotable.io/';

interface Item {
  _id: string;
  content: string;
  author: string;
  tags: Array<string>;
}

function Feed() {
  const [aphorisms, setAphorisms] = useState([]);

  async function getQuotes(amount=20, tags='famous-quotes') {
    const quotes = await fetch(URL + 'quotes?tags=' + tags + '&limit=' + amount);
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
          <div key={item._id} className="mb-4 sm:mx-4 mx-2">
            <Aphorism quote={item.content} author={item.author} tags={item.tags} />
          </div>
        )
      })}
    </div>
  );
}

export default Feed;
