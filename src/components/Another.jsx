import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Another = () => {
  return (
    <Container>
      <Card bg="dark" text="light" className="mb-2">
        <Card.Body className="text-center py-5">
          <Card.Title>Sayur Menayur</Card.Title>
          <Card.Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit eaque hic adipisci incidunt fugiat eveniet amet
            deleniti cupiditate provident, nemo temporibus quaerat optio non sit
            animi praesentium pariatur, ut repudiandae..
          </Card.Text>
          <Button variant="light">Beli nanti!</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Another;
