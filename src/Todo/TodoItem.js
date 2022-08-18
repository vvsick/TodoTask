import React, {useState} from "react";
import { Modal } from "../Modal/Modal";

export default function TodoItem({todo, index}) {
    const [show, setShow] = useState(false);

    return (
        <li className="li">
            <span> 
                <strong>{ index + 1 } </strong>
                {todo.title} 
            </span>
            <button onClick={() => setShow(true)}>Редактировать</button>
            <Modal show={show} todo={todo}/>
        </li>
    )
}