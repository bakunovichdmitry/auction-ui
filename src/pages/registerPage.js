// import React from 'react';
//
// class RegisterPage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             email: '',
//             password: '',
//             password2: ''
//         };
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleLogin = this.handleLogin.bind(this);
//     }
//
//     handleChange(e) {
//         const name = e.target.name;
//         const value = e.target.value;
//         this.setState({
//             [name]: value
//         })
//     }
//
//     async submitRegister() {
//         const response = await fetch(url, {
//             method: 'POST',
//             mode: 'cors',
//             cache: 'no-cache',
//             credentials: 'same-origin',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(this.state)
//         });
//     }
//
//     render() {
//         return (
//             <div className="login-wrapper">
//                 <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
//                 <input type="email" name="email" value={this.state.password} onChange={this.handleChange}/>
//                 <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
//                 <input type="password" name="password2" value={this.state.password2} onChange={this.handleChange}/>
//                 <button onClick={this.handleLogin}/>
//             </div>
//         );
//     }
// }
//
// export default RegisterPage;