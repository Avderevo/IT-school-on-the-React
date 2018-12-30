import React, {Component} from 'react';
import FormInput from '../FormComponents/FormInput';
import FormErrors  from '../FormComponents/FormErrors';
import SubmitButton from '../FormComponents/SubmitButton';
import FormTitle from '../FormComponents/FormTitle';
import FormRadio from '../FormComponents/FormRadio';


class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            password:"",
            password2:"",
            remember: '',
            formErrors: {email: '', password: '', remember: '', password2: ''},
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


    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let password2Valid = this.state.password2Valid;
        let checkBoxValid = this.state.checkBoxValid;

        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'Это не похоже на Email';
                break;

            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': 'Пароль меньше 6 символов';
                break;

            case 'password2':
                password2Valid = value === this.state.password;
                fieldValidationErrors.password = password2Valid ? '': 'Пароли не совпадают';
                break;

            case 'remember':
                checkBoxValid = value === this.state.remember;
                fieldValidationErrors.remember = checkBoxValid ? '': 'Необходимо согласие';
                break;

            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,
            password2Valid: password2Valid,
            checkBoxValid: checkBoxValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({
            formValid: this.state.emailValid && this.state.passwordValid
                && this.state.password2Valid && this.state.checkBoxValid});
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let userData = {
            username: this.state.name,
            email: this.state.email,
            password: this.state.password
        };

        this.setState({
            name:"",
            email:"",
            password:"",
            password2:"",
            remember: '',
            formErrors: {email: '', password: '', remember: '', password2: ''},
            emailValid: false,
            passwordValid: false,
            checkBoxValid: false,
            formValid: false

        });

        fetch('http://localhost:8000/users/create_user/',{
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
                    <FormTitle title={"Регистрация"}/>
                    <div className="mb-4">
                        <FormInput
                            type={'text'}
                            title= {'Username'}
                            name= {'name'}
                            value={this.state.name}
                            placeholder = {'Имя'}
                            handleChange = {this.handleInput}
                            classname={'form-control auth-form-control'}/>
                    </div>
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
                    <div className="mb-4">
                        <FormInput
                            type={'password'}
                            title= {'Password2'}
                            name= {'password2'}
                            value={this.state.password2}
                            placeholder = {'Повторите пароль'}
                            handleChange = {this.handleInput}
                            classname={'form-control auth-form-control'}/>
                        <FormErrors
                            formErrors={this.state.formErrors.password2} />
                    </div>

                    <FormRadio
                        label={"Согласен с условиями"}

                        handleChange={this.handleInput}
                        checked={this.state.remember === 'remember_my'}
                        value ={'remember_my'}
                        name={'remember'}
                    />
                    <FormErrors
                        formErrors={this.state.formErrors.remember} />
                    <SubmitButton
                        action = {this.handleFormSubmit}
                        type = {'submit'}
                        title = {'Регистрация'}
                        disabled = {this.state.formValid}
                    />
                </form>
            </section>
        )
    }

}

export default LoginForm;