import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const News = (): JSX.Element => {
  const [news, setNews] = useState<{
    url: string;
    title: string;
    createdAt: string;
    author: string;
  }>();
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { id } = useParams();

  useEffect(() => {
    async function fetchNews() {
      try {
        setIsLoading(true)
        const { data } = await axios.get('https://63e7deedac3920ad5be56cfa.mockapi.io/news/' + id);
        setNews(data);
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchNews();
  }, []);

  if (isLoading) {
    return <div className="news__loading">Загрузка...</div>;
  }

  return (
    <div className="news">
      <a className="news__link" href={news?.url} rel="noopener noreferrer" target="_blank">Открыть источник</a>
      <div>{news?.author}</div>
      <div>{news?.createdAt}</div>
      <h2>{news?.title}</h2>
      <Link to="/news">
        <button className="news__button">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default News;