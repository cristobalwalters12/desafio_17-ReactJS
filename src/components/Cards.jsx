import Card from "react-bootstrap/Card";
import Tags from "./Tags";
function Cards(props) {
  return (
    <>
      <Card className="my-card">
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
          <Card.Title>{props.titulo}</Card.Title>
          <Card.Text>{props.texto}</Card.Text>
        </Card.Body>
        <Tags Badge={props.Badge} text={props.text} />
      </Card>
    </>
  );
}

export default Cards;
