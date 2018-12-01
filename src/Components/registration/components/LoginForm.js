import React, {Component} from 'react';
import FormInput from './FormInput';
import FormErrors  from './FormErrors';
import SubmitButton from './SubmitButton';
import FormTitle from './FormTitle';
import FormRadio from './FormRadio';


class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            remember: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            checkBoxValid: false,
            formValid: false
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInput = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        this.setState({[name]: value},
            () => { this.validateField(name, value) }
        )
    };

    handleOptionChange = (e)  => {
        this.setState({
            remember: e.target.value
        });
    };

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'Это не похоже на Email';
                break;

            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': 'Пароль меньше 6 символов';
                break;


            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let userData = {
            email: this.state.email,
            password: this.state.password
        };

        console.log(userData);

        this.setState({
            email:"",
            password:"",
            remember: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            checkBoxValid: false,
            formValid: false

        });

        fetch('http://example.com',{
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            response.json().then(data =>{
                console.log("Successful" + data);
            })
        })
    }

    render(){

        return(
            <section id="authcard-form">
                <form className="auth-form-signin js-user-login-form mb-3">
                    <FormTitle title={"Войти"}/>
                    <div className="mb-4">
                        <FormInput
                            type={'email'}
                            title= {'Email'}
                            name= {'email'}
                            value={this.state.email}
                            placeholder = {'Электронная почта'}
                            handleChange = {this.handleInput}
                            classname={'form-control auth-form-control'}/>
                        <FormErrors
                            formErrors={this.state.formErrors.email} />
                    </div>
                    <div className="mb-4">
                        <FormInput
                            type={'password'}
                            title= {'Password'}
                            name= {'password'}
                            value={this.state.password}
                            placeholder = {'Пароль'}
                            handleChange = {this.handleInput}
                            classname={'form-control auth-form-control'}/>
                        <FormErrors
                            formErrors={this.state.formErrors.password} />
                    </div>
                    <FormRadio
                            label={"Запомнить меня"}

                            handleChange={this.handleOptionChange}
                            checked={this.state.remember === 'remember_my'}
                            value ={'remember_my'}
                    />
                    <SubmitButton
                        action = {this.handleFormSubmit}
                        type = {'submit'}
                        title = {'Войти'}
                        disabled = {this.state.formValid}
                        />
                    <div className="text-center mt-3">
                        <a href="">Забыли пароль?</a>
                    </div>
                </form>
            </section>
        )
    }
}


export default LoginForm;