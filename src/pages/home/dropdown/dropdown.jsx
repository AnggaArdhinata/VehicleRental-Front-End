import React from 'react'
// import './dropdown.css'
import {Dropdown, DropdownButton, Row, Col, Button} from 'react-bootstrap'


function formselect() {
  return (
    <div>
    <div className="container">
    <Row>
    <Col md={2} className='coloumstyle'>
    <DropdownButton id="dropdown-item-button" title="Location" variant='secondary' className='buttoncustom d-grid'>
      <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
      <Dropdown.Item as="button">Action</Dropdown.Item>
      <Dropdown.Item as="button">Another action</Dropdown.Item>
      <Dropdown.Item as="button">Something else</Dropdown.Item>
    </DropdownButton>
    <br/>
    <DropdownButton id="dropdown-item-button" title="Payment" variant='secondary' className='buttoncustom d-grid' >
      <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
      <Dropdown.Item as="button">Action</Dropdown.Item>
      <Dropdown.Item as="button">Another action</Dropdown.Item>
      <Dropdown.Item as="button">Something else</Dropdown.Item>
    </DropdownButton>
    <div>
    <Button href='/underconstruct' className='d-grid gap-2 buttonstyle mt-4' variant="warning">Explore</Button>
    </div>
    </Col>
    <Col  md={2} >
    <DropdownButton id="dropdown-item-button" title="Type" variant='secondary' className='buttoncustom d-grid gap-2'>
      <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
      <Dropdown.Item as="button">Action</Dropdown.Item>
      <Dropdown.Item as="button">Another action</Dropdown.Item>
      <Dropdown.Item as="button">Something else</Dropdown.Item>
    </DropdownButton>
    <br/>
    <DropdownButton id="dropdown-item-button" title="Date" variant='secondary' className='buttoncustom d-grid gap-2'>
      <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
      <Dropdown.Item as="button">Action</Dropdown.Item>
      <Dropdown.Item as="button">Another action</Dropdown.Item>
      <Dropdown.Item as="button">Something else</Dropdown.Item>
    </DropdownButton>
    </Col>
    </Row>
      
      </div>
    </div>
  )
}

export default formselect