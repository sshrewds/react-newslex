import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsListWrapper = styled.div`
    width: 80vw;
    margin: 3em auto 0;

    @media only screen and (min-width: 768px){
        width: 80vw;
    }
`


const NewsList = ({ country }) => {
    const [newsList, setNewsList] = useState([]);
    const requestURL = `http://newsapi.org/v2/top-headlines?country=${country}&apiKey=055aefa861c14f919537a61a5473e5a3`;

    useEffect(() => {
        async function getNewsList() {
            const response = await axios.get(requestURL);
            console.log(response.data.articles);
            setNewsList(response.data.articles);
        };
        getNewsList();
    }, []);

    return (
        <NewsListWrapper>
            {newsList.map(({ publishedAt, title, description, url, urlToImage }) =>
                <NewsItem key={publishedAt} title={title} description={description} url={url} img={urlToImage} />)}
            <NewsItem />
            <NewsItem />
        </NewsListWrapper>
    )
}

export default NewsList
