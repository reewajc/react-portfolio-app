
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import PictureCard from './components/PictureCard';
import Skills from './components/Skills';
import Footer from './components/Footer';
import About from './components/About';
import Joke from './components/Joke';
import CustomNavbar from './components/CustomNavbar';
import Products from './components/Products';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="container App">
        <Header />
        <CustomNavbar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/jokes"><Joke /></Route>
        <Route exact path="/products"><Products /></Route>
      </Switch>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
