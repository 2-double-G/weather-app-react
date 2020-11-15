import React, { Component } from 'react';
import classes from './Layout.css';

export default class Layout extends Component {

    render() {
        return (
            <main className={classes.Layout}>
                {this.props.children}
            </main>
        );
    }
}