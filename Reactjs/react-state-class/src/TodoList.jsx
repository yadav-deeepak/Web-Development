import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos, setTodo] = useState([{task: "sample-task", id: uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () =>{
        setTodo((prevTodos)=>{
            return [...prevTodos, {task: newTodo, id: uuidv4()}];
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) =>{
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) =>{
        setTodo((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id)); 
    };

    return (
        <div>
            <input placeholder="Add a task" value={newTodo} onChange={updateTodoValue}></input>
            <button onClick={addNewTask}>Add task</button>
            <br></br><br></br><br></br>
            <hr></hr>
            <h4>Todo List</h4>
            <ul>
                {todos.map((todo)=>(
                     <li key={todo.id}><span>{todo.task} &nbsp;&nbsp;&nbsp;<button onClick={() => deleteTodo(todo.id)}>Delete</button></span></li>
                ))}
            </ul>
        </div>
    );
}