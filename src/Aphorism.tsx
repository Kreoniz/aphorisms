function Aphorism({ quote, author, tags }: { quote: string, author: string, tags: Array<string> }) {
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
      </div>
    );
}

export default Aphorism;
