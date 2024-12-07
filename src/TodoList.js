import { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";
import { useEffect } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "task 1",
    },
    {
      id: 2,
      title: "task 2",
    },
    {
      id: 3,
      title: "task 3",
    },
    {
        id: 4,
        title: "task 4",
      },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const addTodoHandler = () => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: newTodo,
      },
    ]);
  };

  const deleteTodo = (todoid)=>{
    // console.log(todoid)
    let mynewTodo = todos.filter(todo=>todo.id !== todoid)
    setTodos(mynewTodo)
  }

  useEffect(()=>{
    console.log('Todolist component');
  },[])

  return (
    <div className="todoListContainer">
      <h1>TodoList</h1>
      <hr />

      <div className="addTodoContainer">
        <input type="text" onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={addTodoHandler}>Add todo</button>
      </div>

      
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} removeTodo={()=>deleteTodo(todo.id)} />
      ))}
    </div>
  );
}

export default TodoList;
