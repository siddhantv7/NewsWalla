import React, { Component } from 'react'
import NewsItem from './NewsItem.js'
import PropTypes from 'prop-types'
import Spinner from './Spinner.js'


export default class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general",
    headLine: "General"
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      loadingGif: false
    }
  }

  async componentDidMount() {
    console.log("CDM");
    this.setState({loadingGif: true});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}&apiKey=bedd32c9bdeb4ae58e5e1e9c5df3f0c5`;
    let data = await fetch(url);
    let data2 = await data.json();
    this.setState({loadingGif: false});
    let parsedData = data2;
    console.log(parsedData);
    console.log(parsedData.totalResults);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    })
  }


  handlePreClick = async () => {
    console.log("Previous click")
    this.setState({loadingGif: true});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page - 1}&apiKey=bedd32c9bdeb4ae58e5e1e9c5df3f0c5`;
    let data = await fetch(url);
    let data2 = await data.json();
    this.setState({loadingGif: false});
    let parsedData = data2;
    console.log(parsedData);
    console.log(parsedData.totalResults);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1
    })

  }

  handleNextClick = async () => {
    console.log("Next click")
    this.setState({loadingGif: true});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page + 1}&apiKey=bedd32c9bdeb4ae58e5e1e9c5df3f0c5`;
    let data = await fetch(url);
    let data2 = await data.json();
    this.setState({loadingGif: false});
    let parsedData = data2;
    console.log(parsedData);
    console.log(parsedData.totalResults);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1
    })

  }

  render() {
    return (
      <>
        <div className="container">
          <h1 className='text-center' style={{ margin: '15px 0px 0px 0px' }}>Top {this.props.headLine} Headlines</h1>
          {this.state.loadingGif && <Spinner/>}
          <div className="container row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
            })}
          </div>
          <div className="container" style={{ display: "flex", justifyContent: 'space-between' }}>
            <button type="button" disabled={this.state.page <= 1} className="btn btn-dark mt-3" onClick={this.handlePreClick}>{'\u2190'} Previous</button>
            <button type="button" disabled={this.state.page >= this.state.totalResults/this.props.pageSize} className="btn btn-dark mt-3" onClick={this.handleNextClick}>Next {"\u2192"} </button>
        </div>
      </div >
      </>
    )
  }
}
