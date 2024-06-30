import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todos = () => {
  const [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(),isDone : false }]);
  const [newTodos, setNewTodos] = useState("");

  const handleTodo = () => {
    setTodos((prevTodo) => {
      return [...prevTodo, { task: newTodos, id: uuidv4(),isDone : false }];
    });
    setNewTodos("");
  };

  const updateTodos = (event) => {
    setNewTodos(event.target.value);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodo) => todos.filter((prevTodo) => prevTodo.id != id))
  }

  const markAsDone = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => {
        if(todo.id == id){
            return {
                ...todo,isDone:true,
            }
        }else{
            return todo;
        }
    }))
  };

  const markAllAsDone = () => {
    setTodos((prevTodos) => prevTodos.map((todo) => {
        return {...todo,isDone:true}
    }))
  }

  return (
    <div>
    <br /><br /><hr />
    <h1>Todo App</h1>
      <input type="text" value={newTodos} onChange={updateTodos} required/>
      <br />
      <br />
      <button onClick={handleTodo}>Add Todo</button>
      <br />
      <br />
      <h3>Todos</h3>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <span style={item.isDone ? {textDecorationLine : "line-through"} : {}}>{item.task}</span> &nbsp;&nbsp;
            <button onClick={() => deleteTodo(item.id)}>Delete</button>
            <button onClick={() => markAsDone(item.id)}>Mark As Done</button>
          </li>
          
        ))}
        </ul>
        <button onClick={ markAllAsDone}>marks all as done</button>
      
    </div>
  );
};

export default Todos;
