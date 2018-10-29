import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import green from '@material-ui/core/colors/green';

const styles = {
  avatar: {
    backgroundColor: green.A400,
  },
};

const getUsernameLetters = username => {
  if (!username.includes(' ')) {
    return username.substring(0, 2).toUpperCase();
  }
  const letters = username
    .split(' ')
    .map(names => names.charAt(0))
    .join('');
  return letters.substring(0, Math.min(letters.length, 2));
};

const QuizCardHeader = ({ classes, username, date }) => (
  <CardHeader
    avatar={
      <Avatar aria-label="Recipe" className={classes.avatar}>
        {getUsernameLetters(username)}
      </Avatar>
    }
    action={
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    }
    title={username}
    subheader={date}
  />
);

export default withStyles(styles)(QuizCardHeader);
