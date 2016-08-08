import React, {PropTypes} from 'react';
import {Link,IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (

    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};
Header.propTypes = {
  loading:React.PropTypes.bool.isRequired
};
export default Header;
// activeClassName: style the link if its already pressed..you're on that page
