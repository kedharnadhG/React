import React, {useContext} from "react";
import {ListGroup, ListGroupItem} from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";

import { TodoContext } from "../Context/TodoContext";
import { REMOVE_TODO } from "../Context/action.types";
import { type } from "@testing-library/user-event/dist/type";

const Todos =() => {
    const {todos, dispatch} = useContext(TodoContext);

    return(
        <ListGroup className="mt-5 mb-5 items">
            {todos.map(todo => (
                <ListGroupItem key={todo.id}>
                    {todo.todoString}
                    <span style={{float:"right"}}
                    onClick={()=>{
                        dispatch({
                            type:REMOVE_TODO,
                            payload:todo.id
                        });
                    }}
                    >
                        <FaCheckDouble/>
                    </span>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Todos;