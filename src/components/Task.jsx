import React from 'react';
import './Task.scss'

const Task = (task) => {

    return (
        <>
        <div className='task-container'>
            <h1>{task.title}</h1>
        </div>
        </>
    );
}
 
export default Task;
