import React from 'react'
import {Container, Col, Row, Button} from 'react-bootstrap'


function Titlepage(props) {
  return (
    <div>
    <Container className='text-white d-flex justify-content-left'>
        <Row>
          <Col>
          <div className='title1'>Le'ts Explore</div>
          <div className='title2'>The World</div>
          <div className='title3'>{props.msg}</div>
          <br/>
          <div>
    <Button href='/register' className='d-grid gap-2 buttonstyle' variant="warning">{props.sign}</Button>{' '}
    </div>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Titlepage