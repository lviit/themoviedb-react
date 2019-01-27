import * as React from "react";
import { NavLink, withRouter } from "react-router-dom";
import SearchBox from "../SearchBox";
import * as Styles from "./header.pcss";

export class Header extends React.Component<any, any> {
  public static defaultProps: any;

  constructor(props) {
    super(props);
    this.toggleSearchBox = this.toggleSearchBox.bind(this);
    this.state = {
      toggleSearchBox: false
    };
  }
  public toggleSearchBox() {
    this.setState({ toggleSearchBox: this.state.toggleSearchBox === false });
  }
  public render() {
    return (
      <div>
        <div className={Styles.header}>
          <div className={Styles.navigation}>
            <button
              className={`${Styles.button} material-icons`}
              onClick={this.props.history.goBack}
            >
              arrow_back
            </button>
            <ul className={Styles.menu}>
              <li className={Styles.menuitem}>
                <NavLink
                  exact
                  className={Styles.menulink}
                  activeClassName={Styles.active}
                  to="/"
                >
                  Latest
                </NavLink>
              </li>
              <li className={Styles.menuitem}>
                <NavLink
                  className={Styles.menulink}
                  activeClassName={Styles.active}
                  to="/genres"
                >
                  Genres
                </NavLink>
              </li>
              <li className={Styles.menuitem}>
                <NavLink
                  className={Styles.menulink}
                  activeClassName={Styles.active}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
            </ul>
            <button
              className={`${Styles.button} material-icons`}
              onClick={this.toggleSearchBox}
            >
              search
            </button>
          </div>
        </div>
        <SearchBox
          collapsed={this.state.toggleSearchBox}
          toggleSearchBox={this.toggleSearchBox}
        />
      </div>
    );
  }
}
Header.defaultProps = {
  history: {}
};
export default withRouter(Header);
