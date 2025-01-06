import React from "react";
import dailyTasksCSS from "./DailyTasks.module.css";
import BlockWeeks from "./ItemsTasks/BlockWeeks";
import BlockTasks from "./ItemsTasks/BlockTasks";

const DailyTasks = (props) => {
    return (
			<div className={dailyTasksCSS.dailyTasks} >
				<BlockWeeks listWeeks = {props.listWeeks} />
				<BlockTasks listTasks = {props.listTasks} newTask = {props.newTask}
								CallBackUpdate = {props.CallBackUpdate} CallBackAdd = {props.CallBackAdd}/>
			</div>
		)
}

export default DailyTasks;