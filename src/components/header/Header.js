import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Header.css';

class Header extends React.Component{
    render(){
        return(
            <>
                <header>
                    <Link to="/" id="header_logo" className={classes.header_nav_link}>Snake</Link>
                    <Link to="/game" className={classes.header_nav_link}>Play Now!</Link>
                </header>
            </>
        )
    }
};

export default Header;