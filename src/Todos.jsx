import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Todos = () => {
    const [todos,setTodos] = useState([{task : "sample task", id : uuidv4()}]);
    const [newTodos,setNewTodos] = useState("");

    const handleTodo = () => {
        setTodos([...todos,{task : newTodos, id : uuidv4()}]);
        setNewTodos("");
    }

    const updateTodos = (event) => {
        setNewTodos(event.target.value);
    }

    return (
        <div>
            <input type="text" value={newTodos} onChange={updateTodos} />
            <br /><br />
            <button onClick={handleTodo}>Add Todo</button>
            <br /><br />
            <hr />

            <h3>Todos</h3>
            <ul>
            {
                todos.map((item) => (
                    <li key={item.id}>{item.task}</li>
                ))
            }
            </ul>
        </div>
    )
}

export default Todos;