
import React, { useState, useEffect } from 'react';
import { Card, Col, Row  ,Modal , Button} from 'react-bootstrap';
import ModalComponent from './components/Modal-components';

const Contents = ({ data }) => {
    const [eventData, setEventData] = useState([])
    const [showModal, setShowModal] = useState(false);

    const [details, setDetails] = useState({})
    const [incs, setIncs] = useState({
        includes: [],
        excludes: []
    })
    useEffect(() => {
        setEventData(data)
    }, [data])

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
            <Row xs={1} md={2} className="g-4">
                {eventData.map((item, index) => {
                    return <Col key={index + 'contents'}>
                        <Card style={{ cursor: 'pointer' }} onClick={() => handleModalShow(item)}>
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title> {item.eventName}</Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                })}

            </Row>

            <Modal fullscreen={true} show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{`${details.eventName} - ${details.place}:  ${details.eventDate}`}</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <ModalComponent details={details} incs={incs} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Contents;