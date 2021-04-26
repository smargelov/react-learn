import React from 'react';
import classes from "./Auth.module.sass";
import Button from "../../components/Ui/Button/Button";
import Input from "../../components/Ui/Input/Input";
import {validate, validateForm} from "../../form/formFramework";
import axios from "axios";

class Auth extends React.Component {
    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    loginHandler = async () => {
        const authData = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken: true
        }
        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCNQw2faQMuV787n7xx7s4Iv8j0YYtnbFI', authData)
            console.log(response.data)
        } catch (e) {
            console.log(e)
        }

    }

    loginRegister = async () => {
        const authData = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken: true
        }
        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCNQw2faQMuV787n7xx7s4Iv8j0YYtnbFI', authData)
            console.log(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    submitHandler = event => {
        event.preventDefault()
    }

    onChangeHandler = (event, controlName) => {
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}

        control.value = event.target.value
        control.touched = true
        control.valid = validate(control.value, control.validation)

        formControls[controlName] = control

        this.setState({
            formControls,
            isFormValid: validateForm(formControls)
        })
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    value={control.value}
                    type={control.type}
                    label={control.label}
                    errorMessage={control.errorMessage}
                    valid={control.valid}
                    touched={control.touched}
                    shouldValidate={!!control.validation}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация и регистрация</h1>
                    <form onSubmit={this.submitHandler}>

                        {this.renderInputs()}

                        <Button type="success"
                                disabled={!this.state.isFormValid}
                                onClick={this.loginHandler}>Войти</Button>
                        <Button type="primary"
                                disabled={!this.state.isFormValid}
                                onClick={this.loginRegister}>Зарегистрироваться</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Auth;