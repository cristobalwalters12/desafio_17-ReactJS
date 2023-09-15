import Badge from "react-bootstrap/Badge";
function Tags(props) {
  return (
    <>
      <Badge bg={props.Badge}>{props.text}</Badge>
    </>
  );
}
export default Tags;
