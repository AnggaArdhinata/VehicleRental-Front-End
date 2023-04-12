import React from 'react'
import './intro.css'
import { Container, Row, Col } from 'react-bootstrap'

function intro() {
  return (
    <div>
      <Container className='text-white d-flex justify-content-left'>
        <Row>
          <Col>
          <div className='title1'>Explore and</div>
          <div className='title2'>Travel</div>
          <div className='title3'>Vehicle Finder</div>
          </Col>
        </Row>
      </Container>
     </div>
  )
}

export default intro