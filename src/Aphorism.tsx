function Aphorism({ quote, author, tags }: { quote: string, author: string, tags: Array<string> }) {
  return (
      <div>
        <div>
          <h3 className="font-bold">Quote:</h3>
          {quote}
        </div>

        <div>
          <h3 className="font-bold">Author:</h3>
          {author}
        </div>

        <div>
          <h3 className="font-bold">Tags:</h3>
          {tags
          ? tags.map((tag, index) => {
              return (
                <div key={index}>{tag}</div>
              );
          })
          : null
          }
        </div>
      </div>
    );
}

export default Aphorism;
