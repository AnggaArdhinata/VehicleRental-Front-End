import React from 'react'
import './login-register.css'
import Titlepage from './title/Titlepage'
import Footer from '../../components/footer/footer'
import Login from './form-login/form-login'
import {Col, Row, Container} from 'react-bootstrap'

function Logins() {
  return (
    <div>
         <div className='bglogin'>
          <Container>
          <Row>
            <Col>
            <Titlepage
            msg='Dont Have Account ?'
            sign='Register'
            />
            </Col>
            <Col>
            <Login/>
            </Col>
          </Row>
          </Container>
         </div>
        <br/>
        <Footer/>
    </div>
  )
}

export default Logins