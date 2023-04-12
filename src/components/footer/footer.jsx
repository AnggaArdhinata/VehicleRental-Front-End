import React from 'react'
import './footer.css'
import iconfoot from '../../assets/icon/logo.png'
import sosmed from '../../assets/icon/socialmedia.png'
import {Navbar, Container, Row, Col, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Footer() {

  return (
    <div className='bgfoot' >
    <Container>
    <div>
    <Row >
        <Col md={3} >
        <Navbar.Brand href="/">
            <img
              src={iconfoot}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo">
              </img>
            </Navbar.Brand>
        
        <h2 className='textfoot1 mt-3'>Plan and book your perfect trip with expert advice, travel tips for vehicle information from us</h2>
        <br/>
        <h2 className='textfoot1'>©2020 Vehicle Rental Center. All rights reserved</h2>
        </Col>
        <Col md={3}>
        <Link className='headertxtfoot m-2' to='/underconstruct'>Destinations</Link>
        <h3 className='textfoot1 m-2'>Bali</h3>
        <h3 className='textfoot1 m-2'>Jakarta</h3>
        <h3 className='textfoot1 m-2'>Yogyakarta</h3>
        <h3 className='textfoot1 m-2'>Kalimantan</h3>
        <h3 className='textfoot1 m-2'>Malang</h3>
        </Col>
        <Col md={3}>
        <Link className='headertxtfoot m-2' to='/underconstruct'>Vehicle</Link>
        <h3 className='textfoot1 m-2'>Bike</h3>
        <h3 className='textfoot1 m-2'>Cars</h3>
        <h3 className='textfoot1 m-2'>Motorbike</h3>
        <h3 className='textfoot1 m-2'>Return Times</h3>
        <h3 className='textfoot1 m-2'>FAQs</h3>
        </Col>
        <Col md={3}>
        <Link className='headertxtfoot m-2' to='/underconstruct'>Interest</Link>
        <h3 className='textfoot1 m-2'>Adventure Travel</h3>
        <h3 className='textfoot1 m-2'>Art and Culture</h3>
        <h3 className='textfoot1 m-2'>Wildlife and Nature</h3>
        <h3 className='textfoot1 m-2'>Family Holidays</h3>
        <h3 className='textfoot1 m-2'>Culinary Trip</h3>
        </Col>
    </Row>
    </div>
    </Container>
    <div>
      <Container>
      <hr />
      </Container>
      <Container className='rowfoot'>
        <div >
        <Image className='mb-4 mt-2'
               src={sosmed}
               alt='social media icon'
            />
        </div>
      </Container>
    </div>
    </div>
    
  )
}

export default Footer