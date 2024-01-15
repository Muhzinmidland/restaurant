import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Restcard from '../components/Restcard'

function Home() {
  return (
    <>
        <Row>
            <Col className='px-5 py-3 ' sm={6} md={4} lg={4}>
                <Restcard/>
            </Col>
        </Row>
    </>
  )
}

export default Home