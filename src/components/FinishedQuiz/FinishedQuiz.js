import React from 'react';
import classes from "./FinishedQuiz.module.sass";

const FinishedQuiz = props => {
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                <li>
                    <strong>1. </strong>
                    Вопрос 1
                    <i className={'fa fa-times ' + classes.error}></i>
                </li>
                <li>
                    <strong>2. </strong>
                    Вопрос 2
                    <i className={'fa fa-check ' + classes.success}/>
                </li>
            </ul>
            <p>Правильно 1 из 2</p>
            <button>Повторить</button>
        </div>
    )
}

export default FinishedQuiz;