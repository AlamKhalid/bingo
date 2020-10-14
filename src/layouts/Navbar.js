import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    header: {
        padding: '20px 0',
        backgroundColor: '#f0e4a1'
    }
});

const Navbar = () => {
    const classes = useStyles();

    return ( <Typography variant="h3" align="center" className={classes.header}>Bingo</Typography> );
}
 
export default Navbar;