import React, { useEffect, useRef, useState } from 'react'
import { Container, Card, Form, Button, Alert } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/MasterContext'

function LoginView() {
  const emailRef = useRef()
  const passRef = useRef()
  const location = useLocation()
  const navigate = useNavigate()
  const { signin, signout, user, authError } = useAuth()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user?.email) {
      navigate('/home')
    } else {
      navigate('/signin')
    }
  }, [user])

  async function handleSignIn(e) {
    e.preventDefault()

    try {
      setLoading(true)
      await signin(emailRef.current.value, passRef.current.value)
    } catch {}

    setLoading(false)
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <div style={{ minWidth: '400px', maxWidth: '400px' }}>
        <Card style={{ boxShadow: '-10px 10px 20px #ccc' }}>
          <Card.Body>
            <h2 className="text-center mb-4">Log in</h2>
            {authError && <Alert variant="danger">{authError}</Alert>}
            <Form onSubmit={handleSignIn}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passRef} required />
              </Form.Group>
              <Button disabled={loading} className="w-100 mt-3" type="submit">
                Login
              </Button>
            </Form>
            {user && (
              <Button onClick={signout} variant="danger" disabled={loading} className="w-100 mt-3" type="submit">
                Logout
              </Button>
            )}
          </Card.Body>
        </Card>
      </div>
    </Container>
  )
}

export default LoginView
