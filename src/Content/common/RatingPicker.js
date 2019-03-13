import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { yellow } from '@material-ui/core/colors';
import { Star, StarBorder } from '@material-ui/icons';
import { withStyles, IconButton } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  button: {
    color: yellow[600],
    '&:hover': {
      backgroundColor: fade(yellow[600], theme.palette.action.hoverOpacity),
    },
  },
});

const RatingPicker = ({ classes, submitRating }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      {[...Array(5)].map((item, id) => (
        <IconButton
          // eslint-disable-next-line react/no-array-index-key
          key={id + 1}
          className={classes.button}
          onMouseEnter={() => setHoverRating(id + 1)}
          onClick={() => {
            setDisabled(true);
            submitRating(id + 1);
          }}
          disabled={disabled}
          aria-label="Set rating"
        >
          {id + 1 <= hoverRating ? <Star fontSize="large" /> : <StarBorder fontSize="large" />}
        </IconButton>
      ))}
    </div>
  );
};

RatingPicker.propTypes = {
  classes: PropTypes.object.isRequired,
  submitRating: PropTypes.func.isRequired,
};

export default withStyles(styles)(RatingPicker);
