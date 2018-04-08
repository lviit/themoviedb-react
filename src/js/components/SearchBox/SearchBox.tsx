import * as React from "react";
import { connect } from 'react-redux';
import Classnames from 'classnames';
import { debounce } from 'throttle-debounce';
import enhanceWithClickOutside from 'react-click-outside';
import SearchResults from '../SearchResults';
import apiConnect from '../../services/ApiConnect';
import Styles from './SearchBox.pcss';
import Container from '@utils/Container';
type SearchBoxProps = {
  toggleSearchBox?: (...args: any[]) => any,
  collapsed?: boolean
};
type SearchBoxState = {
  searchResults: null
};
class SearchBox extends React.Component<SearchBoxProps, SearchBoxState> {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.callAjax = debounce(300, this.callAjax);
    this.state = {
      searchResults: null
    };
  }
  componentWillMount() {
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
  render() {
    this.props.collapsed && this.textInput.focus();
    const searchBoxClasses = Classnames({
      [Styles.searchbox]: true,
      [Styles.collapsed]: this.props.collapsed
    });
    const resultContainerClasses = Classnames({
      [Styles.resultcontainer]: true,
      [Styles.noresults]: !this.state.searchResults,
      [Styles.collapsed]: this.props.collapsed,
      container: true
    });
    return (
      <div className={searchBoxClasses}>
        <Container>
          <form>
            <input
              placeholder="Search for movie..."
              className={Styles.input}
              type="text"
              onChange={this.handleChange}
              ref={input => {
                this.textInput = input;
              }}
            />
          </form>
          <div className={resultContainerClasses}>
            {this.state.searchResults &&
              this.state.genres &&
              this.props.config && <SearchResults {...this.state} {...this.props} />}
          </div>
        </Container>
      </div>
    );
  }
}
SearchBox.defaultProps = {
  collapsed: false,
  toggleSearchBox: () => null
};
const mapStateToProps = (state, ownProps) => {
  return { ...ownProps, config: state.config };
};
export default connect(mapStateToProps)(enhanceWithClickOutside(SearchBox));
