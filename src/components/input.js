import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function MyTextField(props) {
  const classes = useStyles();

  return (
    
      <TextField 
      label={props.label} 
      variant="outlined"
      name={props.name}
      type={props.type}
      required={props.required}
      value={props.value}
      
      />
  );
}