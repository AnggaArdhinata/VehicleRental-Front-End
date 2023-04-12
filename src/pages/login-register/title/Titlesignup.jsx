import React from 'react'
import {Container, Button, Row, Col} from 'react-bootstrap'

function Titlesignup() {
  return (
    <div>
    <Container className='text-white d-flex justify-content-left'>
        <Row>
          <Col>
          <div className='title1'>Le'ts Explore</div>
          <div className='title2'>The World</div>
          <div className='title3'>Have an Account ?</div>
          <br/>
          <div>
    <Button href='/login' className='d-grid gap-2 buttonstyle' variant="warning">Login Here</Button>{' '}
    </div>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Titlesignup