import React from 'react'
import './login-register.css'
import Footer from '../../components/footer/footer'
import FormSignup from './form-register/form-register'
import Titlesignup from './title/Titlesignup'
import {Col, Row, Container} from 'react-bootstrap'

function Signup() {
  return (
    <div>
         <div className='bgsignup'>
          <Container>
          <Row>
            <Col>
            <Titlesignup/>
            </Col>
            <Col>
            <FormSignup/>
            </Col>
          </Row>
          </Container>
         </div>
        <br/>
        <Footer/>
    </div>
  )
}

export default Signup