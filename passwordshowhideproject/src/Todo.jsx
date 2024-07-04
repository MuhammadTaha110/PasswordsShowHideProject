import { useState } from 'react';
import './Todo.css';
export let Todo = function (){

    let [todo,setTodo] = useState([]);

    let saveTodoList =(event) =>{

        let value = event.target.todoinput.value;

        if(todo.includes(value)){
            alert('inserted');
        }

        else{
            let finalTodo = [...todo,value];
            alert(finalTodo)
        }

       
        event.preventDefault();
    }

    return(
        <div className="todo-outer-div">
            <h1>Todo App</h1>
            <form onSubmit={saveTodoList}>
                <input type="text" name='todoinput' />
                <button>Save</button>
            </form>
        </div>
    )

}