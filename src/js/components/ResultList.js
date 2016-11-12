import React from 'react';
import { Link } from 'react-router';
import TextTruncate from 'react-text-truncate';

const ResultList = (props) => {
  let imageBaseUrl = props.config.images.secure_base_url;
  let fileSize = props.config.images.backdrop_sizes[0];

  let resultNodes = props.data.results.map(function(result) {
    var path = '/movie/' + result.id;
    return (
      <div className="movie" key={result.id}>
        <img className="movie--image" src={imageBaseUrl + fileSize + result.poster_path}></img>
        <div className="movie--info">
          <h2 className="movie--title">{result.title}</h2>
          <TextTruncate containerClassName="movie--overview" line={3} truncateText="…" text={result.overview} />
          <Link className="movie--link" to={path}>Read more</Link>
        </div>
      </div>
    );
  });
  return (
    <div className="resultList">
      {resultNodes}
    </div>
  );
};

export default ResultList
