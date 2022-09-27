import Grid from '@mui/material/Grid';
import PriorityHigh from '@mui/icons-material/PriorityHigh';
import LowPriority from '@mui/icons-material/LowPriority';
import Lens from '@mui/icons-material/Lens';
import Event from '@mui/icons-material/Event';
import AccessTime from '@mui/icons-material/AccessTime';
import classNames from 'clsx';
import { classes } from './styles/class';
import { styled } from '@mui/material/styles';
const StyledTooltipContent = styled('div')(
  ({ theme: { spacing, typography, palette }, color }) => ({
    [`&.${classes.content}`]: {
      padding: spacing(3, 1),
      paddingTop: 0,
      backgroundColor: palette.background.paper,
      boxSizing: 'border-box',
      width: '400px',
    },
    [`& .${classes.contentContainer}`]: {
      paddingBottom: spacing(1.5),
    },
    [`& .${classes.text}`]: {
      ...typography.body2,
      display: 'inline-block',
    },
    [`& .${classes.title}`]: {
      ...typography.h6,
      color: palette.text.secondary,
      fontWeight: typography.fontWeightBold,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'normal',
    },
    [`& .${classes.icon}`]: {
      verticalAlign: 'middle',
    },
    [`& .${classes.contentItemIcon}`]: {
      textAlign: 'center',
    },
    [`& .${classes.grayIcon}`]: {
      color: palette.action.active,
    },
    [`& .${classes.colorfulContent}`]: {
      color: color[300],
    },
    [`& .${classes.lens}`]: {
      width: spacing(4.5),
      height: spacing(4.5),
      verticalAlign: 'super',
    },
    [`& .${classes.textCenter}`]: {
      textAlign: 'center',
    },
    [`& .${classes.dateAndTitle}`]: {
      lineHeight: 1.1,
    },
    [`& .${classes.titleContainer}`]: {
      paddingBottom: spacing(2),
    },
    [`& .${classes.container}`]: {
      paddingBottom: spacing(1.5),
    },
  })
);

export const TooltipContent = ({
  appointmentData,
  formatDate,
  appointmentResources,
  // #FOLD_BLOCK
}) => {
  const resource = appointmentResources[0];
  let icon = <LowPriority className={classes.icon} />;
  if (appointmentData.roomId === 2) {
    icon = <Event className={classes.icon} />;
  }
  if (appointmentData.roomId === 3) {
    icon = <PriorityHigh className={classes.icon} />;
  }
  return (
    <StyledTooltipContent className={classes.content} color={resource.color}>
      <Grid
        container
        alignItems="flex-start"
        className={classes.titleContainer}
      >
        <Grid item xs={2} className={classNames(classes.textCenter)}>
          <Lens className={classNames(classes.lens, classes.colorfulContent)} />
        </Grid>
        <Grid item xs={10}>
          <div>
            <div className={classNames(classes.title, classes.dateAndTitle)}>
              {appointmentData.title}
            </div>
            <div className={classNames(classes.text, classes.dateAndTitle)}>
              {formatDate(appointmentData.startDate, {
                day: 'numeric',
                weekday: 'long',
              })}
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container alignItems="center" className={classes.contentContainer}>
        <Grid item xs={2} className={classes.textCenter}>
          <AccessTime className={classes.icon} />
        </Grid>
        <Grid item xs={10}>
          <div className={classes.text}>
            {`${formatDate(appointmentData.startDate, {
              hour: 'numeric',
              minute: 'numeric',
            })}
                - ${formatDate(appointmentData.endDate, {
                  hour: 'numeric',
                  minute: 'numeric',
                })}`}
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        key={`${resource.fieldName}_${resource.id}`}
      >
        <Grid
          className={classNames(
            classes.contentItemIcon,
            classes.icon,
            classes.colorfulContent
          )}
          item
          xs={2}
        >
          {icon}
        </Grid>
        <Grid item xs={10}>
          <span className={classNames(classes.text, classes.colorfulContent)}>
            {resource.text}
          </span>
        </Grid>
      </Grid>
    </StyledTooltipContent>
  );
};
