import React from 'react';
import './Button.css';

const Button = props => {
    const classes = ["Button"];

    switch(props.type) {
        case "danger":
            classes.push("Danger");
            break;
        case "success":
            classes.push("Success");
            break;
        default:
    }

    return (
        <button className={classes.join(" ")} onClick={props.onClick}>{props.children}</button>
    );
};

export default Button;