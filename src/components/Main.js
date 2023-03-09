import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Main(){
    return(<>    
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="greek salad.jpg" width={250} height={150}/>
    <Card.Body>
      <Card.Title>Greek Salad</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Order now</Button>
    </Card.Body>
  </Card>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="bruchetta.svg" width={250} height={150}/>
      <Card.Body>
        <Card.Title>Bruschetta</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Order now</Button>
      </Card.Body>
    </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="lemon dessert.jpg" width={250} height={150}/>
        <Card.Body>
          <Card.Title>Lemon Dessert</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Order now</Button>
        </Card.Body>
      </Card></>
)
}


export default Main;