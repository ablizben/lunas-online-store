
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Clothing from './pages/Clothing';
import Accessories from './pages/Accessories';
import Shoes from './pages/Shoes';
import Sales from './pages/Sales';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <Link to='/'></Link>
            <Link to='/New'></Link>
            <Link to='/Clothing'></Link>
            <Link to='/Accessories'></Link>
            <Link to='/Shoes'></Link>
            <Link to='/Sales'></Link>
            <Route exact path='/' component={Home} />
            <Route exact path='/New' component={New} />
            <Route exact path='/Clothing' component={Clothing} />
            <Route exact path='/Accessories' component={Accessories} />
            <Route exact path='/Shoes' component={Shoes} />
            <Route exact path='/Sales' component={Sales} />
            
        </Router>
        
        
    </div>
  );
}

export default App;
