import React, { useContext } from 'react';
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png';
import './HotelDetails.css';
import HotelInfo from "./HotelInfo";
import Hotels from './Hotels';

import { UserContext } from '../../App';

const HotelDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    return (


        <section className='hotelDetails'>
            <br></br>

            <Container>

                <Row>
                    <Col lg={6}>


                        <Navbar.Brand to="/"><img style={{width:'150px'}} className="logoLogin" src={logo} alt="" /></Navbar.Brand>
                    </Col>

                    <Col lg={6}>

                        <Navbar variant="dark">


                            <Navbar.Collapse id="basic-navbar-nav">

                                <Link className='hotelNav ml-5' to="home">News</Link>
                                <Link className='hotelNav ml-5' to="destination">Destination</Link>
                                <Link className='hotelNav ml-5' to="blog">Blog</Link>
                                <Link className='hotelNav ml-5' to="contact">Contact</Link>
                                <Link to='/login'><Button style={{width:'180px'}} className='button'>{loggedInUser.name}</Button></Link>
                            </Navbar.Collapse>
                        </Navbar>


                    </Col>

                </Row>

                <hr></hr>



            </Container>

            <Container>
                <Row> 

                    <Col md={7}>

                        {
                            HotelInfo.map(hotel=> <Hotels hotel={hotel}></Hotels>)

                        }


                    </Col>
                    <Col md={5}>

                        <div className='container'> 
                        


                        </div>



                    </Col>




                </Row>



            </Container>

        </section>
    );
};

export default HotelDetails;