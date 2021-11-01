import React from 'react';
import {setUserSession, getToken} from "../utils/user";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };


        this.handleChange = this.handleChange.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    async submitLogin() {
        const response = await fetch('http://localhost:8000/users/jwt/token/', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        });
        response.json().then(
            (value => setUserSession(value['access'], value['refresh']))
        )
    }

    render() {
        return (
            <div className="login-wrapper">
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.submitLogin}/>
            </div>
        );
    }
}

export default LoginPage;