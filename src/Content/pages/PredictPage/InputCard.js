import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import { withStyles, Button } from '@material-ui/core';

const styles = theme => ({
  card: {
    marginBottom: 'auto',
    marginTop: 'auto',
    width: '70vmin',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
  },
  textFieldInput: {
    lineHeight: '180%',
    fontSize: '1.8vmax',
    '&:after': {
      borderBottomColor: theme.palette.secondary.main,
    },
    paddingBottom: theme.spacing(1),
  },
  textFieldRawInput: {
    textAlign: 'center',
  },
  textField: {
    marginTop: 'auto',
  },
  button: {
    marginTop: theme.spacing(1),
    width: '100%',
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
});

const InputCard = ({ classes, input, setInput, submit, buttonText }) => (
  <Card className={classes.card}>
    <CardContent className={classes.cardContent}>
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
        className={classes.button}
        onClick={() => submit()}
      >
        {buttonText}
        <SendIcon className={classes.rightIcon} />
      </Button>
    </CardContent>
  </Card>
);

InputCard.propTypes = {
  classes: PropTypes.shape(styles).isRequired,
};

export default withStyles(styles)(InputCard);
