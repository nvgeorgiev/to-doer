import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import firebase from 'firebase';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

import './App.css';
import db from './firebase';
import Task from './components/Task/Task';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  // when the app loads, we need to listen to the database and fetch new tasks as they get added/removed
  useEffect(() => {
    //this code here...fires when the app loads
    db.collection('tasks')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setTasks(
          snapshot.docs.map((doc) => ({ id: doc.id, task: doc.data().task }))
        );
      });
  }, []);

  const addTask = (event) => {
    // this will fire off when we click the button "Add Task"
    event.preventDefault(); // stop the REFRESH of the page and keep the short term memory

    db.collection('tasks').add({
      task: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput(''); // clear up the input field after pressing the "Add Task" button
  };

  return (
    <div className="App">
      <h1>To-DoER</h1>

      <form>
        <FormControl>
          <InputLabel>Write a task</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <br />
          <Button
            type="submit"
            onClick={addTask}
            variant="contained"
            color="primary"
            disabled={!input}
          >
            Add Task
          </Button>
        </FormControl>
      </form>

      <ul>
        {tasks.map((task) => (
          <Task task={task} />
        ))}
      </ul>
    </div>
  );
}

export default App;
