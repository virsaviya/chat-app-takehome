import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import LoadMoreIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles(theme => ({
  align: {
    alignSelf: 'center',
  },
  button: {
    borderRadius: '4px',
    color: '#1C4b81',
  },
}));

function LoadMore({ load }) {
  const classes = useStyles();
  return (
    <div className={classes.align}>
      <IconButton onClick={load} aria-label="load more" className={classes.button}>
         <LoadMoreIcon />
       </IconButton>
    </div>
  );
}

export default LoadMore;
