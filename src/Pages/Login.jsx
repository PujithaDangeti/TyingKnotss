import axios from 'axios';
import { useState } from 'react';

let API_URL = "http://localhost:3000/Profiles";

function Login() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(API_URL, loginData);
            if (response.status === 200) {
                setMessage("Login Successful!");
               
                console.log(response.data);
            } else {
                setMessage("Invalid credentials. Please try again.");
            }
        } catch (error) {
            console.log("Error during login", error);
            setMessage("Error occurred during login. Please try again later.");
        }
    };

    return (
        <>
            <div id="login-form">
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        placeholder="Password"
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </>
    );
}

export default Login;