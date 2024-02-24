import { useState } from 'react'
import './App.css'
import './Task'
export default function App() {
  const [list,setList] =useState([]);
  const [newTask,setNewTask]=useState("");

  const handleChange=(event)=>{
    setNewTask(event.target.value)
  };
  
  const addTask=()=>{
    const task={
      id: list.length===0 ? 1 :list[list.length-1].id+1,
      taskName:newTask,
      completed:false
    };
    setList([...list,task])
  };

  const deleteTask=(id)=>{
    const newList=list.filter((task)=>id!==task.id);
    setList(newList)
  }
  const completeTask=(id)=>{
    setList(
      list.map((task)=>{
        if(task.id==id){
          return {...task,completed:true};
        }else{
          return task;
        }
      })
    )
  }
  return (
    <>
      <div className="app-container">
      <div id="header">
        <h2>Note your daily To-Dos</h2>
      </div>
      <div className='App'>
        <div className="addTask">
          <input onChange={handleChange} className='inputTask' placeholder='Enter your tasks'/>
          <button onClick={addTask} className='addButton'>Add Task</button>
        </div>
        <div className="itemList">
          {list.map((task)=>{
            return (
              
                <div className='task' style={{  }}>
                
                  <div className='task-body'>
                    <h2 className='task-name' style={{color:task.completed ? "green":"red" ,textDecoration : task.completed ?"line-through" : "none" }}>{task.taskName}</h2>
                    <button onClick={()=>completeTask(task.id)} className='complete'>Complete</button>
                    <button onClick={()=>deleteTask(task.id)} className='delete'>DEL</button>
                  </div>
                </div>
              );
            
          })}
        </div>
      </div>
      </div>
      
    </>
  )
}

