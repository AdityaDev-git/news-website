import React from 'react'

const NewsItem = (props)=> {
    let {title,description, imageUrl, newsUrl,author,date,source} = props;
  
    return (
      <div className='my-3'>
        <div className="card" 
          style= {{
            height:'40rem',
            position:'relative',
          }}>
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}>
          <span className="badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>{source}  </span>
          </div>
  <img src={!imageUrl ? "https://thumbs.dreamstime.com/b/live-breaking-news-television-broadcast-globe-gradient-blue-background-illustration-panorama-185818606.jpg" : imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className='card-text'><small className='text-muted'>By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href= {newsUrl} target='_blank' className="btn btn-sm btn-primary" style={{position:'absolute', bottom:'15px'}}>Read More</a>
  </div>
</div>
        </div>
    )
  
}

export default NewsItem