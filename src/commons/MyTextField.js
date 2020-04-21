import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../constants";

const useStyles = makeStyles((theme) => ({
  rounded: {
    borderRadius: 10,
    borderColor: Colors.appRed,
  },
  textField: {
    marginBottom: 20,
  },
}));

const MyTextField = (props) => {
  const classes = useStyles();
  return (
    <TextField
      variant="outlined"
      fullWidth
      inputProps={{
        id: props.id,
        name: props.name,
        required: props.required,
        placeholder: props.placeholder,
        type: props.type,
      }}
      label={props.label}
      multiline={props.multiline}
      rows={props.rows}
      margin={props.margin}
      InputProps={{
        classes: { notchedOutline: classes.rounded },
      }}
      onChange={props.onChange}
      className={classes.textField}
    />
  );
};

export default MyTextField;
