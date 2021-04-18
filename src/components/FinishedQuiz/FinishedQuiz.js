import React from 'react';
import classes from "./FinishedQuiz.module.sass";
import Button from "../Ui/Button/Button";

const FinishedQuiz = props => {

    const successCount = Object.keys(props.resuts).reduce((total, key) => {
        if (props.resuts[key] === 'success') {
            total++
        }
        return total
    }, 0)

    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {
                    props.quiz.map((quizItem, index) => {
                        const cls =[
                            'fa',
                            props.resuts[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                            classes[props.resuts[quizItem.id]]
                        ]
                        return (
                            <li key={index}>
                                <strong>{index+1}</strong>. 
                                {quizItem.question}
                                <i className={cls.join(' ')}></i>
                            </li>
                        )
                    })
                }
            </ul>
            <p>Правильно {successCount} из {props.quiz.length}</p>
            <Button
                onClick={props.onRetry}
                type='primary'
            >
                Повторить
            </Button>
            <Button
                type='success'
            >
                Все опросы
            </Button>
        </div>
    )
}

export default FinishedQuiz;