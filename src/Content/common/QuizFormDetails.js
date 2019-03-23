import React, { useState } from 'react';
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
  ButtonBase,
  Typography,
} from '@material-ui/core';
import Difficulty from '../../misc/Difficulty';
import { importImages } from '../../misc/utils';
import ImageDialog from './ImageDialog';

const images = importImages();

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
  avatar: {
    minWidth: '100px',
    width: '10vw',
    maxWidth: '200px',
    marginRight: theme.spacing(2),
    borderRadius: '4px',
  },

  avatarImage: {
    width: '100%',
    borderRadius: '4px',
  },
  avatarText: {
    color: 'white',
    position: 'absolute',
    zIndex: 1,
    textShadow: '0 0 100px black, 0 0 20px black',
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
  image,
  setImage,
}) => {
  const [imageDialogOpen, setImageDialogOpen] = useState(false);

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
          <ButtonBase className={classes.avatar} onClick={() => setImageDialogOpen(true)}>
            <img
              aria-label="icon"
              src={images[image]}
              className={classes.avatarImage}
              alt={image}
            />
            <Typography variant="button" className={classes.avatarText}>
              Select image
            </Typography>
          </ButtonBase>
          <TextField
            id="input-title"
            label="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className={classes.textField}
            variant="outlined"
          />
        </ListItem>
        <ImageDialog
          open={imageDialogOpen}
          setOpen={setImageDialogOpen}
          images={images}
          setImage={setImage}
        />
        <ListItem>
          <TextField
            id="input-description"
            label="Description"
            multiline
            rows="8"
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
  image: PropTypes.string.isRequired,
  setImage: PropTypes.func.isRequired,
};

export default withStyles(styles)(QuizFormDetails);
