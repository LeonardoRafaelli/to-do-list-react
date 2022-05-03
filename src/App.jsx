import Tasks from './components/Tasks';
import './App.css';
import { useState } from 'react';
import AddTask from './components/AddTask';

const App = () => {
  const [message, setMessage] = useState(['TASK'])
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar React',
      completed: false,
    },
    {
      id: 2,
      title: 'Estudar SQL',
      completed: false,
    },
  ])

  return (
    <>
      <div className='container'>
      <AddTask />
      <Tasks tasks={tasks}/>
      </div>
    </>
  );
}

export default App;
