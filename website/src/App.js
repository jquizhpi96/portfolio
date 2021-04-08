import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Work from './Components/Work/Work';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function App() {
  return (

    <div className="App">

      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Route exact path="/"> <Home /> </Route>
      <Route path="/projects"> <Work /> </Route>
      <Route path="/about"><About /></Route>
      <Route path="/contact"><Contact /></Route>

    </div>

  );
};

export default App;
