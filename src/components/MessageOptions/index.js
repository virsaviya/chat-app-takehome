import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { Wrapper } from './styled';

const useStyles = makeStyles({
  button: {
    borderRadius: '4px',
    color: '#7DA0E9',
    margin: 0,
    border: '1px solid #c7d6dd',
  },
});

function MessageOptions({ openDialog }) {

  const classes = useStyles();

  return (
    <Wrapper size="large" aria-label="see options" variant="outlined">
      <IconButton
        size="small"
        onClick={() => openDialog('Edit')}
        aria-label="edit message"
        className={classes.button}
      >
         <EditIcon />
       </IconButton>
      <IconButton
        size="small"
        onClick={() => openDialog('Delete')}
        aria-label="delete message"
        className={classes.button}
      >
         <DeleteIcon />
       </IconButton>
    </Wrapper>
  );
}

export default MessageOptions;
