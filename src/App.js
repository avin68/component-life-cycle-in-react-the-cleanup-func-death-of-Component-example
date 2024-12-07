import { useEffect } from "react"
import TodoList from "./TodoList"

function App(){

  
  useEffect(()=>{
    console.log('App component');
  },[])


  return(
    <>
      <TodoList />
    </>
  )
}
export default App