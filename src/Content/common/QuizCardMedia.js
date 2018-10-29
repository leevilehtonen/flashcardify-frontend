import React from 'react';
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

export default withStyles(styles)(QuizCardMedia);
