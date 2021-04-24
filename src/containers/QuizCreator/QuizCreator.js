import React from 'react';
import classes from "./QuizCreator.module.sass";
import Input from "../../components/Ui/Input/Input";
import Button from "../../components/Ui/Button/Button";

class QuizCreator extends React.Component {
    submitHandler = event => {
        event.preventDefault()
    }
    addQuestionHandler = () => {

    }

    createQuizHandler = () => {

    }

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Quiz Creator</h1>
                    <form onSubmit={this.submitHandler}>
                        <Input
                        label="Ввести вопрос"
                        />
                        <hr/>
                        <Input/>
                        <Input/>
                        <Input/>
                        <Input/>

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