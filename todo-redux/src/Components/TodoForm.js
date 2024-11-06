import React, {useState} from 'react'
import {
    Container,
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupText
} from "reactstrap";

import { v4 } from 'uuid';

//Redux
import { connect } from 'react-redux';
import {addTodo} from "../action/todo"


const TodoForm = ({addTodo}) => {
    const[title, setTitile] = useState('');

   const handleSubmit = e => {
        e.preventDefault();
        if(title === ''){
            return alert("please add a todo");
        }

        const todo = {
            title,
            id: v4()
        }

        addTodo(todo);

        setTitile('');
    }

  return (
    <Form onSubmit={handleSubmit}>
        <FormGroup>
            <InputGroup>
                <Input 
                type='text'
                name='todo'
                id='todo'
                placeholder='your next todo'
                value={title}
                onChange={e => setTitile(e.target.value)}
                />
                <InputGroupText >
                    <Button color='primary' onClick={handleSubmit}>ADD</Button>
                </InputGroupText>
            </InputGroup>
        </FormGroup>
    </Form>
  );
};

//to bring something(State) from the central state
const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    addTodo: todo=>{
        dispatch(addTodo(todo))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)  //TODO: connect to redux
