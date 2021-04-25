import React from 'react';
import classes from "./QuizList.module.sass";
import {NavLink} from "react-router-dom";
import axios from "../../axios/axios-quiz";
import Loader from "../../components/Ui/Loader/Loader";


class QuizList extends React.Component {
    state = {
        quizes: [],
        loading: true
    }

    async componentDidMount() {
        try {
            const response = await axios.get('/quizes.json')
            const quizes = []
            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Тест №${index + 1}`
                })
            })
            this.setState({
                quizes,
                loading: false
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
                    {
                        this.state.loading
                            ? <Loader/>
                            : <ul>
                                {this.renderQuizes()}
                              </ul>
                    }

                </div>
            </div>
        )
    }
}

export default QuizList;