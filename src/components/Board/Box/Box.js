import React, {useState, useRef} from 'react';
import ContentEditable from 'react-contenteditable'
import {Grid, makeStyles} from "@material-ui/core"

const useStyles = makeStyles(() => ({
    box: {
        fontSize: '1.5rem',
        fontFamily: "'Cousine', monospace",
        border: '2px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
  }));

const Box = ({content}) => {
    const [html, setHtml] = useState(content);
    const contentEditable = useRef();

    const classes = useStyles();
    return ( <Grid className={classes.box} md={2}><ContentEditable
              innerRef={contentEditable}
              html={html}
              disabled={false}
              onChange={(event) => setHtml(event.target.value)}
            /></Grid> );
}
 
export default Box;