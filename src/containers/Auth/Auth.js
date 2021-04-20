import React from 'react';
import classes from "./Auth.module.sass";
import Button from "../../components/Ui/Button/Button";
import Input from "../../components/Ui/Input/Input";

class Auth extends React.Component {
    loginHandler = () => {

    }

    loginRegister = () => {

    }

    submitHandler = event => {
        event.preventDefault()
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация и регистрация</h1>
                    <form onSubmit={this.submitHandler}>
                        <Input type="email" label="Email"/>
                        <Input type="password" label="Пароль"/>
                        <Button type="success" onClick={this.loginHandler}>Войти</Button>
                        <Button type="primary" onClick={this.loginRegister}>Зарегистрироваться</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Auth;