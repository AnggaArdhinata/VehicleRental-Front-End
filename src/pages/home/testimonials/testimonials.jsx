import React from 'react'
import './testimonials.css'
import {Container, Row, Col,Image} from 'react-bootstrap'
import Star from '../../../assets/icon/stars.png'
import Edward from '../../../assets/images/edward-photo.png'


function Testimonial() {
  return (
    <div>
    <Container className='text-black d-flex justify-content-left'>
    <div className='testistyle'>Testimonials</div>
    </Container>
    <Container>
        <Row>
        
            <Col md={4}>
            <img className='sizeimg' src={Star} alt='rating'/>
            <div className='styletext'>”It was the right decision to rent vehicle here, I spent less money and enjoy the trip. It was an amazing experience to have a ride for wildlife trip!”</div>
            <div className='stylebold'>Edward Newgate</div>
            <div className='stylenormal'>Founder Circle</div>
            </Col>
            <Col>
            </Col>
            <Col>
            <Image className='imagetesti mb-3'
                src={Edward} 
                alt="Testimoni" />
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Testimonial