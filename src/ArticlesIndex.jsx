export function ArticlesIndex(props) {
  return (
    <div>
      <h1>All Articles</h1>
      {props.articles.map((article) => (
        <div key={ArticlesIndex.title}>
          <h2>{article.title}</h2>
          <p>By: {article.author}</p>
          <p>Preview: {article.description}</p>
          <p>
            <a target="_blank" href={article.url}>
              <img src={article.urlToImage} alt="Full Article" />
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}
