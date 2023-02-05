import React, { Component } from "react";
import NewsItem from "./NewsItem";
//import Button from "react-bootstrap/Button";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults :0
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)}- NewsLey `
    }

  updateNews() {
    this.props.setProgress(0)
    fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=48ca32b9bb144116be060530cf5db090&page=${this.state.page}&pageSize=${this.props.pageSize}`
    ).then((data) => {
     
      this.setState({
        loading: true,
      });
      data.json().then((result) => {
        
        this.setState({
          loading: false,
          totalResults: result.totalResults,
          articles: result.articles,
        });
        this.props.setProgress(99)
      });
    });
    this.props.setProgress(100)
  }
  componentDidMount() {

    this.updateNews();
   
  }

//Function used to get infinite scrolling bar 
  fetchMoreData = () => {
        
    
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=48ca32b9bb144116be060530cf5db090&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
      
    ).then((data) => {
        
      this.setState({
     
        page :this.state.page + 1})
      data.json().then((result) => {
        this.setState({
         

          articles: this.state.articles.concat(result.articles),
        });
      });
    });
 
  };


  /*handlePrevious = () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };
         This Two Functions are handle Previous and next and Loading button  if You want 
  handleNext = () => {
   
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };
 */
  render() {
    return (
      <>
        <h2 className="text-center"  style={{marginTop :"90px"}}> NewsLey -Top {this.capitalizeFirstLetter(this.props.category)}  Headlines  </h2>
        {this.state.loading && <Spinner /> }
        {/*//If this.state.loading is True then We Show Spinner OtherWise We Avoid it  */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
       
          hasMore={this.state.articles.length !== this.state.totalResults}
         
          
        >
          <div className="container">
        <div className="row">
          {
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author ? element.author : "Not Available"}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
         </div>
        </div> 
        </InfiniteScroll>
       { /*<div className="container d-flex justify-content-between">
          <Button
            variant="dark"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevious}
          >
            &larr;Previous
          </Button>
          <Button                     this is Prevoius and Next Button if You want to use 
                                      You can implement it again 
            variant="dark"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.handleNext}
          >
            Next &rarr;
          </Button>
          </div>  */}

      </>
    );
  }
}