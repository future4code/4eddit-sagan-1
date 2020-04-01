import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { sizing } from '@material-ui/system'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: "100%",
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
      fullWidth
      type={props.type}
      required={props.required}
      value={props.value}
      onChange={props.onChange}
      />
  );
}

export function MyTextArea(props) {
  const classes = useStyles();

  return (
    
      <TextField 
      label={props.label} 
      variant="outlined"
      multiline
      rows="5"
      name={props.name}
      fullWidth
      type={props.type}
      required={props.required}
      value={props.value}
      onChange={props.onChange}
      />
  );
}