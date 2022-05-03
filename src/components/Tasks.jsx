import React from "react";
import './Tasks.scss'
import Task from "./Task";

const Tasks = ({tasks}) => {

    // console.log(tasks);

    return (
        <>
            {tasks.map(task => <Task title={task.title}/>)}
        </>
    )
}

export default Tasks;