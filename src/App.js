import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ProductDetails from './Pages/ProductDetails';
import Home from './Pages/Home';
import ShoppingCart from './Pages/ShoppingCart';
import Checkout from './Pages/Checkout';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      productQuant: 0,
      /* availableQuantity: 0, */
    };
  }

  componentDidMount() {
    this.updateQuant();
  }

  /* checkAvailableQuantity = ({ target }) => {
    const { id } = target;
    const products = JSON.parse(localStorage.getItem('products'));
  }; */

  updateQuant = () => {
    const productsList = JSON.parse(localStorage.getItem('products'));

    const newQuantity = productsList?.reduce((acc, curr) => acc + curr.quantity, 0);

    this.setState({
      productQuant: newQuantity,
    });

    localStorage.setItem('productQuantity', newQuantity);
  };

  render() {
    const { productQuant } = this.state;
    return (
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (<Home
              { ...props }
              productQuant={ productQuant }
              updateQuant={ this.updateQuant }
              /* checkAvailableQuantity={ this.checkAvailableQuantity } */
            />) }
          />
          <Route
            exact
            path="/cart"
            render={ (props) => (<ShoppingCart
              { ...props }
              updateQuant={ this.updateQuant }
              /* checkAvailableQuantity={ this.checkAvailableQuantity } */
            />) }
          />
          <Route
            exact
            path="/productDetails/:id"
            render={ (props) => (<ProductDetails
              { ...props }
              productQuant={ productQuant }
              updateQuant={ this.updateQuant }
              /* checkAvailableQuantity={ this.checkAvailableQuantity } */
            />) }
          />
          <Route exact path="/checkout" component={ Checkout } />
        </Switch>
      </main>
    );
  }
}

export default App;
