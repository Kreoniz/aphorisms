function Aphorism({ quote, author, tags }) {
  return (
      <div>
        <div>
          <h3>Quote:</h3>
          {quote}
        </div>

        <div>
          <h3>Author:</h3>
          {author}
        </div>

        <div>
          <h3>Tags:</h3>
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
