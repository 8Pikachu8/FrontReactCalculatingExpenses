import React from "react";
import TaskCSS from "./Task.module.css";

const Posts = (props) => {
    let tasks = props.listTasks.map(task => (
        <div className="block" > {task.Task}</div>
    ));
    return (
            <div>{tasks}</div>
        )
}

export default Posts;