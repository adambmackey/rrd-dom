import logo from './logo.svg';
import './App.css';
import {Link, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Team from './components/Team';
import Details from './components/Details';


function App() {
  return (
    <div className="App">
      <header>
      <Link to="/">Home</Link>
      <Link to="/team">Team</Link>
      <Link to="/details">Details</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team/*" element={<Team />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
