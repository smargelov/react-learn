import React, {Component} from 'react';
import classes from "./Quiz.module.sass";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import Loader from "../../components/Ui/Loader/Loader";
import {fetchQuizById, quizAnswerClick, retryQuiz} from "../../store/actions/quiz";
import {connect} from "react-redux";

class Quiz extends Component {

    componentDidMount() {
        this.props.fetchQuizById(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.retryQuiz()
    }

    render() {
        return (
            <section className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    {
                        this.props.loading || !this.props.quiz
                            ? <Loader/>
                            : this.props.isFinished
                            ? <FinishedQuiz
                                resuts={this.props.results}
                                quiz={this.props.quiz}
                                onRetry={this.props.retryQuiz}/>
                            : <ActiveQuiz
                                onAnswerClick={this.props.quizAnswerClick}
                                question={this.props.quiz[this.props.activeQuestion].question}
                                answers={this.props.quiz[this.props.activeQuestion].answers}
                                quizLength={this.props.quiz.length}
                                answerNumber={this.props.activeQuestion + 1}
                                state={this.props.answerState}/>
                    }
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        results: state.quiz.results,
        isFinished: state.quiz.isFinished,
        activeQuestion: state.quiz.activeQuestion,
        answerState: state.quiz.answerState,
        quiz: state.quiz.quiz,
        loading: state.quiz.loading,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchQuizById: id => dispatch(fetchQuizById(id)),
        quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
        retryQuiz: () => dispatch(retryQuiz())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)