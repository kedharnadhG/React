import React, {useContext, useState} from "react";
import { FormGroup, Input, Button, Form, InputGroup, InputGroupText } from "reactstrap";

import {v4} from "uuid";
import { TodoContext } from "../Context/TodoContext";
import { ADD_TODO } from "../Context/action.types";

const TodoForm = () =>{
    const [todoString, settodoString] = useState("");
    const {dispatch} = useContext(TodoContext);

    const handleSubmit = e => {
        e.preventDefault();
        if(todoString===""){
            return alert("please enter a todo");
        }
        
        const todo ={
            todoString,
            id: v4()        //gives an unique id
        }
        dispatch({
            type: ADD_TODO,
            payload: todo
        })

        //emptying the form
        settodoString("")
    }

    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input 
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Your Next Todo"
                    // TODO: value, onChange
                    value={todoString}
                    onChange={e => settodoString(e.target.value)}
                    />
                    <InputGroupText addoType="prepend">

                        <Button
                        color="warning"
                        //TODO: onclick
                        >Add</Button>

                    </InputGroupText>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm;