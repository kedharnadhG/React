import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";

//react-router
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//toast
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css"


// -----       Firebase
import firebase from 'firebase/compat/app';
import "firebase/auth"


//Components
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import PageNotFound from "./pages/PageNotFound"
import {UserContext} from "./context/UserContext";
import Footer from './layout/Footer';
import Header from './layout/Header';

import firebaseConfig from './Config/firebaseConfig';
//init firebase
firebase.initializeApp(firebaseConfig);

const App = () => {

  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user, setUser}}>
        <Header />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/signin' Component={Signin} />
          <Route exact path='/signup' Component={Signup} />
          <Route exact path='*' Component={PageNotFound} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
