import { useState, useEffect } from 'react';
import Aphorism from './Aphorism.tsx';
import getQuotes from './quotes.ts';
import { useLocation } from 'react-router-dom';

interface Item {
  _id: string;
  content: string;
  author: string;
  tags: Array<string>;
}

function Feed() {
  const location = useLocation();
  const pathname = location.pathname;

  let slug = '';
  if (pathname !== '/') {
    slug = pathname.slice(pathname.indexOf('/', 1) + 1);
  }

  const [aphorisms, setAphorisms] = useState([]);

  useEffect(() => {
    getQuotes(slug)
    .then((response) => {
      setAphorisms(response);
    });
  }, [slug]);

  if (aphorisms.length === 0) {
    return (
      <div className="text-center w-full text-2xl">
        Empty!
      </div>
    )
  }

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
