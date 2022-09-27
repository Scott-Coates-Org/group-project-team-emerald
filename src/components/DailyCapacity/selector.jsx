import { FormControl, MenuItem, Select } from '@mui/material';
import { rooms } from './data';
import { classes } from './styles/class';
import { styled } from '@mui/material/styles';
import { Toolbar } from '@devexpress/dx-react-scheduler-material-ui';

const StyledToolbarFlexibleSpace = styled(Toolbar.FlexibleSpace)(() => ({
  [`&.${classes.flexibleSpace}`]: {
    margin: '0 auto 0 0',
  },
}));

const StyledFormControl = styled(FormControl)(({ theme: { spacing } }) => ({
  [`&.${classes.roomSelector}`]: {
    minWidth: 140,
    marginLeft: spacing(2),
    '@media (max-width: 500px)': {
      minWidth: 0,
      fontSize: '0.75rem',
      marginLeft: spacing(0.5),
    },
  },
}));
const StyledRoomSelectorItem = styled('div')(
  ({ theme: { palette, spacing }, color }) => ({
    [`& .${classes.bullet}`]: {
      backgroundColor: color ? color[400] : palette.divider,
      borderRadius: '50%',
      width: spacing(2),
      height: spacing(2),
      marginRight: spacing(2),
      display: 'inline-block',
    },
    [`&.${classes.roomSelectorItem}`]: {
      display: 'flex',
      alignItems: 'center',
    },
    [`& .${classes.roomText}`]: {
      '@media (max-width: 500px)': {
        display: 'none',
      },
    },
  })
);

export const RoomSelectorItem = ({ color, text: resourceTitle }) => {
  const text = resourceTitle || 'All Rooms';

  return (
    <StyledRoomSelectorItem className={classes.roomSelectorItem} color={color}>
      <span className={classes.bullet} />
      <span className={classes.roomText}>{text}</span>
    </StyledRoomSelectorItem>
  );
};

export const RoomSelector = ({ roomChange, room }) => {
  const currentRoom = room > 0 ? rooms[room - 1] : {};
  return (
    <StyledFormControl className={classes.roomSelector} variant="standard">
      <Select
        disableUnderline
        value={room}
        onChange={e => {
          roomChange(e.target.value);
        }}
        renderValue={() => (
          <RoomSelectorItem text={currentRoom.text} color={currentRoom.color} />
        )}
      >
        <MenuItem value={0}>
          <RoomSelectorItem />
        </MenuItem>
        {rooms.map(({ id, color, text }) => (
          <MenuItem value={id} key={id.toString()}>
            <RoomSelectorItem color={color} text={text} />
          </MenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
};

export const FlexibleSpace = ({ room, roomChange, ...restProps }) => (
  <StyledToolbarFlexibleSpace {...restProps} className={classes.flexibleSpace}>
    <RoomSelector room={room} roomChange={roomChange} />
  </StyledToolbarFlexibleSpace>
);
