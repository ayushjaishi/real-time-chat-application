import React from 'react';
import { useSelector } from 'react-redux';

const SavedArticles = () => {
  const savedArticles = useSelector((state) => state.auth.savedArticles || []);

  return (
    <div>
      <h2>Saved Articles</h2>
      {savedArticles.length > 0 ? (
        <ul>
          {savedArticles.map((article, index) => (
            <li key={index}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No articles saved yet.</p>
      )}
    </div>
  );
};

export default SavedArticles;
