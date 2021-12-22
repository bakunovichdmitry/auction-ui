import React, {useState} from "react";
import UserService from "../../services/UserService";
import {setToLocalStorage} from "../../utils/storage";
import {useHistory} from "react-router-dom";

export default function Login(props) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    let history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();
        await UserService.login(
            username, password
        ).then(response => {
                if (response.status === 200) {
                    setToLocalStorage('token', response.data.access);
                    setToLocalStorage('isAuth', true);
                    history.push(props.location.state.url);
                }
            }
        )
    }


    return (
        <div className="sign-up__wrapper" style={{height: "100%", display: "flex"}}>
            <div className="sign-up__logo">Sign up in your account</div>
            <form onSubmit={handleSubmit}>
                <div className="sign-up__top-of-login"/>
                <label>
                    <div className="sign-up__label">Login</div>
                    <input type="text" className="sign-up__input btn" placeholder="Login" required={true}
                           onChange={e => setUsername(e.target.value)}/>
                </label>
                <label>
                    <div className="sign-up__label">Password</div>
                    <input type="password" className="sign-up__input btn" placeholder="Password" required={true}
                           onChange={e => setPassword(e.target.value)}/>
                </label>
                <button type="submit" className="submit btn">Submit</button>
            </form>
        </div>
    )
}