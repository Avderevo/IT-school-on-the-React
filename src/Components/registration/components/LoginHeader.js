import React from 'react';
import { Link } from 'react-router-dom'

const LoginHeader = () => {

    return(
        <div className="authcard-header">
            <nav className="nav  nav-fill justify-content-center nav-authcard">
                <Link className="nav-item nav-link active" to='/login/'>Вход</Link>
                <Link className="nav-item nav-link" to='/signup/'>Регистрация</Link>
            </nav>
        </div>

    )
};


export default LoginHeader;