import React from 'react';
import { Container, Row, Col, Card  , Image} from 'react-bootstrap';

const AboutUsPage = () => {
    return (
        <div>
            <Row className="mt-4">
                <Col>
                    <Card className='card-mod'>
                  
                        <Image className='image-rounds' src = "https://blog.vantagecircle.com/content/images/2020/08/teamwork-and-team-building.png"  rounded />
                        <Card.Body className='card-text'>
                            <Card.Title>Our Story</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget elit sit amet libero
                                dictum consequat. Nullam ac erat vel elit tempus dictum.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            <Row className="mt-4">
                <Col>
                    <Card className='card-mod'>
                        <Image className='image-rounds' src="https://media.istockphoto.com/id/1347348092/photo/multi-ethnic-business-team.jpg?s=612x612&w=0&k=20&c=7tumhI61wPfZ9Bb6ZL42eQ4vER3UNCj7aCeZSdeXp_w=" rounded />
                        <Card.Body className='card-text'>
                            <Card.Title>Our Team</Card.Title>
                            <Card.Text>
                                Meet our talented team of professionals who work tirelessly to bring you the best products
                                and services.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <Card className='card-mod'>
               
                        <Image className='image-rounds' src="https://thumbs.dreamstime.com/b/team-teamwork-goals-strategy-vision-business-support-concept-50274164.jpg" rounded/>
                        <Card.Body className='card-text'>
                            <Card.Title>Our Mission</Card.Title>
                            <Card.Text>
                                Our mission is to provide exceptional quality and service to our customers while promoting
                                sustainability and innovation.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AboutUsPage;
