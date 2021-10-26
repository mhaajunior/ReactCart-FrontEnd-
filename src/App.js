import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Book from './components/Book/Book';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

import classes from './components/Global.module.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className={classes.flexBox}>
        <div className={classes.sideContainer}></div>
        <div className={classes.container}>
          <Route exact path="/" component={Landing}></Route>
          <Route path="/book/:id" component={Book}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route path="/cart/checkout" component={Checkout}></Route>
        </div>
        <div className={classes.sideContainer}></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
