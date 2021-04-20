import React from 'react';
import classes from "./Input.module.sass";

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && touched && shouldValidate
}

const Input = props => {

    const inputType = props.type || 'text'
    const cls = [classes.Input]
    if (isInvalid(props)) {
        cls.push(classes.invalid)
    }
    return (
        <div className={cls.join(' ')}>
            <label>
                <span className={classes.text}>{props.label}</span>
                <input type={inputType}
                       value={props.value}
                       onChange={props.onChange}

                />
                {
                    isInvalid(props)
                        ? <span className={classes.error}>{props.errorMessage || 'Введите корректное значение'}</span>
                        : null
                }

            </label>

        </div>
    )
}

export default Input;