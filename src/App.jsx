import { useState } from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Tasks from './components/Tasks/Tasks';
import AddTask from './components/Tasks/AddTask';
import Header from './components/Header';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar React',
      completed: false,
    },
    {
      id: 2,
      title: 'Estudar SQL',
      completed: true,
    },
  ])

  const handleTaskAddition = (taskTitle) => {
    if(taskTitle){
      const newTasks = [
        ...tasks,
        {
          title: taskTitle,
          id: uuidv4(),
          completed: false,
        }
      ]
  
      setTasks(newTasks);
    }
  }

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) return {...task, completed: !task.completed}
      return task;
    })

    setTasks(newTasks);
  }

  const handleDeleteClick = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <Router>
          <Route path="/" render={() => (
          
            <>
              <div className='container'>
                <Header />
                <AddTask handleTaskAddition={handleTaskAddition}/>
                <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleDeleteClick={handleDeleteClick}/>
              </div>
            </>

          )}/>
    </Router>
  );
}

export default App;
