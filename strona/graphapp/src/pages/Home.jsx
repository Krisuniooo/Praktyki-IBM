import '../App.css';
import logo from '../img/ibm.png';
import ParticlesBackground from '../components/particles';
import { BrowserRouter, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header>
          <div className='header-left'>
            <img src={logo} alt="logo" />
          </div>
          <div className='header-right'>
            <nav>
                <Link to="/">Strona główna</Link>
                <Link to="/Explorer">Explorer</Link>
            </nav>
          </div>
      </header>
      <div className="container">
        <div className='container-wrapper'>
        <ParticlesBackground />
            <div className='container-transparent'>
                <div className='container-main'>
                    
                </div>
            </div>
        </div>
      </div>
      <footer>
        Copyright &copy; Adam Pieróg, Krystian Maciąg 2023
      </footer>
    </div>
  );
}

export default Home;
