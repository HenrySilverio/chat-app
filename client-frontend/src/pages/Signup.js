import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import { Link } from 'react-router-dom'
import './Signup.css'
import robot from '../assets/robot.png'


function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  return (
    <Container>
      <Row>
        <Col md={5} className='signup__bg'></Col>
        <Col md={7} className='d-flex align-items-center justify-content-center flex-direction-column'>
          <Form style={{width: "80%", maxWidth: 500}}>
            <h1 className='text-center'>Create Account</h1>
          <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your name" onChange={(e) => setName(e.target.value)} value={name}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email}/>
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            </Form.Group>
            <Button variant="primary" type="submit">
            Create
            </Button>
            <div className='py-4'>
              <p className='text-center'>Already have an account ? <Link to='/login'>Login</Link></p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Signup