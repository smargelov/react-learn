import axios from "axios";

export default axios.create({
    baseURL: 'https://sm-react-quiz-test-default-rtdb.europe-west1.firebasedatabase.app'
})