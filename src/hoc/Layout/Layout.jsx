import React, { Component } from 'react';
import classes from './Layout.css';
import MenuIcon from '../../components/Navigation/MenuIcon/MenuIcon';
import Menu from './../../components/Navigation/Menu/Menu';


class Layout extends Component {

    state = {
        menu: false
    }

    menuClickHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    onCloseMenuHandler () {
        this.setState({
            menu: false
        })
    }

    render() {
        return (
            <div className={classes.Layout}>     
                <main>
                    {this.props.children}
                </main>
                <Menu
                    isOpen={this.state.menu}
                    onCLose={this.onCloseMenuHandler.bind(this)}
                />
                <MenuIcon
                    isOpen={this.state.menu}
                    onToggle={this.menuClickHandler}
                />
            </div>
        );
    }
}

export default Layout;