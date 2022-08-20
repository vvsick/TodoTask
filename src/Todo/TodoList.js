import React from "react";

import TodoItem from "./TodoItem.js";
import '../App.css';
// import editContext from './Todo/Context';

export const TodoList = (props) => {

    return (
        <div className='list'>
            <ul className="ul">
                {[props.todos.map((todo, index) => {
                    return <TodoItem todo={todo} key={todo.id} index={index} />
                })]}
            </ul>
            
        </div>
    )
}