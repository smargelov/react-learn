import React from 'react';
import classes from "./Select.module.sass";

const Select = props => {
    return (
        <div className={classes.Select}>
            <label>
                <span className={classes.text}>{props.label}</span>
                <select
                    value={props.value}
                    onChange={props.onChange}
                >
                    {props.options.map((option, index) => {
                        return (
                            <option
                                key={option.value + index}
                                value={option.value}>
                                {option.text}
                            </option>
                        )
                    })}
                </select>
            </label>
        </div>
    )
}

export default Select;