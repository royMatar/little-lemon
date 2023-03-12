import { Button } from "bootstrap";


function Navigation() {
  return (<>
    <div>
      <img src="logo.svg"></img>
    </div>
    <nav>
      <ul>
        <li><a href="/home" role={Button}>Home</a></li>
        <li><a href="/about" role={Button}>About</a></li>
        <li><a href="/menu" role={Button}>Menu</a></li>
        <li><a href="/reservations" role={Button}>Reservations</a></li>
        <li><a href="/orderonline" role={Button}>Order Online</a></li>
        <li><a href="/login" role={Button}>Login</a></li>
      </ul>

    </nav>
</>
  );
}

export default Navigation;