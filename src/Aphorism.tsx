import { useState } from 'react';
import Liked from '/src/assets/heart-icon.svg';
import Unliked from '/src/assets/heart-thin-icon.svg';

function Likes({ id }: { id: string }) {
  const [like, setLike] = useState(localStorage.getItem(id));

  function click() {
    if (localStorage.getItem(id)) {
      setLike(null);
      localStorage.removeItem(id);
    } else {
      setLike('true');
      localStorage.setItem(id, String(true));
    }
  }

  return (
    <button type="button" onClick={click}>
      {
        like
        ? <img className="w-6" src={Liked} />
        : <img className="w-6" src={Unliked} />
      }
    </button>
    );
}

function Aphorism({ quote, author, tags, id }: { quote: string, author: string, tags: Array<string>, id: string }) {
  return (
      <div className='border-2 rounded p-3 sm:p-4'>
        <div>
          {quote}
        </div>

        <div className="text-right my-2 text-sm text-gray-500">
          © {author}
        </div>

        <div className="font-light text-sm text-gray-500">
          {tags.map((tag, index) => {
              if (index !== tags.length - 1) {
                return <span key={index}>{tag}, </span>;
              } else {
                return <span key={index}>{tag}</span>;
              }
          })}

        </div>

        <div className="mt-2">
          <Likes id={id} />
        </div>
      </div>
    );
}

export default Aphorism;
