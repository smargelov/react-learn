import React, {Component} from 'react';
import classes from "./Quiz.module.sass";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
    state = {
        isFinished: true,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                id: 1,
                question: 'Лучший JS инструмент?',
                rightAnswerId: 1,
                answers: [
                    {text: 'Vue JS', id: 1},
                    {text: 'React', id: 2},
                    {text: 'Angular', id: 3},
                    {text: 'Vanilla JS', id: 4},
                    {text: 'JQuery )))', id: 5},
                ]
            },
            {
                id: 2,
                question: 'Лучший CSS препроцессор?',
                rightAnswerId: 3,
                answers: [
                    {text: 'LESS', id: 1},
                    {text: 'Stylus', id: 2},
                    {text: 'Sass(Sass)', id: 3},
                    {text: 'Sass(Scss)', id: 4},
                    {text: 'PostCss', id: 5},
                ]
            },
        ]
    }

    onAnswerClickHandler = (answerId) => {

        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') return
        }

        const question = this.state.quiz[this.state.activeQuestion]

        if (question.rightAnswerId === answerId) {
            this.setState({
                answerState: {[answerId]: 'success'}
            })
            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            })
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <section className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    {
                        this.state.isFinished
                            ? <FinishedQuiz/>
                            : <ActiveQuiz
                                onAnswerClick={this.onAnswerClickHandler}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}/>
                    }
                </div>
            </section>
        );
    }
}

export default Quiz;