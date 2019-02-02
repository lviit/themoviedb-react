import Container from "@utils/Container";
import * as classnames from "classnames";
import * as React from "react";
import onClickOutside from "react-onclickoutside";
import { connect } from "react-redux";
import { debounce } from "throttle-debounce";
import ApiConnect from "../../services/ApiConnect";
import SearchResults from "../SearchResults";
import * as Styles from "./SearchBox.pcss";
interface SearchBoxProps {
  toggleSearchBox?: (...args: any[]) => any;
  collapsed?: boolean;
}
interface SearchBoxState {
  searchResults: null;
}
class SearchBox extends React.Component<any, any> {
  public static defaultProps: any;
  private textInput: HTMLInputElement;

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.callAjax = debounce(300, this.callAjax);
    this.state = {
      searchResults: null
    };
  }
  public componentWillMount() {
    ApiConnect.getGenres().then(genres => this.setState({ genres }));
  }
  public handleChange(e) {
    this.callAjax(e.target.value);
  }
  public callAjax(value) {
    ApiConnect.Search(value).then(searchResults =>
      this.setState({ searchResults })
    );
  }
  public handleClickOutside() {
    this.props.collapsed && this.props.toggleSearchBox();
  }
  public render() {
    this.props.collapsed && this.textInput.focus();
    const searchBoxClasses = classnames({
      [Styles.searchbox]: true,
      [Styles.collapsed]: this.props.collapsed
    });
    const resultContainerClasses = classnames({
      [Styles.resultcontainer]: true,
      [Styles.noresults]: !this.state.searchResults,
      [Styles.collapsed]: this.props.collapsed,
      container: true
    });
    return (
      <div className={searchBoxClasses}>
        <Container className={Styles.searchContainer}>
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
              this.props.config && (
                <SearchResults {...this.state} {...this.props} />
              )}
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

export default connect(mapStateToProps)(onClickOutside(SearchBox));
