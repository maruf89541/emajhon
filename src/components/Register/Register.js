import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-from">
            <div>
                <h2>Register</h2>
                <form onSubmit>
                    <input type="email" placeholder="email"></input>
                    <br></br>
                    <input type="password" placeholder="enter-password"></input>
                    <br></br>
                    <input type="password" placeholder="Re-enter-password"></input>
                    <br></br>
                    <input type="submit" value="submit" className="btn-regular"></input>
                </form>
                <p>Alredy have an account?<Link to="/login">Login</Link></p>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;