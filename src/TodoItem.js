import "./TodoItem.css"
import { useEffect } from "react";

function TodoItem(props){

    useEffect(()=>{
        console.log('Todoitem component' , props.id);

        return ()=>{
            console.log('unmount' , props.id)
        }
      },[])

    return(
        <div className="todoItemContainer">
            <p>{props.title}</p>
            <button onClick={props.removeTodo}>delete {props.title}</button>
        </div>
    )
}
export default TodoItem