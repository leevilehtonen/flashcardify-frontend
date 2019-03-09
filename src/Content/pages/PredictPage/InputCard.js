import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import { withStyles, Button } from '@material-ui/core';
import PredictionStatus from './PredictionStatus';

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
  },
  textFieldAnswer: {
    caretColor: 'transparent',
    textColor: 'rgba(0,0,0,0.38)',
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

const InputCard = ({ classes, input, setInput, submitForm, predictionStatus }) => (
  <Card className={classes.card}>
    <CardContent>
      <TextField
        InputProps={{
          className: classes.textFieldInput,
          inputProps: { className: classes.textFieldRawInput },
        }}
        className={classNames(classes.textField, {
          [classes.textFieldAnswer]: predictionStatus === PredictionStatus.ANSWER,
        })}
        rowsMax={2}
        value={input}
        onChange={e =>
          predictionStatus === PredictionStatus.QUESTION ? setInput(e.target.value) : null
        }
        onKeyPress={e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            submitForm();
          }
        }}
        multiline
        fullWidth
        autoFocus
      />
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        className={classes.button}
        onClick={() => submitForm()}
      >
        {predictionStatus === PredictionStatus.QUESTION ? 'Submit' : 'Next'}
        <SendIcon className={classes.rightIcon} />
      </Button>
    </CardContent>
  </Card>
);

InputCard.propTypes = {
  classes: PropTypes.shape(styles).isRequired,
  input: PropTypes.string.isRequired,
  predictionStatus: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default withStyles(styles)(InputCard);
