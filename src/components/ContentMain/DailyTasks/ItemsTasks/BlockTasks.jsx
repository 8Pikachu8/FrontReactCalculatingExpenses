import React from "react";
import blockTasksCSS from "./BlockTasks.module.css";
import Task from "./BlockTasks/Task";
import InsertTask from "./BlockTasks/InsertTask";

const BlockTasks = (props) => {
    return (
			<div className={blockTasksCSS.listTasks}>
				<Task listTasks = {props.listTasks}/>
				<InsertTask newTask ={props.newTask} CallBackUpdate = {props.CallBackUpdate} CallBackAdd = {props.CallBackAdd}/>
			</div>
		)
}

export default BlockTasks;