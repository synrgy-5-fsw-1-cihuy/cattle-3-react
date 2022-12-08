import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      variant='dark'
      style={{ backgroundColor: '#68B984' }}
    >
      <Container>
        <Navbar.Brand
          href='#home'
          className='font-weight'
          style={{
            marginLeft: '150px',
            fontWeight: 'bold',
            fontStyle: 'italic',
            textShadow: '1px 2px black',
          }}
        >
          Hayur
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav
            style={{
              marginLeft: '300px',
              fontWeight: 'bold',
              textShadow: '2px 2px gray',
            }}
          >
            <Nav.Link href='#home' style={{ marginRight: '40px' }}>
              Home
            </Nav.Link>
            <Nav.Link href='#contact' style={{ marginRight: '40px' }}>
              Contact
            </Nav.Link>
            <Nav.Link href='#about'>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
