import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Tags from "./components/Tags";
import Footer from "./components/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function App() {
  return (
    <>
      <Header titulo="Adopta un perrito" />
      <Row>
        <Col md={3}>
          <Cards
            src="https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            titulo="Bartolo"
            texto="Lleno de energio para jugar. !Dale a Bartolo el hogar amoroso que se merece"
            text="Husky"
            Badge="success"
          />
        </Col>
        <Col md={3}>
          <Cards
            src="https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg"
            titulo="Messi"
            texto="Es jugueton, amigable y se lleva bien con los niños y otros animales.¡Haz de Messi parte de tu familia hoy mismo!"
            text="Bobtail"
            Badge="primary"
          />
        </Col>
        <Col md={3}>
          <Cards
            src="https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg"
            titulo="Gohan"
            texto="Un perro de tamaño mediano con un corazon gigante. Hazte amigo de Gohan y experimenta un amor incondicional!"
            text="Shar pei"
            Badge="danger"
          />
        </Col>
        <Col md={3}>
          <Cards
            src="https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            titulo="Princesa"
            texto="Es una compañera leal y cariñosa que adora los mimos y los abrazos.¡Ayuda a princesa a encontrar su final feliz!"
            text="Beagle"
            Badge="warning"
          />
        </Col>
      </Row>
      <Footer />
    </>
  );
}
export default App;
