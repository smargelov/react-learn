import React from 'react';
import classes from "./AnswersList.module.sass";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = props => (
    <ul className={classes.AnswersList}>
        {props.answers.map((answer, index) => {
            return (
                <AnswerItem
                    onAnswerClick={props.onAnswerClick}
                    key={index}
                    answer={answer}/>
            )
        })}
    </ul>
)

export default AnswersList;