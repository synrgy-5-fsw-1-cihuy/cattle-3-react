import { Carousel, Container } from "react-bootstrap";
import gambar1 from "../assets/banner1.jpg";
import img1 from "../assets/banner2.jpg";
import img2 from "../assets/banner3.jpg";

function UncontrolledExample() {
  return (
    <Container>
      <Carousel variant='dark' style={{width: '100%', height:"50%", margin:"auto"}}>
        <Carousel.Item>
          <img src={gambar1} alt="First slide" className="img-fluid" style={{width: '100%', height:"504px"}}/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" style={{width: '100%', height:"504px"}}/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="Third slide" style={{width: '100%', height:"504px"}} />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default UncontrolledExample;
