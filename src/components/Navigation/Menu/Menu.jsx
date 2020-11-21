import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Menu.css'

const links = [
    { to: '/', label: 'Search weather', exact: true },
    { to: '/today', label: 'Today', exact: false },
    { to: '/hourly', label: 'Hourly', exact: false },
    { to: '/weekly', label: 'Weekly', exact: false },
];

class Menu extends Component {

    clickHandler = () => {
        this.props.onCLose()
    }
    
      renderLinks() {
        return links.map((link, index) => {
          return (
            <li key={index}>
              <NavLink
                to={link.to}
                exact={link.exact}
                onClick={this.clickHandler}
              >
                {link.label}
              </NavLink>
            </li>
          )
        })
      }

    render() {
        const cls = [classes.Menu];

        if (!this.props.isOpen) {
            cls.push(classes.close);
        }

        return (
            <div className={cls.join(' ')}>
                <nav>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Menu;