import React from 'react';
import './Task.scss'

const Task = ({task, handleTaskClick, handleDeleteClick}) => {


    return (
        <>
        <div className='task-container'
        style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}
        >

            <div
            className='task-title'
            onClick={() => {handleTaskClick(task.id)}}
            >
                <p>{task.title}</p>
            </div>

            <div className="buttons-container">
                {/* <button className="remove-task-button" onClick={}>`?`</button> */}
                <button className="remove-task-button" onClick={() => {handleDeleteClick(task.id)}}>X</button>
            </div>

        </div>
        </>
    );
}
 
export default Task;
