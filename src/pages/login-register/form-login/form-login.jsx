import React, { useEffect, useState } from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../../store/reducer/users'
import { useNavigate } from 'react-router-dom'
import useApi from '../../../helpers/useApi'


function Login() {
  const [Users, setUsers] = useState({
    email:'email', password:'password'
  })

  const { isAuth } = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const api = useApi()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) {
      navigate('/')
    }
  }, [isAuth])

  const onChangeInput = (event) => {
    event.preventDefault()
    const data = { ...Users }
    data[event.target.name] = event.target.value
    console.log(data)
    setUsers(data)
}

  const goLogin = () => {
    api.requests({
      method:'POST',
      url:'/auth/login',
      data:Users
    })
    .then((res) => {
      const {data} = res.data
      dispatch(login(data.token))
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
        <br/>
        <br/>
        <br/>
        <br/>
    <Container>
    <Form>
  <Form.Group className="mb-3 buttoncustom" controlId="formBasicEmail">
    <Form.Control onChange={onChangeInput} name='email' type="email" placeholder="Email" />
  </Form.Group>

  <Form.Group className="mb-2 buttoncustom" controlId="formBasicPassword">
    <Form.Control onChange={onChangeInput} name='password' type="password" placeholder="Password" />
  </Form.Group>
  <Form.Text className="text-muted">
      Forgot password ?
    </Form.Text>
  <div>
    <Button onClick={goLogin} className='d-grid gap-2 buttonstyle' variant="warning">Login</Button>{' '}
    </div>
</Form>
</Container>
    </div>
  )
}

export default Login