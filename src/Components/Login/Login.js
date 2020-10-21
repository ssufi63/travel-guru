import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import {
    initializeLoginFramework, handleGoogleSignIn, handleFbSignIn,
    signInWithEmailAndPassword, resetPassword
} from './FirebaseManager';
import google from '../../images/icon/google.png';
import fb from '../../images/icon/fb.png';
import './Login.css'
import Navigation from '../Home/Navigation/Navigation';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        photo: '',
        email: '',
        password: '',
        error: '',
        success: false,
    })


    initializeLoginFramework();

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                handleResponse(res, true);
            })

    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 5;
            const passwordHasNumber = /\d{1}/.test(e.target.value)
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
    }

    const handleSubmit = (e) => {
        if (user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        e.preventDefault();
    }

    return (
        <section className="background">
            <Navigation></Navigation>
            <Container style={{ marginTop: '50px' }}>
                <Row>
                    <Col></Col>
                    <Col className="form-part">
                        <h3 style={{ textAlign: 'center' }}>Login</h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control name="email" onBlur={handleBlur} style={{ border: 'none', borderBottom: '1px solid gray' }} type="email" placeholder="Username or Email" required />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control name="password" onBlur={handleBlur} style={{ border: 'none', borderBottom: '1px solid gray' }} type="password" placeholder="Password" required />
                            </Form.Group>

                            <div className="form-bottom">
                                <Form.Group>
                                    <Form.Check type="checkbox" label="Remember Me" />
                                </Form.Group>

                                <Form.Group controlId="formBasicCheckbox">
                                    <Link onClick={() => resetPassword(user.email)} style={{ color: '#F9A617' }}>Forgot Password</Link>
                                </Form.Group>
                            </div>

                            <button style={{ width: '100%',  borderRadius: '50px' }} className="head-button" variant="primary" type="submit">Login</button>

                            <Form.Group style={{ marginTop: '5px', textAlign: 'center' }}>
                                <p>Don't have account? <Link to="/home" style={{ color: '#F9A617' }}>Create an Account</Link></p>
                            </Form.Group>
                        </Form>

                        <div className="d-flex justify-content-center">
                            <div style={{ borderTop: '1px solid gray', width: '48%' }}></div>
                            <p style={{ marginTop: '-13px' }}>or</p>
                            <div style={{ borderTop: '1px solid gray', width: '48%' }}></div>
                        </div>

                        <div className="login-alternative">
                            <button onClick={fbSignIn}><img src={fb} alt="" /> Continue with Facebook</button>
                            <button onClick={googleSignIn}><img src={google} alt="" /> Continue with Google</button>
                        </div>

                        <p style={{ color: 'red', textAlign: 'center' }}>{user.error}</p>
                        {user.success && <p style={{ color: 'green', textAlign: 'center' }}>User logged In successfully!</p>}
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </section>
    );
};


export default Login;