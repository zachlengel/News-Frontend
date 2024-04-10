import axios from "axios";
import { useState, useEffect } from "react";
import { ArticlesIndex } from "./ArticlesIndex";
import "./App.css";

export function Content() {
  const [articles, setArticles] = useState([]);

  const handleArticlesIndex = () => {
    axios.get(`http://localhost:3000/articles.json?`).then((response) => {
      setArticles(response.data.articles);
    });
  };

  useEffect(handleArticlesIndex, []);

  return (
    <main>
      <h1>The News</h1>
      <ArticlesIndex articles={articles} />
    </main>
  );
}
