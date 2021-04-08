import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">

      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Route path="/"> <Home /> </Route>
      <Route path="/work">Work </Route>
      <Route path="/about">About </Route>
      <Route path="/contact">Contact</Route>

    </div>
  );
}

export default App;
