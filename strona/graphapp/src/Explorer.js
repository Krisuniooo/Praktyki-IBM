import './App.css';
import logo from './img/ibm.png';
import ParticlesBackground from './components/particles';

function App() {
  return (
    <div className="App">
      <header>
          <div className='header-left'>
            <img src={logo} alt="logo" />
          </div>
          <div className='header-right'>
          <nav>
                <a href="App.js">Strona główna</a>
                <a href="Explorer.js">Explorer</a>
                <a href="#">Strona główna</a>
            </nav>
          </div>
      </header>
      <div className="container">
        <div className='container-left'>
            <ul>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
            </ul>
        </div>
        <div className='container-middle'>
          
        </div>
        <div className='container-right'>
            <ul>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
            </ul>
        </div>
      </div>
      <footer>
        Copyright &copy; Adam Pieróg, Krystian Maciąg 2023
      </footer>
    </div>
  );
}

export default App;
