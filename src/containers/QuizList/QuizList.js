import React from 'react';
import classes from "./QuizList.module.sass";
import {NavLink} from "react-router-dom";
import axios from "axios";


class QuizList extends React.Component {
    state = {
        quizes: []
    }

    async componentDidMount() {
        try {
            const response = await axios.get('https://sm-react-quiz-test-default-rtdb.europe-west1.firebasedatabase.app/quizes.json')
            const  quizes = []
            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Тест №${index + 1}`
                })
            })
            this.setState({
                quizes
            })

        } catch (e) {
            console.log(e)
        }
    }

    renderQuizes() {
        return this.state.quizes.map(quiz => {
            return (
                <li
                    key={quiz.id}
                >
                    <NavLink
                        to={'/quiz/' + quiz.id}
                    >
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Список тестов</h1>

                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default QuizList;