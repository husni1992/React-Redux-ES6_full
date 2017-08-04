import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import ContainerTest from '../course/ContainerTest';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/courses" activeClassName="active">Course</Link>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
            {/* {" | "}
            <Link to="/count" activeClassName="active"><ContainerTest /></Link> */}
        </nav>
    );
};

export default Header;