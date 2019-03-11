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
  MenuItem,
  Switch,
  FormControlLabel,
} from '@material-ui/core';
import Difficulty from '../../misc/Difficulty';

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing(3),
  },
  headerAction: {
    marginRight: theme.spacing(2),
    marginTop: 0,
  },
  textField: {
    width: '100%',
  },
});

const QuizFormDetails = ({
  classes,
  cardTitle,
  title,
  setTitle,
  description,
  setDescription,
  difficulty,
  setDifficulty,
  isPublic,
  setIsPublic,
}) => {
  return (
    <Card className={classes.root}>
      <CardHeader
        title={cardTitle}
        classes={{ action: classes.headerAction }}
        action={
          <FormControlLabel
            control={
              <Switch
                checked={isPublic}
                onChange={e => setIsPublic(e.target.checked)}
                value="visibility"
                color="primary"
              />
            }
            label="Public"
            labelPlacement="start"
          />
        }
      />
      <Divider />
      <List>
        <ListItem>
          <TextField
            id="input-title"
            label="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className={classes.textField}
            variant="outlined"
          />
        </ListItem>
        <ListItem>
          <TextField
            id="input-description"
            label="Description"
            multiline
            rows="4"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className={classes.textField}
            variant="outlined"
          />
        </ListItem>
        <ListItem>
          <TextField
            id="select-difficulty"
            select
            label="Difficulty"
            className={classes.textField}
            value={difficulty}
            onChange={e => setDifficulty(e.target.value)}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            variant="outlined"
          >
            {Object.values(Difficulty).map(diff => (
              <MenuItem key={diff} value={diff}>
                {diff}
              </MenuItem>
            ))}
          </TextField>
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
  difficulty: PropTypes.string.isRequired,
  setDifficulty: PropTypes.func.isRequired,
  isPublic: PropTypes.bool.isRequired,
  setIsPublic: PropTypes.func.isRequired,
};

export default withStyles(styles)(QuizFormDetails);
