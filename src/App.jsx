import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel/Carousel";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Content />
      <Footer />
    </>
  );
}

export default App;
