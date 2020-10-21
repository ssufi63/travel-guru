import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, FormControl, Navbar } from 'react-bootstrap';
import logo from '../../../images/Logo.png'
import './Navigation.css'

const Navigation = () => {
    return (
       
        <Container>

            <Navbar variant="dark">
                <Navbar.Brand href="#home"><img className="logo" src={logo} alt="" /></Navbar.Brand>

                <Navbar.Collapse id="basic-navbar-nav">


                    <Form inline>
                        <FormControl variant='white' type="text" placeholder="Search Your Destination...." className="mr-sm-2" />
                    </Form>

                    <Link className='navBar ml-5' to="home">News</Link>
                    <Link className='navBar ml-5' to="destination">Destination</Link>
                    <Link className='navBar ml-5' to="blog">Blog</Link>
                    <Link className='navBar ml-5' to="contact">Contact</Link>
                    <Link to='/login'><Button className='button'>Login</Button></Link>
                </Navbar.Collapse>
            </Navbar>

        </Container>

);
};

export default Navigation;