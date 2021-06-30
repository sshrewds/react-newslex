import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsListWrapper = styled.div`
    width: 80vw;
    margin: 3em auto 0;
`

const NewsList = ({ market }) => {
    const [newsList, setNewsList] = useState([]);
    const requestURL = `https://bing-news-search1.p.rapidapi.com/news?mkt=${market}&safeSearch=Off&textFormat=Raw`;
    const undefinedImageURL = 'https://dubsism.files.wordpress.com/2017/12/image-not-found.png';

    useEffect(() => {
        async function getNewsList() {
            const response = await axios.get(requestURL, {
                "headers": {
                    "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
                    "x-rapidapi-key": "ba75fb4913msh4bc6d04b5a49f57p1fe5acjsn4ab491719aed",
                    "x-bingapis-sdk": "true"
                }
            });
            console.log(response);
            setNewsList(response.data.value);
        };
        getNewsList();
        console.log(newsList);
    }, []);

    return (
        <NewsListWrapper>
            {newsList.map(({ datePublished, name, description, url, image }) =>{
                const imgURL = image ? image.thumbnail.contentUrl.replace('&pid=News', '') : undefinedImageURL;
                return <NewsItem key={datePublished} title={name} description={description} url={url} img={imgURL} />
            } )}
        </NewsListWrapper>
    )
}

export default NewsList
