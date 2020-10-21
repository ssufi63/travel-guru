import React, { useState } from 'react';
import './Booking.css'
import { Col, Container, Row } from 'react-bootstrap';
import { Link,} from 'react-router-dom';
import fakeData from '../../fakeData/fakeData'
import Navigation from '../Home/Navigation/Navigation';

const Booking = () => {
    const card = fakeData;
    const [showCard, setShowCard] = useState(card[0]);
    return (
    <section className="home">

        <div className="background"></div>
            <Navigation></Navigation>
        <Container className="pt-5 mt-5">

                <Row>
                    <Col lg={5} className='text-center'>
                        <h2 className='destination'>{showCard.name}</h2>
                        <p className='description'>{showCard.description}</p>
                
                    </Col>

                    <Col lg={2} className="mb-5"></Col>

                    <Col lg={5} className="formStyle mb-5 ">
                        <form className="form-area">
                            <div className="form-group">
                                <label>Origin</label>
                                <input type="address" defaultValue={`Dhaka`} className="form-control" placeholder="Enter Address" required />
                            </div>

                            <div className="form-group">
                                <label>Destination</label>
                                <input type="address" className="form-control" defaultValue={showCard.destination} />
                            </div>
                            <div className="form-group row booking-date">
                                <div className="col-6">
                                    <label htmlFor="date-input">From</label>
                                    <input className="form-control" type="date" id="dateFrom" required />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="dateTo">To</label>
                                    <input className="form-control" type="date" id="dateTo" required />
                                </div>
                            </div>
                            <br/>
                           
                            <Link to ='/hotelDetails'><button type="submit" className="btn btn-warning btn-block">Submit</button> </Link>
                        </form>
                    </Col> 
                    </Row>

                    </Container>
    </section>

    );
};

export default Booking;