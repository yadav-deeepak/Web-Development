import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos, setTodo] = useState([{task: "sample-task", id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () =>{
        setTodo((prevTodos)=>{
            return [...prevTodos, {task: newTodo, id: uuidv4(), isDone: false}];
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) =>{
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) =>{
        setTodo((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id)); 
    };

    let markAllDone = () =>{
       setTodo((prevTodos) =>
        prevTodos.map((todo) =>{
            return {
                ...todo,
                isDone: true,
            };
        })
       );
    };

    let markAsDone = (id) =>{
        setTodo((prevTodos) =>
            prevTodos.map((todo) =>{
                if(todo.id == id){
                    return {
                        ...todo,
                        isDone: true,
                    };
                }else {
                    return todo;
                }
                
            })
           );
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
                     <li key={todo.id}><span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.task} &nbsp;&nbsp;&nbsp;<button onClick={() => deleteTodo(todo.id)}>Delete</button><button onClick={() => markAsDone(todo.id)}>Mark as Done</button></span></li>
                ))}
            </ul>
            <br></br><br></br>
            <button onClick={markAllDone}>Mark All as Done</button>
        </div>
    );
}