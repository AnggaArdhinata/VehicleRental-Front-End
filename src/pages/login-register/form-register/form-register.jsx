import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'

function Signup() {
  const navigate = useNavigate()
 
  const [user, setUsers] = useState({
    name:'name',
    email:'email',
    password:'password',
    birthday:'date',
    gender:'gender',
    address:'address',
    phone:'phone',
    image: null,
    role:'user'
  })


  const onChangeInput = (event) => {
    event.preventDefault()
    const data = { ...user }
    data[event.target.name] = event.target.value
    setUsers(data)
}

const fileHandler = (event) => {
  event.preventDefault()
  const file = event.target.files[0]
  if (file) {
      const data = { ...user }
      data['image'] = file
      setUsers(data)
  }
}


const onSubmit = () => {
  const formData = new FormData()
  for (const key in user) {
      formData.append(key, user[key])
  }
 
  axios({
    method: 'POST',
    url: 'https://api1.myvehicle-rent.site/auth/register/',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: formData
})
    .then((res) => {
        console.log(res)
        navigate('/login')
    })
    .catch((err) => console.log(err))

}

  return (
    <div>
    <br/>
    <br/>
    <br/>
    <br/>
<Container className='p-30'>

<Form>
<Form.Group className="mb-3 buttoncustom" >
<Form.Control onChange={onChangeInput} name='name' type="text" placeholder="Name" required/>
</Form.Group>

<Form.Group className="mb-3 buttoncustom">
<Form.Control onChange={onChangeInput} name='email' type="text" placeholder="Email" required />
</Form.Group>

<Form.Group className="mb-3 buttoncustom">
<Form.Control onChange={onChangeInput} name='password' type="password" placeholder="Password" required />
</Form.Group>

<Form.Group className="mb-3 buttoncustom">
<Form.Control onChange={onChangeInput} name='birthday' type="date" placeholder="Birthday" />
</Form.Group>

<Form.Group className="mb-3 buttoncustom">
<Form.Select onChange={onChangeInput} name='gender' >
      <option>Chhose one option</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </Form.Select>
</Form.Group>

<Form.Group className="mb-3 buttoncustom">
<Form.Control onChange={onChangeInput} name='address' type="text" placeholder="Address" />
</Form.Group>

<Form.Group className="mb-3 buttoncustom">
<Form.Control onChange={onChangeInput} name='phone' type="text" placeholder="Phone" />
</Form.Group>

<Form.Group className="mb-3 buttoncustom">
<Form.Control onChange={fileHandler} name='image' type="file" placeholder="Image" />
</Form.Group>

<Form.Text className="text-muted">
  Forgot password ?
</Form.Text>
<div>
<Button onClick={onSubmit} className='d-grid gap-2 buttonstyle' variant="warning">Sign in</Button>{' '}
</div>
</Form>
</Container>
</div>
  )
}

export default Signup