import { useState, useEffect } from 'react';
import Aphorism from './Aphorism.tsx';
import getQuotes from './quotes.ts';
import { useLocation } from 'react-router-dom';
import loading from '../public/loading.gif';

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getQuotes(slug)
    .then((response) => {
      setAphorisms(response);
      setIsLoading(false);
    });
  }, [slug]);

  if (!isLoading && aphorisms.length === 0) {
    return (
      <div className="text-center w-full text-2xl">
        Empty!
      </div>
    )
  }

  return (
    <div className="w-full">
      {isLoading
        ? <div className="flex justify-center">
            <img src={loading} alt="loading" className="bg-gray-200 rounded-lg" />
          </div>
        : aphorisms.map((item: Item) => {
          return (
            <div key={item._id} className="mb-4 sm:mx-4 mx-2">
              <Aphorism quote={item.content} author={item.author} tags={item.tags} />
            </div>
          )
        })
      }
    </div>
  );
}

export default Feed;
