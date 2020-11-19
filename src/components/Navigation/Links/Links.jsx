import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Links.css';

const links = [
    { to: '/today', label: 'Today', exact: false },
    { to: '/hourly', label: 'Hourly', exact: false },
    { to: '/weekly', label: 'Weekly', exact: false },
];

class Links extends Component {

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
            <nav className={classes.Links}>
                <ul>
                    {this.renderLinks()}
                </ul>
            </nav>
        )
    }
}

export default Links;