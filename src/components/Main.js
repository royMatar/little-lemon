import { Card } from "react-bootstrap";


function Main(){
    return(
      <>
    <div>
      <div>
        <p>This Week's Specials</p>
      </div>
      <div><button>Menu</button></div>
    </div>
    <div>
      <Card>
        <img src="greek salad.jpg" alt="Salad pic"></img>
        <h3>Greek Salad</h3>
        <p>7.50 $</p>
        <p>Description</p>
      </Card>
    </div>
    <div>
      <Card>
        <img src="bruchetta.svg" alt="Bruschetta"></img>
        <h3>Bruschetta</h3>
        <p>8.50 $</p>
        <p>Description</p>
      </Card>
    </div>
    <div>
      <Card>
        <img src="lemon dessert.jpg" alt="Lemon Dessert"></img>
        <h3>Lemon Dessert</h3>
        <p>6.50 $</p>
        <p>Description</p>
      </Card>
    </div>
     </>

)
}


export default Main;