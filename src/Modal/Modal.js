import React, {useContext} from "react";
import './Modal.css'
import Context from "../Todo/Context";

export const Modal = ({show, todo}) => {
    const {removeTodo} = useContext(Context)

    if (!show) {
        return null
    }
    

    return (
        <div className="modal">
            <div className="modal-body">
                <button onClick={() => removeTodo(todo.id)}>Удалить</button>
                <div>
                <a>ожидает </a>
                <a>в процессе </a>
                <a>выполнена</a>
                </div>
            </div>
        </div>
    )
}