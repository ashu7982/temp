import logo from './logo.svg';
import './App.css';
// import Navbar from './navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import AllRoutes from './mainRoutes';
import Stats from './pages/stats';

function App() {
  return (
    <Router>
      <div className="App">
      <nav style={{display:'flex',justifyContent:'space-around'}}>
          
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/stats'>Stats</Link>
        </nav>
        <Dashboard />
        <AllRoutes />
      </div>
    </Router>
  );
}

export default App;
