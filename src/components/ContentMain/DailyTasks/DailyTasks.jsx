import React from "react";
import dailyTasksCSS from "./DailyTasks.module.css";
import BlockWeeks from "./ItemsTasks/BlockWeeks";
import BlockTasks from "./ItemsTasks/BlockTasks";

const DailyTasks = (props) => {
    return (
			<div className={dailyTasksCSS.dailyTasks}>
				<BlockWeeks store = {props.store}
								dispatch = {props.dispatch}/>
				<BlockTasks store = {props.store}
								dispatch = {props.dispatch}/>
			</div>
		)
}

export default DailyTasks;