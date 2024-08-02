// NewsList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us',
            apiKey: '4d2ab94760354bb39521841bc926e837',
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h2>News List</h2>
      <ul>
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <li key={index}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </li>
          ))
        ) : (
          <p>No articles available.</p>
        )}
      </ul>
    </div>
  );
};

export default NewsList;
