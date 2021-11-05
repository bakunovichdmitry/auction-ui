import React, {useState} from "react";
import UserService from "../../services/UserService";

export default function Login({setToken}) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await UserService.loginUser(
            username, password
        );
        setToken(token.access);
      }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <p>Username</p>
                <input type="text" onChange={e => setUsername(e.target.value)}/>
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)}/>
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}