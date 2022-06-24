import './Login.css';
import React, { Component } from 'react';
import { useNavigate, Link } from "react-router-dom";

class Login extends Component {
    render() {
        let loginState = 'false';
        function handleClick(e) {
            {
                e.preventDefault();
                const id = document.getElementById('id').value;
                const pwd = document.getElementById('pwd').value;
                if (id != 'admin') {
                    return alert("아이디가 올바르지 않습니다.");
                } else if (pwd != '1234') {
                    return alert("비밀번호가 올바르지 않습니다.");
                } else {
                    loginState = 'true';
                }
            }
        };
        return (
            <div class="login-box">
                <h2>Login</h2>
                <form >
                    <div class="user-box">
                        <input type="text" name="id" id='id' required="" />
                        <label>Username</label>
                    </div>
                    <div class="user-box">
                        <input type="password" name="pwd" id='pwd' required="" />
                        <label>Password</label>
                    </div>
                    <a href="" onClick={handleClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                </form>
            </div >
        )
    }
}

export default Login;
