import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sayur1 from "../assets/img1.jpg";
import sayur2 from "../assets/img2.jpg";
import sayur3 from "../assets/img3.jpg";
import sayur4 from "../assets/img4.jpg";

const Content = () => {
  return (
    <Container>
      <Row className="mx-auto mt-5">
        <h3 className="text-center">Jenis-Jenis Sayuran yang Menyehatkan dan Wajib Dikonsumsi</h3>
        <Col className="p-2">
          <Card style={{ width: "30rem" }} className="mx-auto">
            <Card.Img variant="top" src={sayur1} />
            <Card.Body>
              <Card.Title style={{ fontFamily: "fantasy", fontWeight: "bold", textAlign: "center" }}>Sayur Bayam</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                Nama pertama yang pasti tidak asing dalam masyarakat Indonesia adalah bayam. Sayuran ini digambarkan sebagai makanan yang bisa menguatkan tubuh. Selain itu, bayam pun punya kandungan yang bisa menyehatkan organ dalam tubuh.
                Mengolah bayam pun terbilang sangat mudah, kamu bisa merebus atau mencampurnya ke dalam pasta.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="p-2">
          <Card style={{ width: "30rem" }}  className="mx-auto">
            <Card.Img variant="top" src={sayur2} />
            <Card.Body>
              <Card.Title style={{ fontFamily: "fantasy", fontWeight: "bold", textAlign: "center" }}>Tauge</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                Jenis sayur yang satu ini pun cukup populer di banyak menu makanan. Kamu bisa menumis atau merebus tauge untuk dapatkan makanan enak yang menyehatkan. Tauge pun bisa dijumpai di menu ketoprak, soto, bakso, dan rawon.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="p-2">
          <Card style={{ width: "30rem" }}  className="mx-auto">
            <Card.Img variant="top" src={sayur3} />
            <Card.Body>
              <Card.Title style={{ fontFamily: "fantasy", fontWeight: "bold", textAlign: "center" }}>Selada</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                Kamu bisa mengonsumsi selada tanpa diolah terlebih dulu. Cukup mencucinya hingga bersih dengan air dingin untuk dapatkan kesegaran dari sayuran ini. Selada bisa disajikan dengan campuran daging ayam dan sapi. Kamu bisa bisa
                mencocolnya dengan berbagai jenis sambal untuk dapatkan cita rasa yang lezat.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="p-2" >
          <Card style={{ width: "30rem" }}  className="mx-auto">
            <Card.Img variant="top" src={sayur4} />
            <Card.Body>
              <Card.Title style={{ fontFamily: "fantasy", fontWeight: "bold", textAlign: "center" }}>Asparagus</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                Mungkin ini sayur paling mahal di antara jenis sayur yang sudah disebutkan di atas. Namun, kamu bisa mendapatkan banyak hal dalam sayur asparagus. Dari sisi rasa, asparagus punya rasa yang gurih. Teksturnya pun sangat
                renyah. Khasiatnya pun sangat banyak, mulai dari menjaga kesehatan tulang dan membantu pembentukan sel-sel.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
