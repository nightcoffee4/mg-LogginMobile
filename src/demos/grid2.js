import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const stillKullan = makeStyles((tema) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#CCCCCC',
    '& > *': {
      //margin: theme.spacing(1),
      width: tema.spacing(16),
      height: tema.spacing(16),
         
    },
  },
}))

export default function SimplePaper() {
  const classes = stillKullan();

  return (
    <div className={classes.root}>
      <Paper variant="outlined" square />
      <Paper variant="outlined" square />
    </div>
  );
}