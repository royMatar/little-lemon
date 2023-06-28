import Form from "../Form/Form";
import Container from "react-bootstrap/Container";
import "./BookingPage.css";
import Image from "react-bootstrap/Image";

function BookingPage() {

  return (
    <>
      <Container fluid className="bookingpage">
        <Container>
          <Form/>
        </Container>
        <Container>
          <Image src="../icons_assets/restaurant.jpg" id="imgrest" fluid />
        </Container>
      </Container>
    </>
  );
}

export default BookingPage;
