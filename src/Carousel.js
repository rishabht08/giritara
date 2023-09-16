// src/Carousel.js
import React, { useState, useEffect, useRef } from 'react';
import { Carousel, Button, Modal, Row, Table, Tabs, Tab, Form, Container } from 'react-bootstrap';
import ModalComponent from "./components/Modal-components"
import { BsFacebook , BsInstagram  , BsWhatsapp} from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const TravelCarousel = ({ data }) => {

    const [eventData, setEventData] = useState([])

    const [details, setDetails] = useState({})
    const [incs, setIncs] = useState({
        includes: [],
        excludes: []
    })

    const [showModal, setShowModal] = useState(false);
    const [contact, setContact] = useState(false);

    useEffect(() => {
        setEventData(data)
    }, [data])

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm('service_ubwxr4w', 'template_qaliqh1', form.current, 'lLqlA6wimmnJyjy2c')
            .then((result) => {

                setContact(false)
                alert("Query Sent")
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
                alert("Cannot send query. Try again later")
            });
    };


    const carouselStyle = {
        maxWidth: '100%',
        maxHeight: '600px', // Set a maximum height
    };

    const imageStyle = {
        objectFit: 'cover', // Ensure the image covers the entire container
        width: '100%',
        // height: '100%',
        maxHeight: '600px'
    };

   

    const handleModalShow = (item) => {
        setDetails(item)
        if (item.include && item.exclude) {
            const includes = JSON.parse(item.include)
            const excludes = JSON.parse(item.exclude)
            setIncs({
                includes,
                excludes
            })
        }
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };



    return (
        <div>
            <Carousel style={carouselStyle}>
                {eventData.map((item, index) => {
                    return <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            // src="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww&w=1000&q=80"
                            src={item.img}
                            alt="First slide"
                            style={imageStyle}
                        />
                        <Carousel.Caption>
                            <h3>{item.eventName}</h3>
                            <p>{item.place}</p>
                            <Button variant="info" onClick={() => handleModalShow(item)}>
                                Event Details
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                })}


            </Carousel>


            <Modal fullscreen={true} show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{`${details.eventName} - ${details.place}:  ${details.eventDate}`}</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <ModalComponent details={details} incs={incs} />
                    <Row className='mt-4'>
                        <Button onClick={() => setContact(true)}>Book Event</Button>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal aria-labelledby="contained-modal-title-vcenter" size="lg" show={contact} onHide={() => setContact(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Us</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs
                        defaultActiveKey="phone"
                        id="fill-tab-example"
                        className="mb-3"
                        fill
                    >
                        <Tab eventKey="phone" title="Phone Number(s)">
                            <Table hover size="sm">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Contact</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Sangmesh</td>
                                        <td>Tokare</td>
                                        <td>+91 8855087174</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Kunal</td>
                                        <td>Pawar</td>
                                        <td>+91 7045310385</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="email" title="Email">
                            <Form ref={form} onSubmit={sendEmail}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Event</Form.Label>
                                    <Form.Control name='event_name' value={details.eventName} placeholder={details.eventName} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control name='user_name' type="text" placeholder="Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Your Email address</Form.Label>
                                    <Form.Control name='user_email' type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                    <Form.Label>Your Phone Number</Form.Label>
                                    <Form.Control name='user_phone' type="number" placeholder="9876543219" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Booking Query</Form.Label>
                                    <Form.Control as="textarea" rows={3} name='user_message' />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Send
                                </Button>
                            </Form>
                        </Tab>
                        <Tab eventKey="social" title="Social Media">
                            <Container style={{textAlign:'center'}}>
                                <a href='https://www.facebook.com/groups/962019080532519/user/100064128397968/' className='me-4 text-reset' target="_blank">
                                    <BsFacebook />
                                </a>

                                <a href='https://www.instagram.com/giri_tara19/' className='me-4 text-reset' target="_blank">
                                    <BsInstagram />
                                </a>

                                <a href='https://chat.whatsapp.com/ILG4PcGxk4b4DpOljhI77q' className='me-4 text-reset' target="_blank">
                                    <BsWhatsapp />
                                </a>

                            </Container>
                        </Tab>
                    </Tabs>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setContact(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default TravelCarousel;
