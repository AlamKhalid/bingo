import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Box from "./Box/Box";

const useStyles = makeStyles(() => ({
  root: {
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  board: {
    minHeight: '50vh',
  },
  chatBox: {
    border: '2px solid blue',
    minHeight: '50vh',
  },
  bingo: {
    fontSize: '1.7rem',
    color: 'gray',
    fontFamily: "'Pacifico', cursive",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
},
}));

const Board = () => {
  const classes = useStyles();
  const arr = ['B','I','N','G','O'];

  return <Grid container className={classes.root} md={8}>
    <Grid container className={classes.board} md={6}>
    {arr.map(a => <Grid key={a} container><Grid container className={classes.bingo} md={2}>{a}</Grid>{arr.map(a => <Box key={a} content="1" />)}</Grid>)}
  </Grid>
  <Grid container className={classes.chatBox} md={4}>
  </Grid>
  </Grid>

};

export default Board;
