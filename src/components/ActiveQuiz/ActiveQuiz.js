import React from 'react';
import classes from "./ActiveQuiz.module.sass";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>{props.answerNumber} </strong>
                    {props.question}
                </span>
                <small>{props.answerNumber} из {props.quizLength}</small>
            </p>

            <AnswersList
                onAnswerClick={props.onAnswerClick}
                answers={props.answers}/>
        </div>
    )

export default ActiveQuiz;