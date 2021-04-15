import React, {Component} from 'react';
import classes from "./Quiz.module.sass";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
        quiz: []
    }

    render() {
        return (
            <section className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Quiz</h1>
                    <ActiveQuiz/>
                </div>
            </section>
        );
    }
}

export default Quiz;