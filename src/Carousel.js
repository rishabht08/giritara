// src/Carousel.js
import React, { useState, useEffect } from 'react';
import { Carousel, Button, Modal, Image, Col, Row, ListGroup, Tabs, Tab } from 'react-bootstrap';
import ModalComponent from "./components/Modal-components"

const TravelCarousel = ({ data }) => {

    const [eventData, setEventData] = useState([])

    const [details, setDetails] = useState({})
    const [incs, setIncs] = useState({
        includes: [],
        excludes: []
    })

    useEffect(() => {
        setEventData(data)
    }, [data])


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

    const [showModal, setShowModal] = useState(false);
    const [contact, setContact] = useState(false);

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

            <Modal  aria-labelledby="contained-modal-title-vcenter"  size="lg" show={contact} onHide={() => setContact(false)}>
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
                            Tab content for Home
                        </Tab>
                        <Tab eventKey="email" title="Email">
                            Tab content for Profile
                        </Tab>
                        <Tab eventKey="social" title="Social Media">
                            Tab content for Loooonger Tab
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
