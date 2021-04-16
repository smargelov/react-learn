import React, {Component} from 'react';
import classes from "./Quiz.module.sass";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
        activeQuestion: 0,
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
        console.log('Answer ID ', answerId)
        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    }

    render() {
        return (
            <section className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        onAnswerClick={this.onAnswerClickHandler}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}/>
                </div>
            </section>
        );
    }
}

export default Quiz;