import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from '@material-ui/core';
import './Task.css';

function Task(props) {
  return (
    <List className="Task">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.text} secondary="Dummy deadline ⏰" />
      </ListItem>
    </List>
  );
}

export default Task;
