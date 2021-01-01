import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';

import Task from './components/Task/Task';

function App() {
  const [tasks, setTasks] = useState([
    'Take dogs for a walk',
    'Take the rubbish out',
    'Grocery shopping',
  ]);

  const [input, setInput] = useState('');

  const addTask = (event) => {
    // this will fire off when we click the button "Add Task"
    event.preventDefault(); // stop the REFRESH of the page and keep the short term memory
    setTasks([...tasks, input]);
    setInput(''); // clear up the input field after pressing the "Add Task" button
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>

      <form>
        <FormControl>
          <InputLabel>✅ Write a task</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          type="submit"
          onClick={addTask}
          variant="contained"
          color="primary"
          disabled={!input}
        >
          Add Task
        </Button>
      </form>

      <ul>
        {tasks.map((task) => (
          <Task text={task} />
        ))}
      </ul>
    </div>
  );
}

export default App;
