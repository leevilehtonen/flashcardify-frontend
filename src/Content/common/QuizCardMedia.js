import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = {
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

const QuizCardMedia = ({ classes, url }) => (
  <CardMedia
    className={classes.media}
    image={url}
    action={
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    }
  />
);

QuizCardMedia.propTypes = {
  classes: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};

export default withStyles(styles)(QuizCardMedia);
