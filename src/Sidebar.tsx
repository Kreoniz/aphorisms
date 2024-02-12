import { useState, useEffect } from 'react';

const URL = 'http://api.quotable.io/';

interface Tag {
  _id: string;
  name: string;
  slug: string;
}

function Sidebar() {
  const [tags, setTags] = useState([]);

  async function getTags() {
    const quotes = await fetch(URL + 'tags', { mode: 'cors' });
    const json = await quotes.json();
    return json;
  }

  useEffect(() => {
    getTags()
    .then((response) => {
      setTags(response);
    });
  }, []);

  return (
    <div>
      <div className="font-bold text-2xl text-center">Tags</div>
      <div>
      {tags.map((tag: Tag) => {
        return (
          <div
            className="block hover:underline hover:cursor-pointer w-max"
            key={tag._id}
            data-slug={tag.slug}
          >
            {tag.name}
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Sidebar;
