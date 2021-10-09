import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="login-from">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="email"></input>
                    <br></br>
                    <input type="password" ></input>
                    <br></br>
                    <input type="submit" value="submit" className="btn-regular"></input>
                </form>
                <p>new tko ema john?<Link to="/register">Create Account</Link></p>
                <div>----------or----------</div>
                <button
                    className="btn-regular"
                    onClick={signInUsingGoogle}

                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;