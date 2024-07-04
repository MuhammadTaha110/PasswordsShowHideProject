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
                let obj ={
                    title:value,
                    indexN: index+1 ,
                    list:todo,
                    func: setTodo, 
                    key: index 
                }
                return(
                    <TodoList  obj = {obj}  />
                )
              })}
            </ul>
        </div>
    )


   

}



function TodoList({obj}) {

    let deletefunction = ()=>{

        let listAfterDelete = obj.list.filter((value,index)=>(index!=obj.indexN));
        obj.func(listAfterDelete);

       
        //console.warn(obj.indexN)
        
    }

    return (
            <li>{obj.title} <button onClick={deletefunction} className='crossBtn'>&times;</button></li> 
    )

}