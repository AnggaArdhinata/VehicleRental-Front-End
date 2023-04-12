import React, { useEffect, useState } from 'react'
import './detail.css'
import NavigationBar from '../../../components/navbar/navbar'
import Footer from '../../../components/footer/footer'
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import arrowl from '../../../assets/icon/arrow-detail.png'
import imgdtl from '../../../assets/images/signup-backgn.png'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function Detail() {
  const [data, setData] = useState({})
  const params = useParams()

  const getData = async () => {
      try {
          const { data } = await axios.get(`https://api1.myvehicle-rent.site/vehicle/${params.id}`)
          setData(data[0])
      } catch (error) {
          console.log(error)
      }
  }

  useEffect(() => {
      getData()
  }, [])

  return (
    <div>
        <NavigationBar/>
        <br/>
        <Container>
        <Row className='lebar'>
          <Col>
        <Navbar.Brand href='/vehicle-type'>
        <img className='detail-img animated' src={arrowl} alt='arrow-detail'  />
        </Navbar.Brand>
            </Col>
            <Col>
            <h4>Detail</h4>
            </Col>
        </Row>
        </Container>
        <br/>
        <Container>
          <Row>
            <Col >
            <img className='img-detail-ukr' src={imgdtl} alt="img-detail" />
            </Col>
           
            <Col>
            <h2 className='dtl-tittle' >Fixie-Gray Only</h2>
            <h4 className='dtl-sub'>Yogyakarta</h4>
            <br/>
            <h5 className='dtl-status'>Available</h5>
            <h5 className='dtl-payment'>No Prepayment</h5>
            <br/>
            <h5 className='dtl-type'>Capacity: 1 Person</h5>
            <h5 className='dtl-type'>Type: Bike</h5>
            <h5 className='dtl-type'>Reservation before 2 PM</h5>
            <br/>
            <h2 className='text-align-price'>Rp. 78.000/day</h2>
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
        <Footer/>
    </div>
  )
}

export default Detail