
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <Link to='/'></Link>
            <Link to='/New'></Link>
            <Route exact path='/' component={Home} />
            <Route exact path='/New' component={New} />
            
        </Router>
        
        
    </div>
  );
}

export default App;
