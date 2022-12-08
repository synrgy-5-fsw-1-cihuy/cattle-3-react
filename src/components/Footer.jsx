import React from 'react';
import {ListGroup,Container, Card, Row, Col, Form, InputGroup, Button} from 'react-bootstrap';


const Footer = () => {
  
  const aStyle = {
    color: 'inherit',
    textDecoration: 'none',
    transition: 'all 0.3s',
    ':hover': {textDecoration: 'none'},
    ':focus': {textDecoration: 'none'}
  };

  return (

    <Card.Footer className='w-100 py-4 flex-shrink-0' style={{ backgroundColor: "#212529" }}>
      <Container className='container py-4'>
            <Row className='row gy-4 gx-5'>
                <Col className='col-lg-4 col-md-6'>
                <h5 class="h1 text-white">Sayur.</h5>
                <p class="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                <p class="small text-muted mt-5">&copy; Copyrights. All rights reserved.</p>
                </Col>
                <Col className='col-lg-2 col-md-6'>
                <h5 class="text-white mb-3">Quick links</h5>
                <ListGroup className='list-unstyled text-muted' style={{ backgroundColor:'#212529'}}>
                  <ListGroup.Item className='border-0' style={{ backgroundColor:'#212529'}}><a href='#' className='text-muted' style={aStyle}>Home</a>
                  </ListGroup.Item>
                  <ListGroup.Item className='border-0' style={{ backgroundColor:'#212529'}}><a href='#' className='text-muted' style={aStyle}>About</a>
                  </ListGroup.Item>
                  <ListGroup.Item className='border-0' style={{ backgroundColor:'#212529'}}><a href='#' className='text-muted' style={aStyle}>FAQ</a>
                  </ListGroup.Item>
                  <ListGroup.Item className='border-0' style={{ backgroundColor:'#212529'}}><a href='#' className='text-muted' style={aStyle}>Contact</a>
                  </ListGroup.Item>
                </ListGroup>
                </Col>
                <Col className='col-lg-2 col-md-6'>
                <h5 class="text-white mb-3">Quick links</h5>
                <ListGroup className='list-unstyled text-muted'>
                  <ListGroup.Item className='border-0' style={{ backgroundColor:'#212529'}}><a href='#' className='text-muted' style={aStyle}>Home</a>
                  </ListGroup.Item>
                  <ListGroup.Item className='border-0' style={{ backgroundColor:'#212529'}}><a href='#' className='text-muted' style={aStyle}>About</a>
                  </ListGroup.Item>
                  <ListGroup.Item className='border-0' style={{ backgroundColor:'#212529'}}><a href='#' className='text-muted' style={aStyle}>FAQ</a>
                  </ListGroup.Item>
                  <ListGroup.Item className='border-0' style={{ backgroundColor:'#212529'}}><a href='#' className='text-muted' style={aStyle}>Contact</a>
                  </ListGroup.Item>
                </ListGroup>
                </Col>
                <Col className='col-lg-4 col-md-6'>
                <h5 class="text-white mb-3">Newsletter</h5>
                <p class="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                <Form action='#'>
                    <InputGroup className='mt-4'>
                        <Form.Control type='text' placeholder='Recipients username' aria-describedby='button-addon2' style={{ background: "#212529", borderColor: "#545454", ':focus':{background: '#212529'}}}>
                        </Form.Control>
                        <Button variant='primary'>Klik</Button>
                    </InputGroup>
                </Form>
                </Col>
            </Row>

      </Container>
    </Card.Footer>
    
    
  );
};

export default Footer;
