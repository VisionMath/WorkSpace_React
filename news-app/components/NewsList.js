import styled from 'styled-components';
import NewsItem from './NewsItem';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
// const article = {
//   title:'테스트 타이틀',
//   description:'테스트 내용 입니다.',
//   url:'https://www.naver.com',
//   urlToImage:'https://via.placeholder.com/160'
// }
function NewsList({ category }) {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? ' ' : `&category=${category}`
        // const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=a8f0d4f98b2f4e60847d990ca71a8503' + `${query}`);
        const response = await axios.get('https://openapi.naver.com/v1/search/movie.json?query=avenger&apiKey=Yl6uwVUv0izsX17iuY45');
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }
    fetchData();
  }, [category]);
  if (loading) {
    return <NewsListBlock>대기중 .......</NewsListBlock>
  }
  if (!articles) {
    return null;
  }
  return (
    <NewsListBlock>
      {articles.map(article => {
        return <NewsItem key={article.id} article={article} />
      })}
    </NewsListBlock>
  );
}

export default NewsList;