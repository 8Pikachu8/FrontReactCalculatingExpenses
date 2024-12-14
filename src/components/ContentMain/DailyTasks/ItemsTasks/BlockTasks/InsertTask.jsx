import React from "react";
import insertTaskCSS from "./InsertTask.module.css";
import {UpdateTaskActionCreator,AddTaskActionCreator} from './../../../../../redux/DailyTask/UpdTasksCreateActions'

const InsertTask = (props) => {
    const inputRef = React.useRef(null);

    const onClickTaskAdd = () =>{
        props.dispatch(AddTaskActionCreator())
    }

    const onChangeTaskVlaue = () => {
        let text = inputRef.current.value
        props.dispatch(UpdateTaskActionCreator(text))
        console.log(text)
    }
	
    return (<div className="block">
                    <input className = {insertTaskCSS.insert} ref = {inputRef} value={props.newTask.Task}
				onChange={onChangeTaskVlaue}/>
                    <button className = {insertTaskCSS.button} onClick={onClickTaskAdd}>Добавить задачу</button>
            </div>
		)
}

export default InsertTask;