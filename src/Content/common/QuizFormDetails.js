import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  withStyles,
  List,
  ListItem,
  Card,
  CardHeader,
  Divider,
} from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing(3),
  },
  textField: {
    width: '100%',
  },
});

const QuizFormDetails = ({ classes, cardTitle, title, setTitle, description, setDescription }) => {
  return (
    <Card className={classes.root}>
      <CardHeader title={cardTitle} />
      <Divider />
      <List>
        <ListItem>
          <TextField
            id="outlined-dense"
            label="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className={classes.textField}
            variant="outlined"
          />
        </ListItem>
        <ListItem>
          <TextField
            id="outlined-dense"
            label="Description"
            multiline
            rows="4"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className={classes.textField}
            variant="outlined"
          />
        </ListItem>
      </List>
    </Card>
  );
};

QuizFormDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  cardTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
};

export default withStyles(styles)(QuizFormDetails);
