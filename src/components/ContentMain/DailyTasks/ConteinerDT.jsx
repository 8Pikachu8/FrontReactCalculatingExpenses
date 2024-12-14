import React from "react";
import {UpdateTaskActionCreator,AddTaskActionCreator} from './../../../redux/DailyTask/UpdTasksCreateActions'
import DailyTasks from "./DailyTasks";

const ConteinerDT = (props) => {

    const onClickTaskAdd = () =>{
        props.dispatch(AddTaskActionCreator())
    }

    const onChangeTaskVlaue = (event) => {
        let text = event.target.value
        props.dispatch(UpdateTaskActionCreator(text))
        console.log(text)
    }


    return (
			<DailyTasks toggleNavVisibility={props.toggleNavVisibility}  store = {props.store}
								CallBackUpdate = {onChangeTaskVlaue} CallBackAdd = {onClickTaskAdd}/>
		)
}

export default ConteinerDT;