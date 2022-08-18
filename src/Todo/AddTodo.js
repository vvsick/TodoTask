import React, {useState} from "react";

export const AddTodo = ({onAdd}) => {
    const [inputValue, setInputValue] = useState('');

    function submitHandler(event) {
        event.preventDefault();

        if (inputValue.trim()) {
            onAdd(inputValue);
            setInputValue('');
        };
    }
    return (
        <form onSubmit={submitHandler}>
          <p>Добавить задание</p>
          <input value={inputValue} onChange={event => setInputValue(event.target.value)}/>
          <button type='submit'>Добавить</button>
        </form>
    )
}