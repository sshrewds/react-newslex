import React from 'react'
import styled from 'styled-components'

const NewsItemGrid = styled.div`
    width: 100%;
    margin-bottom: 2em;
    
    @media only screen and (min-width: 768px){
        height: 8em;
        display: grid;
        grid-template-areas:    "img title"
                                "img desc"
                                "img btn";
        grid-template-columns: 2fr 3fr;
        grid-template-rows: 1fr 2fr 1fr;
        grid-column-gap: 15px;
    }
    
`

const NewsImage = styled.img`
    grid-area: img;
    height: 8em;
    width: 100%;
    background-color: #888;
    
    object-fit: cover;
`

const NewsTitle = styled.div`
    grid-area: title;
    font-size: 0.8em;
    font-weight: bold;
    margin-bottom: 10px;
`

const NewsDescription = styled.div`
    grid-area: desc;
    font-size: 0.65em;
`
const NewsReadMoreBtn = styled.div`   
   grid-area: btn;
   font-size: 0.7em;
   position: relative;
   margin-top: 10px;

   a{
       @media only screen and (min-width: 768px){
        position: absolute;
        right: 0;
        bottom: 0;
       }
       
       color: black;
       text-decoration: none;

       ::visited{
           color: black;
       }
   }
`

const NewsItem = ({ title, description, url, img }) => {
    return (
        <>
            {url && <NewsItemGrid>
                <NewsImage src={img} />
                <NewsTitle>{title}</NewsTitle >
                <NewsDescription>{description}</NewsDescription>
                <NewsReadMoreBtn><a href={url} target="_blank">Czytaj dalej...</a></NewsReadMoreBtn>
            </NewsItemGrid>}
        </>
    )
}

export default NewsItem
