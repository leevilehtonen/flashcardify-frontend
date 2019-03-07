import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import { withStyles, Button } from '@material-ui/core';

const styles = theme => ({
  card: {
    marginBottom: theme.spacing(4),
    marginTop: 'auto',
    width: '70vmin',
  },
  textFieldInput: {
    lineHeight: '180%',
    fontSize: '1.8vmax',
    '&:after': {
      borderBottomColor: theme.palette.secondary.main,
    },
    // paddingBottom: theme.spacing(1),
  },
  textFieldRawInput: {
    textAlign: 'center',
  },
  textField: {
    marginTop: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
});

const InputCard = ({ classes, input, setInput, submitForm, buttonText }) => (
  <Card className={classes.card}>
    <CardContent>
      <TextField
        InputProps={{
          className: classes.textFieldInput,
          inputProps: { className: classes.textFieldRawInput },
        }}
        className={classes.textField}
        rowsMax={2}
        value={input}
        onChange={e => setInput(e.target.value)}
        multiline
        fullWidth
      />
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        className={classes.button}
        onClick={() => submitForm()}
      >
        {buttonText}
        <SendIcon className={classes.rightIcon} />
      </Button>
    </CardContent>
  </Card>
);

InputCard.propTypes = {
  classes: PropTypes.shape(styles).isRequired,
  input: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default withStyles(styles)(InputCard);
