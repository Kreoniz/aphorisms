import { useState, useEffect } from 'react';
import Aphorism from './Aphorism.tsx';
import getQuotes from './quotes.ts';

interface Item {
  _id: string;
  content: string;
  author: string;
  tags: Array<string>;
}

function Feed() {
  const [aphorisms, setAphorisms] = useState([]);

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
