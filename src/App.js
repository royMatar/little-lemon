import './App.css';
import Nav from './components/Navigation/Nav';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Specials from './components/Specials/Specials';
import Testimonials from './components/Testimonials/Testimonials';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Specials/>
      <Testimonials/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
