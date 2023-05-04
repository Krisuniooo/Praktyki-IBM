import Home from "./pages/Home";
import Explorer from "./pages/Explorer";
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function Navbar () {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Explorer">Explorer</Link>
    </nav>
   )
}

function App() {
return (
    <Router>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Explorer' element={<Explorer/>} />
    </Routes>
    </Router>
);
}

export default App;

