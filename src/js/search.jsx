var React = require('react');
var ReactDOM = require('react-dom');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var axios = require('axios');
var css = require('../css/style.css');

var SearchBox = React.createClass({
  loadResultsFromServer: function(keywords) {
    var apiKey = 'dc4a1a30e13042657cc4081b0a16bf8f';
    var searchUrl = 'https://api.themoviedb.org/3/discover/movie?primary_release_year=2010&sort_by=vote_average.desc?api_key='  + apiKey;
    axios.get(searchUrl)
    .then(function (data) {
      console.log(data);
      this.setState({data: data.data});
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    }.bind(this));
  },
  getInitialState: function() {
    return {data: []};
  },
  render: function() {
    return (
      <div className="searchBox">
        <h1>Recipe Search</h1>
        <SearchForm onSubmit={this.loadResultsFromServer} />
        <Facets data={this.state.data} />
        <ResultList data={this.state.data} />
      </div>
    );
  }
});

var ResultList = React.createClass({
  render: function() {
    //console.log(this.props.data.hits);
    if (this.props.data.hits) {
      var resultNodes = this.props.data.hits.map(function(result) {
        var animationClass = ' animation-' + Math.floor(Math.random() * 5);
        var boxClass = ' box-' + Math.floor(result.product_name.length/10 + 1);
        var classes = 'result' + animationClass + boxClass;
        return (
          <div className={classes} key={result.code}>
            <div className="content">
              <img className="product-image" src={result.image_small_url} />
              <div className="product-info">
                <h2>{result.product_name}</h2>
                <span className="source">{result.categories_en}</span>
                <a>Read more</a>
              </div>
            </div>
          </div>
        );
      }); 
      return (
        <ReactCSSTransitionGroup transitionName="animation" transitionEnterTimeout={300} transitionLeaveTimeout={300} className="resultList">
          {resultNodes}
        </ReactCSSTransitionGroup>
      );

    } else {
      return (
        <div className="resultList">
          <p>No Results</p>
        </div>
      );
    }
  }
});

var Facets = React.createClass({
  render: function() {
    if (this.props.data.sourceFacet) {
      var facetKey = 1;
      var resultFacets = this.props.data.sourceFacet.map(function(result) {
        facetKey++;
        return (
            <span className="facet" key={facetKey}>{result.key}</span>     
        );
      });
      return (
        <div className="Facets">
          <p>Facets</p>
          { resultFacets }
        </div>
      );
    } else {
      return (
        <div className="Facets">
          <p>Facets</p>
        </div>
      );
    }
  }
});

var Fullview = React.createClass({
  render: function() {

  }
});

var SearchForm = React.createClass({
  getInitialState: function() {
    return {keywords: ''};
  },
  handleChange: function(e) {
    e.preventDefault();
    this.setState({keywords: e.target.value});
    this.props.onSubmit({keywords: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var keywords = this.state.keywords.trim();
    if (!keywords) {
      return;
    }
    this.props.onSubmit({keywords: keywords});
  },
  render: function() {
    return (
      <form className="searchForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="keywords"
          value={this.state.keywords}
          onChange={this.handleChange}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
});
