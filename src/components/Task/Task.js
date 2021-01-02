import React, { useState } from 'react';
import { List, ListItem, ListItemText, Modal } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';

import './Task.css';
import db from '../../firebase';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'ablosute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Task(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Modal open={open} onClose={(event) => setOpen(false)}>
        <div>
          <h1>I am a modal</h1>
          <button>sss</button>
        </div>
      </Modal>
      <List className="Task">
        <ListItem>
          <ListItemText
            primary={props.task.task}
            secondary="Dummy deadline ⏰"
          />
          <button onClick={handleOpen}>Edit</button>
          <DeleteForeverIcon
            className="DeleteForeverIcon"
            onClick={(event) =>
              db.collection('tasks').doc(props.task.id).delete()
            }
          />
        </ListItem>
      </List>
    </div>
  );
}

export default Task;
