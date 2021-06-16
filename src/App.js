import './styles/main.scss'
import AOS from 'aos';
// component imports
import Home from './components/Home.js'
import Nav from './components/navBar/Nav.js'
import Products from './pages/Products'
import Footer from './components/footer/Footer';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <div className="App">
    <Nav />
     <Home />
     <Products/>
     <Footer />
    </div>
  );
}

export default App;
