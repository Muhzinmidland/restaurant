import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RestReview from '../components/RestReview';

function Restview() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Row className='my-5'>
                <Col md={1}>
                </Col>
                <Col md={3}>
                    <img
                        width={'100%'} className='shadow'
                        src="https://www.gousto.co.uk/build/162074/856bca25c1c2cbaf608d598f844c1a05.jpg" alt="" />
                </Col>
                <Col md={7}>
                    <hr />
                    <h4 className='text-center fw-bold'><span className='text-danger'>Restaurant</span> Details</h4>
                    <hr />
                    <ListGroup className='fw-bold ms-3'>
                        <ListGroup.Item className='text-center p-3'>Restaurant Name :</ListGroup.Item>
                        <ListGroup.Item>Neighbourhood :</ListGroup.Item>
                        <ListGroup.Item>Cuisine Type</ListGroup.Item>
                        <ListGroup.Item>Address</ListGroup.Item>
                        <ListGroup.Item>
                            <button className='btn btn-outline-danger' onClick={handleShow}>Operating Hours</button>
                        </ListGroup.Item>
                        <ListGroup.Item>
                                    <div className='d-flex justify-content-center align-items-center'>
                                    <RestReview />
                                </div>
                                </ListGroup.Item>
                    </ListGroup>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ListGroup>
                                <ListGroup.Item >Monday : <span className='text-danger ms-3'>10Am to 11Pm</span></ListGroup.Item>
                                <ListGroup.Item >Tuesday : <span className='text-danger ms-3'>10Am to 11Pm</span></ListGroup.Item>
                                <ListGroup.Item >Wednesday : <span className='text-danger ms-3'>10Am to 11Pm</span></ListGroup.Item>
                                <ListGroup.Item >Thursday : <span className='text-danger ms-3'>10Am to 11Pm</span></ListGroup.Item>
                                <ListGroup.Item >Friday : <span className='text-danger ms-3'>10Am to 11Pm</span></ListGroup.Item>
                                <ListGroup.Item >Saturday : <span className='text-danger ms-3'>10Am to 11Pm</span></ListGroup.Item>
                                <ListGroup.Item >Sunday : <span className='text-danger ms-3'>10Am to 11Pm</span></ListGroup.Item>
                                
                            </ListGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
        </>
    )
}

export default Restview