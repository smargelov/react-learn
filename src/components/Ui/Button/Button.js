import React from 'react';
import classes from "./Button.module.sass";

const Button = props => {
    const cls = [
        classes[props.type],
        classes.Button
    ]
    return (
        <button
            onClick={props.onClick}
            className={cls.join(' ')}
            disabled={props.disabled}>
            {props.children}
        </button>
    )
}

export default Button;