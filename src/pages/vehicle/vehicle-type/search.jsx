import React from 'react'
import ImageSearch from '../../../assets/icon/search.png'
import { Button, Form, InputGroup } from 'react-bootstrap'

function Search() {
  return (
    <div>
         <InputGroup className="mb-5 mt-5">
        <Form.Control
          placeholder="Search vehicle (ex. cars, cars name)"
          aria-label="Search vehicle (ex. cars, cars name)"
          aria-describedby="basic-addon2"
        />
        <Button variant='outline-secondary' >
          <img src={ImageSearch}  width='auto' height='25px' alt="search logo" />
        </Button>
      </InputGroup>
    </div>
  )
}

export default Search