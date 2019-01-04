import React, {Component} from 'react';
import FormInput from '../FormComponents/FormInput';
import FormErrors  from '../FormComponents/FormErrors';
import SubmitButton from '../FormComponents/SubmitButton';
import FormTitle from '../FormComponents/FormTitle';
import FormRadio from '../FormComponents/FormRadio';
import { userActions } from '../../_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'




class LoginForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            username:"",
            password:"",
            submitted: false,
            remember: '',
            formErrors: {username: '', password: ''},
            usernameValid: false,
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
        let usernameValid = this.state.usernameValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'username':
                usernameValid = value.length >= 0;
                fieldValidationErrors.email = usernameValid ? '' : 'Поле не может быть пустым';
                break;

            case 'password':
                passwordValid = value.length >= 0;
                fieldValidationErrors.password = passwordValid ? '': 'Поле не может быть пустым';
                break;


            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            usernameValid: usernameValid,
            passwordValid: passwordValid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.usernameValid && this.state.passwordValid });
    }

    handleFormSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        this.setState({
            username:"",
            password:"",
            remember: '',
            formErrors: {username: '', password: ''},
            usernameValid: false,
            passwordValid: false,
            checkBoxValid: false,
            formValid: false

        });
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));



        }
    }


    render(){



        return(
            <section id="authcard-form">
                <form className="auth-form-signin js-user-login-form mb-3">
                    <FormTitle title={"Войти"}/>
                    <div className="mb-4">
                        <FormInput
                            type={'username'}
                            title= {'Username'}
                            name= {'username'}
                            value={this.state.username}
                            placeholder = {'Имя'}
                            handleChange = {this.handleInput}
                            classname={'form-control auth-form-control'}/>
                        <FormErrors
                            formErrors={this.state.formErrors.username} />
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

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginForm = withRouter(connect(mapStateToProps)(LoginForm));
export { connectedLoginForm as LoginForm };
