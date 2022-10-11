import { styled } from '@mui/material';
import { classes } from './styles/class';
import { Appointments } from '@devexpress/dx-react-scheduler-material-ui';
const StyledAppointmentsAppointmentContent = styled(
  Appointments.AppointmentContent
)(() => ({
  [`& .${classes.title}`]: {
    fontWeight: 'bold',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  [`& .${classes.textContainer}`]: {
    lineHeight: 1,
    whiteSpace: 'pre-wrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%',
  },
  [`& .${classes.time}`]: {
    display: 'inline-block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  [`& .${classes.text}`]: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  [`& .${classes.container}`]: {
    width: '100%',
  },
}));

export const AppointmentContent = ({ data, formatDate, ...restProps }) => {
  return (
    <StyledAppointmentsAppointmentContent
      {...restProps}
      formatDate={formatDate}
      data={data}
    >
      <div className={classes.container}>
        <div className={classes.title}>{data.title}</div>

        <div className={classes.text}>{data.availability} avail</div>
        <div className={classes.textContainer}>
          <div className={classes.time}>
            {formatDate(data.startDate, { hour: 'numeric', minute: 'numeric' })}
          </div>
          <div className={classes.time}>{' - '}</div>
          <div className={classes.time}>
            {formatDate(data.endDate, { hour: 'numeric', minute: 'numeric' })}
          </div>
          <div className={classes.text}>{data.location}</div>
        </div>
        <span
          style={{ fontSize: '25px', color: '#efefef', marginRight: '10px' }}
        >
          {`${(data.availability * 100) / data.holds}`}%
        </span>
        <span>booked</span>
      </div>
    </StyledAppointmentsAppointmentContent>
  );
};
