import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import loading from '../public/loading.gif';

const URL = 'https://api.quotable.io/';

async function getTags() {
  const quotes = await fetch(
      URL + 'tags',
      {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
  );
  const json = await quotes.json();
  return json;
}

export async function loader({ request, params }: { request: any, params: any }) {
  return fetch(
    `${URL}quotes?tags=${params.slug}`,
    { mode: 'cors', signal: request.signal },
  )
}

interface Tag {
  _id: string;
  name: string;
  slug: string;
}

function Sidebar() {
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getTags()
    .then((response) => {
      setTags(response);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <div className="font-bold text-2xl text-center">Categories</div>
      <div>
      {isLoading
        ? <div className="flex justify-center mt-4">
            <img src={loading} alt="loading" className="bg-gray-200 rounded-lg w-1/2" />
          </div>
        : tags.map((tag: Tag) => {
          return (
            <Link
              className="block hover:underline hover:cursor-pointer w-max"
              key={tag._id}
              data-slug={tag.slug}
              to={`category/${tag.slug}`}
              onClick={() => {
                const sidebar: Element | null = document.querySelector('#sidebar');
                if (sidebar) {
                  sidebar.classList.add('hidden');
                }}
              }
            >
              {tag.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
