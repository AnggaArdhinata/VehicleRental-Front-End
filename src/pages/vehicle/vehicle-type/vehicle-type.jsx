import './vehicle-type.css'
import React, { useEffect, useState } from 'react'
import useApi from '../../../helpers/useApi'
import {Col, Row } from 'react-bootstrap'
import NavigationBar from '../../../components/navbar/navbar'
import Footer from '../../../components/footer/footer'
import Cards from '../../../components/cards/cards'
import Search from './search'
import { Link } from 'react-router-dom'

function VehicleType() {
  const api = useApi()
  const [populars, setPopular] = useState([])
  const [cars, setCars] = useState([])
  const [motobike, setMotoBike] = useState([])
  const [bike, setBike] = useState([])

  const getPopular = async () => {
    try {
      const {data} = await api.requests({
        method:'GET',
        url:'/popular/'
      })
      setPopular(data.data)
      
    } catch (error) {
      console.log(error)
    }
  }

  const getCars = async () => {
    try {
      const {data} = await api.requests({
        method:'GET',
        url:'/vehicle/category/1'
      })
      setCars(data.data.vehicle)
      
    } catch (error) {
      console.log(error)
    }
  }

  const getMotoBike = async () => {
    try {
      const {data} = await api.requests({
        method:'GET',
        url:'/vehicle/category/2'
      })
      setMotoBike(data.data.vehicle)
    } catch (error) {
      console.log(error)
    }
  }

  const getBike = async () => {
    try {
      const {data} = await api.requests({
        method:'GET',
        url:'/vehicle/category/3'
      })
      setBike(data.data.vehicle)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPopular()
    getCars()
    getMotoBike()
    getBike()
  }, [])

  return (
    <div>
    <NavigationBar/>
    <section>
      <div className='container'>
    <Search/>
      <Row>
        <Col className='sm-6'>
          <h2>Popular in Town</h2>
        </Col>
        <Col className='sm-6'>
          <div className='d-flex justify-content-end'>
              <div>
                <Link className='fw-bold viewall-clr' to='/underconstruct'>
                  {'View all'}
                  <b>{'>'}</b>
                </Link>
              </div>
          </div>
        </Col>
      </Row>
      <Row>
        {populars.map((v) => {
         return (
                <Cards
                id={v.id}
                picture={v.image}
                name={v.name}
                location={v.location}
                />
              )
        })}
      </Row>
      </div>
    </section>

    <section>
      <div className='container'>
      <Row>
        <Col className='sm-6'>
          <h2>Cars</h2>
        </Col>
        <Col className='sm-6'>
          <div className='d-flex justify-content-end'>
              <div>
              <Link className='fw-bold viewall-clr' to='/underconstruct'>
                  {'View all'}
                  <b>{'>'}</b>
                </Link>
              </div>
          </div>
        </Col>
      </Row>
      <Row>
        {cars.map((v) => {
            return (
              <Cards
              id={v.id}
              picture={v.image}
              name={v.name}
              location={v.location}
              />
            )
        })}
      </Row>
      </div>
    </section>

    <section>
      <div className='container'>
      <Row>
        <Col className='sm-6'>
          <h2>MotorBike</h2>
        </Col>
        <Col className='sm-6'>
          <div className='d-flex justify-content-end'>
              <div>
              <Link className='fw-bold viewall-clr' to='/underconstruct'>
                  {'View all'}
                  <b>{'>'}</b>
                </Link>
              </div>
          </div>
        </Col>
      </Row>
      <Row>
        {motobike.map((v) => {
            return (
              <Cards
              id={v.id}
              picture={v.image}
              name={v.name}
              location={v.location}
              />
            )
        })}
      </Row>
      </div>
    </section>

    <section>
      <div className='container'>
      <Row>
        <Col className='sm-6'>
          <h2>Bike</h2>
        </Col>
        <Col className='sm-6'>
          <div className='d-flex justify-content-end'>
              <div>
              <Link className='fw-bold viewall-clr' to='/underconstruct'>
                  {'View all'}
                  <b>{'>'}</b>
                </Link>
              </div>
          </div>
        </Col>
      </Row>
      <Row>
        {bike.map((v) => {
              return (
                <Cards
                id={v.id}
                picture={v.image}
                name={v.name}
                location={v.location}
                />
              )
        })}
      </Row>
      </div>
    </section>
    <Footer/>
    </div>
  )
}

export default VehicleType