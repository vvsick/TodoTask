import React, {useState, useContext} from "react";
import './Modal.css'
import deleteContext from "../Todo/Context";

export const Modal = ({show, todo, editTodo}) => {
    const [editValue, setEditValue] = useState('');
    const {deleteTodo} = useContext(deleteContext);

    function submitHandler(event) {
        event.preventDefault();

        if (editValue.trim()) {
            editTodo(editValue);
            setEditValue('');
        };
    }

    function editTodo () {

    }

    if (!show) {
        return null
    }

    return (
        <div className="modal">
            <div className="modal-body">
            <form onSubmit={submitHandler}>
                <p>Редактировать задание</p>
                <input value={editValue} onChange={event => setEditValue(event.target.value)}/>
                <button type='submit'>Редактировать</button>
            </form>

                <button onClick={() => deleteTodo(todo.id)}>Удалить</button>

                <div>
                <a>ожидает </a>
                <a>в процессе </a>
                <a>выполнена</a>
                </div>
            </div>
        </div>
    )
}