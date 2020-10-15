import React from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => {
  return {
    root: {
      backgroundColor: "#f3f3f3",
      margin: 0,
      color: "#3C1874",
    },
    rootChild: {
      width: "100vw",
      height: "100vh",
      backgroundImage:
        "linear-gradient(90deg, rgba(116,115,133,1) 0%, rgba(218,218,219,1) 35%, rgba(161,168,170,1) 100%), url('https://images.unsplash.com/photo-1490383559880-5003a7baa963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=60')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",

      backgroundPosition: "center center",
      backgroundBlendMode: "saturation",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonRow: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0 4rem",
    },
    buttonGrid: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      backgroundColor: "#932432",
      color: "#f3f3f3",
      padding: "2rem 2rem",
      margin: "2rem 2rem",
      width: "100%",
      fontFamily: "'Cousine', monospace",
      fontSize: "1.5rem",
      borderRadius: "20rem",
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      "&:hover": {
        backgroundColor: "#DE354C",
      },
    },
    mainHeadingGrid: {
      margin: "0 0 2rem 0",
    },
    mainHeadingContainer: {},
    mainHeadingRow: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      color: "#f3f3f3",
      "& > h1": {
        fontSize: "3rem",
        color: "#efedec",

        fontFamily: "'Cousine', monospace",
      },
      "& > h2": {
        fontSize: "6rem",
        color: "#ef4c17",
        fontFamily: "'Pacifico', cursive",
        textShadow:
          "2px 5px 1px rgba(0,0,0,0.2), 0px 2px 3px rgba(255,255,255,0.3)",
        margin: "0 0 1rem 0",
      },
      "& > h3": {
        color: "#efedec",
        fontSize: "2rem",
        fontFamily: "'Cousine', monospace",
      },
    },
  };
});

function Home() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.rootChild}>
        <Grid container className={classes.buttonRow}>
          <Grid item xs={12} className={classes.mainHeadingGrid}>
            <Grid container className={classes.mainHeadingContainer}>
              <Grid item xs={12} className={classes.mainHeadingRow}>
                <h1>Welcome to</h1>
                <h2>Bingo Master</h2>
                <h3>Free to play + multiplayer</h3>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} className={classes.buttonGrid}>
            <Button className={classes.button}>Join a game</Button>
          </Grid>
          <Grid item xs={12} md={6} className={classes.buttonGrid}>
            <Button className={classes.button}>Create a new table</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
