import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo,deleteTodo } from '../features/todoSlice';
export default function Input() {
    const [todo,SetTodo]=useState('');
    const dispatch=useDispatch();
    const addhandler=()=>{
        console.log(" i here",todo)
            dispatch(addTodo(todo));
            SetTodo("");
    }
   const todos= useSelector(state=>state.rishu.todos);
   console.log(todos);
  return (
   <>
    <input value={todo} type='text' onChange={(e)=>SetTodo(e.target.value)}/>
    <button onClick={()=>addhandler()}>Add</button>

    {
        todos?.map((e)=>(
            <div key={e.id}>
            <h1 >{e.text}</h1>
            <button onClick={()=>dispatch(deleteTodo(e.id))}>Delete</button>
            </div>
        ))
    }
   </>
  )
}
