import React, { useEffect, useState } from "react";
import Create from './Create';
import axios from "axios";
import {BsCircleFill} from 'react-icons/bs'
import { BsTrashFill } from "react-icons/bs";


function Home(){
    const [todos, setTodo] = useState([])
    useEffect(() => {
      axios.get('http://localhost:3001/get')
      .then(result => setTodo(result.data))
      .catch(err => console.log(err))
    },[])

    const handleEdit = (id) => {
      axios.get('http://localhost:3001/update/'+id)
      .then(result => console.log(result))
      .catch(err => console.log(err))
    }
    return(
        <div className="home">
        <h2>Todo List</h2>
        <Create />

        {
          todos.length === 0
          ?
          <div><h2>No Record</h2></div>
          :
          todos.map(todo => (
            <div className="todo">
              <div className="checkbox" onClick={() =>handleEdit(todo.id)}>
                <BsCircleFill className="icon"/>
                <p>{todo.task}</p>
              </div>
              <div>
                <span><BsTrashFill className='icon'/></span>
              </div>
            </div>
          ))
        }
       
      </div>
    )
}

export default Home;