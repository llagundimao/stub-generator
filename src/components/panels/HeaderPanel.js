import React from 'react'
import { Button } from 'react-bootstrap'
import { Nav, Navbar, Container } from 'react-bootstrap'
import TabsEnum from '../../common/Enums/TabsEnum'
import { useAuth } from '../../routes/Context/MasterContext'

const Tabs = [
  {
    type: TabsEnum.GENERATE,
    title: 'Generate',
  },
  {
    type: TabsEnum.DASHBOARD,
    title: 'Dashboard',
  },
  {
    type: TabsEnum.REPORT,
    title: 'Report',
  },
]

const HeaderPanel = ({ value, handleTabSelect }) => {
  const { signout } = useAuth()

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Stub Generator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {Tabs.map((t) => {
              const isSelected = t.type === value ? 'selected' : ''
              console.log('isss: ', isSelected)
              return (
                <Nav.Link
                  key={t.type}
                  href="#home"
                  className={`${isSelected}`}
                  onClick={() => handleTabSelect(t.type)}
                >
                  {t.title}
                </Nav.Link>
              )
            })}
          </Nav>
        </Navbar.Collapse>
        <Button onClick={signout}>Logout</Button>
      </Container>
    </Navbar>
  )
}

export default HeaderPanel
