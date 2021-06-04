import './styles/main.scss'
// component imports
import Home from './components/Home.js'
import Nav from './components/navBar/Nav.js'
function App() {
  return (
    <div className="App">
    <Nav />
     <Home />
    </div>
  );
}

export default App;
