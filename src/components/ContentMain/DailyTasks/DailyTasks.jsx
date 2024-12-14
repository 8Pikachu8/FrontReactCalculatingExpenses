import React from "react";
import dailyTasksCSS from "./DailyTasks.module.css";
import BlockWeeks from "./ItemsTasks/BlockWeeks";
import BlockTasks from "./ItemsTasks/BlockTasks";

const DailyTasks = (props) => {
    return (
			<div className={dailyTasksCSS.dailyTasks} onClick={props.toggleNavVisibility }>
				<BlockWeeks store = {props.store} />
				<BlockTasks store = {props.store}
								CallBackUpdate = {props.CallBackUpdate} CallBackAdd = {props.CallBackAdd}/>
			</div>
		)
}

export default DailyTasks;