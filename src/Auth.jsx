import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI, registerAPI } from './services/allAPIs';

function Auth({ register }) {
    const isRegisterForm = register ? true : false;
    const location = useNavigate();

    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
        address: "",
        gender: ""
    });

    const registerData = async () => {
        const { username, email, password, address, gender } = userData;
        if (!username || !email || !password || !address || !gender) {
            alert('Please fill the form');
        } else {
            const result = await registerAPI(userData);
            console.log(result);
            if (result.status === 200) {
                alert(result.data);
                location('/login');
            } else {
                alert(result.response.data);
            }
        }
    };

    const loginData = async () => {
        const { email, password } = userData;

        if (!email || !password) {
            alert('Please fill the form');
        } else {
            const result = await loginAPI(userData);
            console.log(result);
            if (result.status === 200) {
                alert('Login successful');
                location('/dash');
            } else {
                alert('Invalid credentials');
            }
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'grey' }}>
            <div style={{ width: '300px', padding: '20px', backgroundColor: 'black', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                <h1 className='text-center'>{isRegisterForm ? 'Register Here' : 'Login Here'}</h1>
                {isRegisterForm &&
                    <input type="text" value={userData.username} onChange={e => setUserData({ ...userData, username: e.target.value })} style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }} placeholder='Username' />
                }
                <input type="text" value={userData.email} onChange={e => setUserData({ ...userData, email: e.target.value })} style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }} placeholder='Email' />
                <input type="password" value={userData.password} onChange={e => setUserData({ ...userData, password: e.target.value })} style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }} placeholder='Password' />
                {isRegisterForm &&
                    <input type="text" value={userData.address} onChange={e => setUserData({ ...userData, address: e.target.value })} style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }} placeholder='Address' />
                }
                {isRegisterForm &&
                    <select value={userData.gender} onChange={e => setUserData({ ...userData, gender: e.target.value })} style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                }
                {isRegisterForm ?
                    <div style={{ textAlign: 'center' }}>
                        <button className='btn btn-primary' onClick={registerData}>Register</button>
                        <Link to={'/login'} style={{ textDecoration: "none", color: 'green' }}>Already have an account? Login here</Link>
                    </div> :
                    <div style={{ textAlign: 'center' }}>
                        <button className='btn btn-primary' onClick={loginData}>Login </button>
                        <Link to={'/register'} style={{ textDecoration: "none", color: 'green' }}>Don't have an account? Register here</Link>
                    </div>
                }
            </div>
        </div>
    );
}

export default Auth;
