import React from 'react';
import logo from './logo.svg';
import { Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';


//importing Components
import Todo from "./Components/Todo"
import TodoForm from "./Components/TodoForm"

// redux
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <Container fluid>
        <Todo />
        <TodoForm /> 
      </Container>
    </Provider>
  );
}

export default App;
