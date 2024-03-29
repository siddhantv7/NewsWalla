import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    const { title, description, imageUrl, newsUrl, dateTime, author } = this.props;
    return (
        <>
        <div className="container">
          <div className="card mt-4" >
            <img className="card-img-top" src={!imageUrl ? "https://t3.ftcdn.net/jpg/03/27/55/60/240_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg" : imageUrl} alt="News Images" />
            <div className="card-body">
              <h5 className="card-title">{title ? (title.length > 50) ? `${title.slice(0, 50)} ...` : title : title}</h5>
              <p className="card-text">{description ? (description.length > 100 ? `${description.slice(0, 100)} ...` : description) : description}</p>
              <a href={newsUrl}  target="blank" className="btn btn-dark">Read more</a>
              <p className="card-text"><small className="text-muted">By {author} on {new Date(dateTime).toGMTString()}</small></p>
            </div>
          </div>
          </div>
        </>
    )
  }
}
