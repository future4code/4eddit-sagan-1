import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
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
    <AppBar color='primary' position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          4eddit-01
        </Typography>
        <Button variant="outlined" color="inherit">{props.btnText}</Button>
      </Toolbar>
    </AppBar>
  )
}

export default ButtonAppBar