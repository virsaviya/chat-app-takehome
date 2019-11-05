import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import SortIcon from '@material-ui/icons/Sort';

import { Wrapper } from './styled';

const useStyles = makeStyles(theme => ({
  button: {
    borderRadius: '4px',
    color: '#1C4b81',
  }
}));

function Filters({ sort }) {
  const classes = useStyles();
  return (
    <Wrapper>
      <IconButton onClick={sort} aria-label="delete" className={classes.button}>
         <SortIcon />
       </IconButton>
    </Wrapper>
  );
}

export default Filters;
