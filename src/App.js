
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Body from './components/Body';
import Footer from './components/Footer';
import Home from './pages/Home';
import New from './pages/New';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        {/* <NavBar />
        <Hero />
        <Body />
        <Footer /> */}

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
