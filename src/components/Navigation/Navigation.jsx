import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navigation.css';

const links = [
    { to: '/', label: 'Search weather', exact: true },
    { to: '/today', label: 'Today', exact: false },
    { to: '/by-hour', label: 'By hour', exact: false },
    { to: '/week', label: 'Week', exact: false },
];

class Navigation extends Component {

    renderLinks() {
        return (
            links.map((link, index) => {
                return (
                    <li key={index}>
                        <NavLink
                            to={link.to}
                            exact={link.exact}
                        >
                            {link.label}
                        </NavLink>
                    </li>
                )
            })
        )
    }

    render() {
        return (
            <nav className={classes.Navigation}>
                <ul>
                    {this.renderLinks()}
                </ul>
            </nav>
        )
    }
}

export default Navigation;