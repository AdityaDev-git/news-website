import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from './Loading'

const News = (props)=> {
  const [articles, SetArticles] = useState([])
  const [loading, SetLoading] = useState(true)
  const [page, SetPage] = useState(1)
  const [totalResults, SetTotalResults] = useState(0)

  const capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  
  const updateNews = async()=>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    SetLoading(true)
    let data = await fetch(url);
     props.setProgress(30);
     let parseData = await data.json()
     props.setProgress(70);
     console.log(parseData);
     
     SetArticles(parseData.articles)
     SetTotalResults(parseData.totalResults)
     SetLoading(false)

     props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - DNews`;
    updateNews();
  }, [])

 const fetchMoreData = async() =>{
   const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
   SetPage(page + 1)
   let data = await fetch(url);
  let parseData = await data.json()
  console.log(parseData);
  SetArticles(articles.concat(parseData.articles))
  SetTotalResults(parseData.totalResults)
};

    return (
      <>
        <h1 className="text-center" style={{margin: '35px 0px', marginTop:'90px'}}>Top Headlines - {capitalizeFirstLetter(props.category)} </h1>
       {loading && <Loading/>}
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loading/>}>
            <div className="container">

        <div className="row">
          {articles.map((Element)=>{
            return <div className="col-md-3" key={Element.url}>
            <NewsItem title={Element.title?Element.title:""} description={Element.description?Element.description:""} imageUrl={Element.urlToImage} newsUrl={Element.url} author={Element.author} date={Element.publishedAt} source={Element.source.name}/>
            </div>
          })}
         </div>
          </div>
         </InfiniteScroll>
        
        </>
    )

}

 News.defaultProps = {
  pageSize: 8,
  category:'general',
}
News.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News