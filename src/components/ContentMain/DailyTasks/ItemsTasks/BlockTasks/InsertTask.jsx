import React from "react";
import insertTaskCSS from "./InsertTask.module.css";


const InsertTask = (props) => {

   
	
    return (<div className="block">
                    <input className = {insertTaskCSS.insert} value={props.newTask.Task}
				onChange={props.CallBackUpdate}/>
                    <button className = {insertTaskCSS.button} onClick={props.CallBackAdd}>Добавить задачу</button>
            </div>
		)
}

export default InsertTask;