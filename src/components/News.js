import React, { Component } from 'react'
import NewsItem from './NewsItem.js'
import PropTypes from 'prop-types'
import Spinner from './Spinner.js'
import InfiniteScroll from 'react-infinite-scroll-component'


export default class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general",
    headLine: "General",
    apiKey: " "
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    headLine: PropTypes.string,
    apikey: PropTypes.string

  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      loadingGif: false,
      length: 0
    }
  }

  async componentDidMount() {
    this.setState({ loadingGif: true });
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}&apiKey=${this.props.apiKey}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let data2 = await data.json();
    this.props.setProgress(70);
    this.setState({ loadingGif: false });
    let parsedData = data2;
     this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults

    })
    this.props.setProgress(100);
  }


  handlePreClick = async () => {
    this.setState({ loadingGif: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page - 1}&apiKey=${this.props.apiKey}`;
    let data = await fetch(url);
    let data2 = await data.json();
    this.setState({ loadingGif: false });
    let parsedData = data2;
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1

    })

  }

  handleNextClick = async () => {
    this.setState({ loadingGif: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page + 1}&apiKey=${this.props.apiKey}`;
    let data = await fetch(url);
    let data2 = await data.json();
    this.setState({ loadingGif: false });
    let parsedData = data2;
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1
    })

  }

  fetchData = async () => {

    this.setState({ page: this.state.page + 1 });
    this.setState({ loadingGif: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}&apiKey=${this.props.apiKey}`;
    let data = await fetch(url);
    if (!data.ok) {
      throw new Error('Network response was not ok');
    }
    let data2 = await data.json();

    this.setState({ loadingGif: false });
    let parsedData = data2;
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    })

  };
  render() {
    return (
      <>
        <div className="">
          <h1 className='text-center mt-3' >Top {this.props.headLine} Headlines</h1>
          {this.state.loadingGif && <Spinner />}
          <div className='container' >
            <InfiniteScroll className='container'
              dataLength={this.state.articles.length} //This is important field to render the next data
              next={this.fetchData}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={<Spinner />}
              endMessage={
                <div style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all</b>
                </div>
              }>
              <div className="container row">
                {this.state.articles.map((element) => {
                  return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} dateTime={element.publishedAt} author={element.author} />
                  </div>
                })}
              </div>
            </InfiniteScroll>
            {/* <div className="container" style={{ display: "flex", justifyContent: 'space-between' }}>
            <button type="button" disabled={this.state.page <= 1} className="btn btn-dark mt-3" onClick={this.handlePreClick}>{'\u2190'} Previous</button>
            <button type="button" disabled={this.state.page >= this.state.totalResults / this.props.pageSize} className="btn btn-dark mt-3" onClick={this.handleNextClick}>Next {"\u2192"} </button>
          </div> */}
          </div>
        </div >
      </>
    )
  }
}
