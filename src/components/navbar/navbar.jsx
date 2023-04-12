import './navbar.css'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import useApi from '../../helpers/useApi'
import { Navbar, Container, Nav, Button, Dropdown, NavDropdown } from "react-bootstrap"
import iconbar from '../../assets/icon/logo.png'
import { useEffect, useState } from 'react'
import { logout } from '../../store/reducer/users'

function NavigationBar() {
    const dispatch = useDispatch()
    const {isAuth} = useSelector((state) => state.users)
    const [user, setUser] = useState({})
    const api = useApi()
    const {pathname} = useLocation()
    // const isAuth = false

    const getUser = () => {
        api.requests({
            method:'GET',
            url:'/user/profile'
        })
        .then((res) => {
            const {data} = res.data
            setUser(data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getUser()
    }, [])

    console.log(user)

    return (
        <div className='shadow'>
        <Navbar>
            <Container>
            <Navbar.Brand href="/">
            <img
              src={iconbar}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo">
              </img>
            </Navbar.Brand>
            <Nav className='navbarcenter'>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/vehicle-type">Vehicle Type</Nav.Link>
            <Nav.Link href="/underconstruct">History</Nav.Link>
            <Nav.Link href="/underconstruct">About</Nav.Link>
            <div>
                {!isAuth && pathname === '/' ? (
                    <div className="m-1">
                    <Button href="/login" variant="outline-warning">Login</Button>{' '}
                    <Button href="/register" variant="warning">Register</Button>{' '}
                    </div>
                ) : isAuth ? (
                <div className='padd'>
                    <NavDropdown title={
                    <img className='imgNav dropdown-button' src={user.image} alt="gambar-profile"/>
                        }>
                        <Dropdown.Item eventKey="1"><h6>{user.name}</h6></Dropdown.Item>
                        <Dropdown.Item href='/underconstruct' eventKey="2">Edit Profile</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='/' onClick={() => dispatch(logout())} eventKey="3">Log Out</Dropdown.Item>
                        </NavDropdown>
                </div>
                ) : null}

            </div>
            </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar