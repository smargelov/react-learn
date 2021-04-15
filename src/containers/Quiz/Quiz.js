import React, {Component} from 'react';
import classes from "./Quiz.module.sass";

class Quiz extends Component {
    state = {
        quiz: []
    }

    render() {
        return (
            <section className={classes.Quiz}>
                <h1>Quiz</h1>
            </section>
        );
    }
}

export default Quiz;