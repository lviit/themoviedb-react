import React from 'react';
import Classnames from 'classnames';
import { debounce } from 'throttle-debounce';
import enhanceWithClickOutside from 'react-click-outside';
import SearchResults from './SearchResults';
import apiConnect from '../services/ApiConnect';
import Styles from '../../css/SearchBox.pcss';

class SearchBox extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.callAjax = debounce(300, this.callAjax);
    this.state = {
      searchResults: null,
    };
  }

  componentWillMount() {
    apiConnect.getConfig().then(config => this.setState({ config }));
    apiConnect.getGenres().then(genres => this.setState({ genres }));
  }

  handleChange(e) {
    this.callAjax(e.target.value);
  }

  callAjax(value) {
    apiConnect.Search(value).then(searchResults => this.setState({ searchResults }));
  }

  handleClickOutside() {
    this.props.collapsed && this.props.toggleSearchBox();
  }

  submit() {
    // maybe search should have submit? :D
  }

  render() {
    this.props.collapsed && this.textInput.focus();

    const searchBoxClasses = Classnames({
      [Styles.searchbox]: true,
      [Styles.collapsed]: this.props.collapsed,
    });

    const resultContainerClasses = Classnames({
      [Styles.resultcontainer]: true,
      [Styles.noresults]: !this.state.searchResults,
      [Styles.collapsed]: this.props.collapsed,
      container: true,
    });

    return (
      <div className={searchBoxClasses}>
        <div className="container">
          <form onSubmit={this.submit}>
            <input
              placeholder="Search for movie..."
              className={Styles.input}
              type="text"
              onChange={this.handleChange}
              ref={(input) => { this.textInput = input; }} />
          </form>
          <div className={resultContainerClasses}>
            {this.state.searchResults && this.state.genres && this.state.config &&
              <SearchResults
                results={this.state.searchResults}
                genres={this.state.genres}
                config={this.state.config}
                toggleSearchBox={this.props.toggleSearchBox}
              />}
          </div>
        </div>
      </div>
    );
  }
}

SearchBox.propTypes = {
  toggleSearchBox: React.PropTypes.func,
  collapsed: React.PropTypes.bool,
};

SearchBox.defaultProps = {
  collapsed: false,
  toggleSearchBox: () => null,
};

export default enhanceWithClickOutside(SearchBox);
