import React, {Component} from 'react';
import {LoginForm} from './LoginForm';
import LoginHeader from '../FormComponents/LoginHeader'
import SocialFooter from "../FormComponents/SocialFooter";



class LoginPage extends Component{
    render(){
        return(
            <section id="auth-card">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-6">
                            <div className="shadow">
                                <LoginHeader/>
                                <div className="card-body">
                                    <LoginForm />
                                </div>
                               <SocialFooter />
                            </div>
                        </div>
                        <div className="col-md-3">
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default LoginPage;
