import { useEffect, useState } from "react";
import Box from "./Components/Box";
import Input from "./Components/Input";

function App() {
  const [todo,setToDo] = useState([]);

  const removeToDo = (id) => {
    console.log(id);
    const newtodo = todo.filter(
      (d, key) => {
        if (key !== id){
          return true;
        }else {
          return false;
        }
      }
    )
    setToDo(newtodo);
  }

  const addToDoHandler = (item) => {
  
    setToDo(
      [
        ...todo,
        {
          item,
          time: new Date().toLocaleTimeString()
        }
      ]
    )
  }
  return (
    <div className="bg-black h-screen p-3">
      LIGHT TODO APP
      <div className="rounded mx-auto-max-w-[750px] min-h-[550px] shadow-2xl
      bg-slate-800"> <div className="text-[20px] text-white text-center p-5">LIGHT TODO APP</div> 
        <Input handler={addToDoHandler}/>
        <Box data={todo} removeHandler = {removeToDo}/>
      </div>
    </div>
  );
}
export default App;