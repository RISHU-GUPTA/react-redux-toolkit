import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:'rer'}]
}

export const todoSlice=createSlice({
    name:'hgh',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            let todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo);
        },
        deleteTodo:(state,action)=>{
          state.todos=  state.todos.filter(e=>e.id!=action.payload);
        }
    }
})

export const {addTodo,deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;