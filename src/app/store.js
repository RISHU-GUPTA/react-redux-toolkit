import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todoSlice'
export const store=configureStore(
    {
        reducer:{
            rishu:todoReducer
        }
        //write directly without {} if one reducers if multiple use like this
    }
)