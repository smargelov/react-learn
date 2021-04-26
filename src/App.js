import {Component} from "react";
import Layout from "./hoc/Layout/Layout";
import {Route, Switch} from "react-router-dom"
import Quiz from "./containers/Quiz/Quiz";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";
import Auth from "./containers/Auth/Auth";


class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route component={Auth} path="/auth"/>
                    <Route component={QuizCreator} path="/quiz-create"/>
                    <Route component={Quiz} path="/quiz/:id"/>
                    <Route component={QuizList} path="/"/>
                </Switch>
            </Layout>
        );
    }
}

export default App;
