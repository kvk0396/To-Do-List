import React from "react";
import './App.css'

export default function Task(props){
    return (
        <div className='task'>
          <h2>{props.taskName}</h2>
          <button onClick={()=>props.deleteTask(props.id)}>DEL</button>
        </div>
      );
};