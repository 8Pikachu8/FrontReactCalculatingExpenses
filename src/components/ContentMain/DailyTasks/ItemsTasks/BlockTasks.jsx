import React from "react";
import blockTasksCSS from "./BlockTasks.module.css";
import Task from "./BlockTasks/Task";
import { useForm } from "react-hook-form";

const BlockTasks = (props) => {
	
	const tempSubmit = (task) => {
		props.CallBackAdd(task) 
    };

    return (
			<div className={blockTasksCSS.listTasks}>
				<Task listTasks = {props.listTasks}/>
				<InsertTaskForm onSubmit = {tempSubmit} newTask ={props.newTask} CallBackAdd = {props.CallBackAdd}/>
			</div>
		)
}

function InsertTaskForm(props) {
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    
    const onSubmit = (data) => {
        // Вызов переданного onSubmit из родителя
        if (props.onSubmit) {
            props.onSubmit(data.task);
        }
		reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={blockTasksCSS.form}>
            <input type="text"
                    {...register("task", { required: "Поле обязательно для заполнения" })}/>
        	<button  type="submit"  className = {blockTasksCSS.button} >Добавить задачу</button>
        </form>
    );
}

export default BlockTasks;