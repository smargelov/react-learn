import {Component} from "react";
import Layout from "./hoc/Layout/Layout";

class App extends Component {
    render() {
        return (
            <Layout>
                <div>
                    <h4 style={{color: 'blueviolet'}}>Layout done!</h4>
                </div>
            </Layout>
        );
    }
}

export default App;
