import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <nav>
            <Link to = "/">Main page</Link>
            <Link to = "/about">About</Link>
        </nav>
    )
}
export default Navigation;