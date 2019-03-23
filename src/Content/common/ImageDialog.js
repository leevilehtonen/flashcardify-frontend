import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  withStyles,
  ButtonBase,
  withMobileDialog,
  GridList,
  GridListTile,
} from '@material-ui/core';

const styles = theme => ({
  text: {
    marginBottom: theme.spacing(1),
  },
  image: {
    width: '100%',
  },
});

const ImageDialog = ({ classes, open, setOpen, fullScreen, images, setImage }) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="form-dialog-completion"
      fullScreen={fullScreen}
      maxWidth="md"
    >
      <DialogTitle id="form-dialog-title" style={{ textAlign: fullScreen ? 'center' : '' }}>
        Choose a banner
      </DialogTitle>
      <DialogContent>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {Object.keys(images).map(image => (
            <GridListTile key={image} cols={1}>
              <ButtonBase
                onClick={() => {
                  setImage(image);
                  setOpen(false);
                }}
              >
                <img src={images[image]} alt={image} className={classes.image} />
              </ButtonBase>
            </GridListTile>
          ))}
        </GridList>
      </DialogContent>
    </Dialog>
  );
};

ImageDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  fullScreen: PropTypes.bool.isRequired,
  images: PropTypes.object.isRequired,
  setImage: PropTypes.func.isRequired,
};

export default withStyles(styles)(withMobileDialog({ breakpoint: 'xs' })(ImageDialog));
