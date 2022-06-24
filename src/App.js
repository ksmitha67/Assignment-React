import React  from "react";
// import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home';
// import Cart from "./components/Cart";
// import Wishlist from "./components/Wishlist"
// import Header from "./components/Header";
// import {Link} from "react-router-dom"

function App() {



  return (
    <div className="App">
      <Home />
     {/* <Router>
      <Link to="/">
        <Home />
      </Link>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/wishlist">
            <Wishlist /> 
          </Route>
          <Route path="/cart"> 
            <Cart /> 
          </Route>
      </Switch>
    </Router> */}
        
        
     
     
    </div>
  );
}

export default App;
