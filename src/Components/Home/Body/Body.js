import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fakeData from '../../../fakeData/fakeData'
import './Body.css'

const Body = () => {
    const card = fakeData;
    const [showCard, setShowCard] = useState(card[0]);


    return (
        <section>
            <Container className="pt-5 mt-5">

                <Row>
                    <Col lg={5} className='text-center'>
                        <h2 className='placeName'>{showCard.name}</h2>
                        <p className='description'>{showCard.description}</p>
                        <br />
                        <Link style={{ 'text-decoration': 'none' }} to={'/booking/' + showCard.name}><button className='booking'>Booking</button> </Link>


                    </Col>

                    <Col lg={7} className=''>

                        <Row>
                            {card.map(data =>
                                <Col className='pic' sm={4} key={data.name}>

                                    <div>
                                        <Link to={`/booking/${data.name}`}> <img className="cardImage" src={data.image} alt="" />
                                            <h4 className="textPlace"><b>{data.name}</b></h4>

                                        </Link>
                                    </div>
                                </Col>)
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default Body;