import { useState } from 'react';
import './Todo.css';
export let Todo = function () {

    let [todo, setTodo] = useState([]);

    let saveTodoList = (event) => {

        let value = (event.target.todoinput.value);
        value = value.toUpperCase();

        if (!todo.includes(value)) {

            let finalTodo = [...todo, value];
            setTodo(finalTodo);
        }

        else {
            alert('already inserted');
        }

        event.preventDefault();
    }

  
        

    return (
        <div className="todo-outer-div">
            <h1>Todo App</h1>
            <form onSubmit={saveTodoList}>
                <input type="text" name='todoinput' />
                <button>Save</button>
            </form>

            <ul >
              {todo.map((value , index )=>{
                return(
                    <TodoList title={value} key={index} index={index+1} list={todo} func= {setTodo} />
                )
              })}
            </ul>
        </div>
    )


   

}



function TodoList(value,index,list, func) {

    let deletefunction = ()=>{

        console.warn(list)
        
    }

    return (
            <li>{value.title} <button onClick={deletefunction} className='crossBtn'>&times;</button></li> 
    )

}