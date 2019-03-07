import posed from 'react-pose';
import AnimationStatus from './AnimationStatus';

const Box = posed.div({
  [AnimationStatus.ENTER]: {
    rotateY: 0,
    opacity: 1,
    scale: 0.01,
    transition: {
      duration: 0,
    },
  },
  [AnimationStatus.EXIT]: {
    rotateY: 0,
    opacity: 0,
    scale: 2,
    transition: {
      duration: 600,
    },
  },
  [AnimationStatus.SHOW_QUESTION]: {
    rotateY: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 600,
    },
  },
  [AnimationStatus.HIDE_QUESTION]: {
    rotateY: 90,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 600,
      ease: 'easeOut',
    },
  },
  [AnimationStatus.SWAP]: {
    rotateY: -90,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0,
      ease: 'linear',
    },
  },
  [AnimationStatus.SHOW_ANSWER]: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 600,
      ease: 'easeOut',
    },
  },
});

export default Box;
