import React from 'react';
import classes from "./QuizCreator.module.sass";
import Input from "../../components/Ui/Input/Input";
import Button from "../../components/Ui/Button/Button";
import {createControl, validate, validateForm} from "../../form/formFramework";
import Select from "../../components/Ui/Select/Select";
import axios from "../../axios/axios-quiz";
import {connect} from "react-redux";
import {createQuizQuestion, finishCreateQuiz} from "../../store/actions/create";

function createOptionControl(num) {
    return createControl({
        label: `Вариант ${num}`,
        id: num,
        errorMessage: 'Значение не может быть пустым',
    }, {required: true})
}

function createFormControls() {
    return {
        question: createControl({
            label: 'Введите вопрос',
            errorMessage: 'Вопрос не может быть пустым',
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4)

    }
}

class QuizCreator extends React.Component {
    state = {
        isFormValid: false,
        rightAnswerId: 1,
        formControls: createFormControls()
    }

    submitHandler = event => {
        event.preventDefault()
    }
    addQuestionHandler = (event) => {
        event.preventDefault()

        const {question, option1, option2, option3, option4 } = this.state.formControls
        const questionItem = {
            question: question.value,
            id: this.props.quiz.length + 1,
            rightAnswerId: this.state.rightAnswerId,
            answers: [
                {text: option1.value, id: option1.id},
                {text: option2.value, id: option2.id},
                {text: option3.value, id: option3.id},
                {text: option4.value, id: option4.id},
            ]
        }
        this.props.createQuizQuestion(questionItem)
        this.setState({
            isFormValid: false,
            rightAnswerId: 1,
            formControls: createFormControls()
        })
    }

    createQuizHandler = event => {
        event.preventDefault()

            this.setState({
                isFormValid: false,
                rightAnswerId: 1,
                formControls: createFormControls()
            })
            this.props.finishCreateQuiz()
    }

    changeHandler = (value, controlName) => {
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}

        control.value = value
        control.touched = true
        control.valid = validate(control.value, control.validation)

        formControls[controlName] = control

        this.setState({
            formControls,
            isFormValid: validateForm(formControls)
        })
    }

    renderControls() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <React.Fragment
                    key={controlName + index}>
                    <Input
                        value={control.value}
                        label={control.label}
                        errorMessage={control.errorMessage}
                        valid={control.valid}
                        touched={control.touched}
                        shouldValidate={!!control.validation}
                        onChange={event => this.changeHandler(event.target.value, controlName)}
                    />
                    {index === 0 ? <hr/> : null}
                </React.Fragment>
            )
        })
    }

    changeSelectHandler= event => {
        this.setState({
            rightAnswerId: +event.target.value
        })
    }

    render() {
        const select = <Select
            label="Выберите правильный ответ"
            value={this.state.rightAnswerId}
            onChange={this.changeSelectHandler}
            options={[
                {text: 1, value: 1},
                {text: 2, value: 2},
                {text: 3, value: 3},
                {text: 4, value: 4},
            ]}
        />
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Quiz Creator</h1>
                    <form onSubmit={this.submitHandler}>
                        {this.renderControls()}

                        {select}
                        <Button
                            disabled={!this.state.isFormValid}
                            type="primary"
                            onClick={this.addQuestionHandler}>
                            Добавать вопрос
                        </Button>
                        <Button
                            disabled={this.props.quiz.length === 0}
                            type="success"
                            onClick={this.createQuizHandler}>
                            Создать тест
                        </Button>

                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        quiz: state.create.quiz
    }
}
function mapDispatchToProps(dispatch) {
    return {
        createQuizQuestion: item => dispatch(createQuizQuestion(item)),
        finishCreateQuiz: () => dispatch(finishCreateQuiz())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizCreator);