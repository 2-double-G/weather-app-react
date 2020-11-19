import React from 'react';
import classes from './MenuIcon.css';

const MenuIcon = (props) => {
    const cls = [
        classes.MenuIcon,
        'fas'
    ];

    if (props.isOpen) {
        cls.push('fa-times');
        cls.push(classes.open);
    } else {
        cls.push('fa-bars');
    }

    return (
        <i
            className={cls.join(' ')}
            onClick={props.onToggle}
        />
    )
}

export default MenuIcon;