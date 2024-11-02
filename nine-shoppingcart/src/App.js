import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import { useState } from 'react';

import { Container, Row, Col } from 'reactstrap';
import {ToastContainer ,toast } from 'react-toastify';


import BuyPage from './Components/BuyPage';
import Cart from './Components/Cart';

function App() {
 
  const [cartItem, setCartItem] = useState([]);
  
  const addInCart = item => {
    //checking whether item is already added in cart or not
    const isAlreadyAdded = cartItem.findIndex(function(array){
      return array.id === item.id  //if item is matches with array element, then returns matched element index else -1
    });

    if(isAlreadyAdded !==-1){
      toast("already added in cart", {type: "error", position:"top-right"})
      return;
    }

    setCartItem([...cartItem, item]);

  };

  const buyNow = () => {
    setCartItem([]);

    toast("Purchase Complete", {
      type:"success"
    });
  };


  const removeItem = item => {
    setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id))
  }


  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md="8">
          <BuyPage addInCart={addInCart}/>
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
