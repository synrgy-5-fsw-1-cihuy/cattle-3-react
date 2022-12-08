import React from 'react';
import {ListGroup,Container, Card} from 'react-bootstrap';

const Footer = () => {
  return (
    <Container>
      <Card.Footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4  border-top'>

          <p className="col-md-4 mb-0 text-muted">© 2022 Company, Inc</p>

            <ListGroup horizontal>

                      <ListGroup.Item className='border-0'>
                        <a href="#" class="nav-link px-3">Home</a>
                      </ListGroup.Item>
                      <ListGroup.Item className='border-0'>
                        <a href="#" class="nav-link px-3">Home</a>
                      </ListGroup.Item>
                      <ListGroup.Item className='border-0'>
                        <a href="#" class="nav-link px-3">Home</a>
                      </ListGroup.Item>
                      <ListGroup.Item className='border-0'>
                        <a href="#" class="nav-link px-3">Contact</a>
                      </ListGroup.Item>
                    
            </ListGroup>
       </Card.Footer>
 
    </Container>
    
  );
};

export default Footer;
