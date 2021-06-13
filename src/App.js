import './styles/main.scss'
// component imports
import Home from './components/Home.js'
import Nav from './components/navBar/Nav.js'
import Products from './pages/Products'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <div className="App">
    <Nav />
     <Home />
     <Products/>
    </div>
  );
}

export default App;
