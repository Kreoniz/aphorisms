import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

  useEffect(() => {
    getTags()
    .then((response) => {
      setTags(response);
    });
  }, []);

  return (
    <div>
      <div className="font-bold text-2xl text-center">Categories</div>
      <div>
      {tags.map((tag: Tag) => {
        return (
          <Link
            className="block hover:underline hover:cursor-pointer w-max"
            key={tag._id}
            data-slug={tag.slug}
            to={`category/${tag.slug}`}
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
