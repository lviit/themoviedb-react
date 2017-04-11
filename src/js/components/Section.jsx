import React from 'react';
import Classnames from 'classnames';
import Styles from '../../css/section.pcss';

const Section = (props) => {
  const classes = Classnames({
    [Styles.dark]: props.dark,
    [Styles.section]: true,
  });

  return (
    <div className={classes}>
      {props.title && <h2 className={Styles.title}>{props.title}</h2>}
      <div className="container">
        {props.content}
      </div>
    </div>
  );
};

Section.propTypes = {
  title: React.PropTypes.string,
  dark: React.PropTypes.bool,
  content: React.PropTypes.node,
};

Section.defaultProps = {
  title: null,
  dark: false,
  content: {},
};

export default Section;
