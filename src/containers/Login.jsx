import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'
import '../assets/styles/components/Login.scss';

const Login = props => {
    const [form, setForm] = useState({ email: '', });

    const handleImput = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.loginRequest(form);
        props.history.push('/');
    }
    return (
        <section className="login">
            <section className="login__container">
                <h2>Inicia sesión</h2>
                <form className="login__container--form" onSubmit={handleSubmit}>
                    <input name="email" className="input" type="text" placeholder="Correo" onChange={handleImput} />
                    <input name="password" className="input" type="password" placeholder="Contraseña" onChange={handleImput} />
                    <button className="button">Iniciar sesión</button>
                    <div className="login__container--remember-me">
                        <label>
                            <input type="checkbox" id="cbox1" defaultValue="first_checkbox" />Recuérdame</label>
                        <a href="/">Olvidé mi contraseña</a>
                    </div>
                </form>
                <section className="login__container--social-media">
                    <div><img src={googleIcon} /> Inicia sesión con Google</div>
                    <div><img src={twitterIcon} /> Inicia sesión con Twitter</div>
                </section>
                <p className="login__container--register">No tienes ninguna cuenta{' '}<Link to="/register">Regístrate</Link></p>
            </section>
        </section>

    )
};

const mapDispathToProps = {
    loginRequest,
}

export default connect(null, mapDispathToProps)(Login);