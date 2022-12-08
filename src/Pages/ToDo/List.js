import axios from 'axios';
import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const ToDoList = () => {
    const [todos,setTodos] = useState([]);
    useState(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((res) =>res.data)
        .then(res =>{
            setTodos(res);
        });
    },[]);
  return (
    <div>
        <h3>Todos</h3>
        {todos.map((i) => (
            <Link to = {"/todo/"+i.id} key = {i.id}>
                <h4>{i.title}</h4>
            </Link>
        ))}
    </div>
    
  );
};

export default ToDoList;