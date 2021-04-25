import React from 'react';
import classes from "./QuizCreator.module.sass";
import Input from "../../components/Ui/Input/Input";
import Button from "../../components/Ui/Button/Button";
import {createControl} from "../../form/formFramework";
import Select from "../../components/Ui/Select/Select";

function createOptionControl(num) {
    return createControl({
        label: `Вариант ${num}`,
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
        quiz: [],
        rightAnswerId: 1,
        formControls: createFormControls()
    }

    submitHandler = event => {
        event.preventDefault()
    }
    addQuestionHandler = () => {

    }

    createQuizHandler = () => {

    }

    changeHandler = (value, controlName) => {

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
                            type="primary"
                            onClick={this.addQuestionHandler}>
                            Добавать вопрос
                        </Button>
                        <Button
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

export default QuizCreator;