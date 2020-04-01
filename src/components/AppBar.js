import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    height: 64,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function ButtonAppBar(props) {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} color='primary' position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {props.pageName}
        </Typography>
        <Button variant="outlined" color="inherit" onClick={props.onClick}>{props.btnText}</Button>
      </Toolbar>
    </AppBar>
  )
}

export default ButtonAppBar