import { Carousel, Button, Modal, Image, Col, Row, ListGroup, Tabs, Tab } from 'react-bootstrap';
const ModalComponent = ({details , incs}) => {
    // return <Row>
    //     <Col>
    //         <Image src={details.img} fluid style={{ width: '100%', height: '100%' }} />
    //     </Col>
    //     <Col>
    //         <Row>
    //             <p>{details.description}</p>
    //         </Row>

    //         <Row>
    //             <Tabs
    //                 defaultActiveKey="includes"
    //                 id="justify-tab-example"
    //                 className="mb-3"
    //                 justify
    //             >
    //                 <Tab eventKey="includes" title="Inclusions">
    //                     <ListGroup as="ol" numbered>
    //                         {incs.includes.map(item => {
    //                             return <ListGroup.Item>{item.label}</ListGroup.Item>
    //                         })}
    //                     </ListGroup>
    //                 </Tab>
    //                 <Tab eventKey="excludes" title="Exclusions">
    //                     <ListGroup as="ol" numbered>
    //                         {incs.excludes.map(item => {
    //                             return <ListGroup.Item>{item.label}</ListGroup.Item>
    //                         })}
    //                     </ListGroup>
    //                 </Tab>

    //             </Tabs>
    //         </Row>


    //     </Col>
    // </Row>

    return <div>
        <Row>
            <Image src={details.img} fluid style={{maxHeight:'600px', width: '100%', height: '100%' }} />
        </Row>
        <Row className='mt-4'>
            <Row>
                <p style={{textAlign:'justify'}}>{details.description}</p>
            </Row>

            <Row>
                <Tabs
                    defaultActiveKey="includes"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                >
                    <Tab eventKey="includes" title="Inclusions">
                        <ListGroup as="ol" numbered>
                            {incs.includes.map(item => {
                                return <ListGroup.Item>{item.label}</ListGroup.Item>
                            })}
                        </ListGroup>
                    </Tab>
                    <Tab eventKey="excludes" title="Exclusions">
                        <ListGroup as="ol" numbered>
                            {incs.excludes.map(item => {
                                return <ListGroup.Item>{item.label}</ListGroup.Item>
                            })}
                        </ListGroup>
                    </Tab>

                </Tabs>
            </Row>


        </Row>
    </div>
}

export default ModalComponent;