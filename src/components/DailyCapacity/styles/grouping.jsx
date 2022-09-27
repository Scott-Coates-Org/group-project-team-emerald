import { classes } from './class';
import { alpha } from '@mui/material/styles';
import { rooms } from '../data';

const stylesByRoom = rooms.reduce(
  (acc, room) => ({
    ...acc,
    [`cell${room.text.replace(' ', '')}`]: {
      backgroundColor: alpha(room.color[400], 0.1),
      '&:hover': {
        backgroundColor: alpha(room.color[400], 0.15),
      },
      '&:focus': {
        backgroundColor: alpha(room.color[400], 0.2),
      },
    },
    [`headerCell${room.text.replace(' ', '')}`]: {
      backgroundColor: alpha(room.color[400], 0.1),
      '&:hover': {
        backgroundColor: alpha(room.color[400], 0.1),
      },
      '&:focus': {
        backgroundColor: alpha(room.color[400], 0.1),
      },
    },
  }),
  {}
);

export const groupingStyles = () => ({
  [`&.${classes.cellRoom}`]: stylesByRoom.cellRoom,

  [`&.${classes.headerCellRoom}`]: stylesByRoom.headerCellRoom,
});
