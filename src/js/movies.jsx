let React = require('react');
let ReactDOM = require('react-dom');
let ReactCSSTransitionGroup = require('react-addons-css-transition-group');
let axios = require('axios');
let css = require('../css/style.css');

let MovieList = React.createClass({
  getMovies: function() {
    let apiKey = 'dc4a1a30e13042657cc4081b0a16bf8f';
    let url = 'https://api.themoviedb.org/3/discover/movie?primary_release_year=2010&sort_by=vote_average.desc&api_key='  + apiKey;
    axios.get(url)
    .then(function (data) {
      this.setState({data: data.data});
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    }.bind(this));
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.getMovies();
  },
  render: function() {
    return (
      <div className="movies">
        <h1>Movies</h1>
        <ResultList data={this.state.data} />
      </div>
    );
  }
});

let ResultList = React.createClass({
  render: function() {
    if (this.props.data.results) {
      let resultNodes = this.props.data.results.map(function(result) {
        return (
          <div className="movie" key={result.id}>
            <h2 className="movie--title">{result.title}</h2>
            <div className="movie--overview">{result.overview}</div>
          </div>
        );
      }); 
      return (
        <div className="resultList">
          {resultNodes}
        </div>
      );
    }
    else {
      return (
        <div className="resultList">
          <p>No Movies :(</p>
        </div>
      );    
    }
  }
});

ReactDOM.render(
  <MovieList />,
  document.getElementById('content')
);















