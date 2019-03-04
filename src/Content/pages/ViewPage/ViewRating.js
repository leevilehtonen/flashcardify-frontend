import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';
import { Star, StarHalf, StarBorder } from '@material-ui/icons';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  star: {
    color: yellow[600],
  },
  text: {
    marginLeft: theme.spacing(1),
    paddingTop: '2px',
  },
});

const ViewRating = ({ classes, rating, total }) => {
  const getFractionStarElement = () => {
    const fraction = rating - Math.min(Math.trunc(rating), 4);
    if (fraction < 0.25) {
      return <StarBorder className={classes.star} fontSize="small" />;
    }
    if (fraction < 0.75) {
      return <StarHalf className={classes.star} fontSize="small" />;
    }
    return <Star className={classes.star} fontSize="small" />;
  };
  return (
    <div className={classes.root}>
      {[...Array(Math.min(Math.trunc(rating), 4))].map((v, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Star className={classes.star} key={i} fontSize="small" />
      ))}
      {getFractionStarElement()}
      {[...Array(Math.max(5 - Math.trunc(rating) - 1, 0))].map((v, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <StarBorder className={classes.star} key={i} fontSize="small" />
      ))}
      <Typography variant="body2" className={classes.text}>
        {rating.toFixed(1)} ({total})
      </Typography>
    </div>
  );
};

ViewRating.propTypes = {
  classes: PropTypes.object.isRequired,
  rating: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default withStyles(styles)(ViewRating);
