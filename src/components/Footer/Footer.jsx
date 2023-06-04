import Container from "react-bootstrap/Container";
import "./Footer.css";

function Footer() {
  return (
    <Container fluid className="footerbg">
      <footer>
        <div>
          <p>Contact Us:</p>
          <p>Location:</p>
        </div>
        <p>&copy; {new Date().getFullYear()} Little Lemon</p>
      </footer>
    </Container>
  );
}

export default Footer;
