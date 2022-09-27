import * as React from 'react';
import {
  ViewState,
  GroupingState,
  IntegratedGrouping,
} from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
  Toolbar,
  DateNavigator,
  AppointmentTooltip,
  AppointmentForm,
  GroupingPanel,
  Resources,
} from '@devexpress/dx-react-scheduler-material-ui';
import { connectProps } from '@devexpress/dx-react-core';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import classNames from 'clsx';

import { rooms } from './data';
import { data as tasks } from './data';
import { TooltipContent } from './tooltip';
import { classes } from './styles/class';
import { groupingStyles } from './styles/grouping';
import { FlexibleSpace } from './selector';

const grouping = [
  {
    resourceName: 'roomId',
  },
];

const filterTasks = (items, roomId) =>
  items.filter(task => !roomId || task.roomId === roomId);

const StyledDayViewDayScaleCell = styled(DayView.DayScaleCell)(groupingStyles);

const StyledGroupingPanelCell = styled(GroupingPanel.Cell)(groupingStyles);

const StyledDayViewTimeTableCell = styled(DayView.TimeTableCell)(
  groupingStyles
);

const DayViewTimeTableCell = ({ groupingInfo, ...restProps }) => {
  const groupId = groupingInfo[0].id;

  return (
    <>
      <StyledDayViewTimeTableCell
        className={classNames({
          [classes.cellRoom]: groupId === 1,
        })}
        groupingInfo={groupingInfo}
        {...restProps}
      />
    </>
  );
};
const DayViewDayScaleCell = ({ groupingInfo, ...restProps }) => {
  const groupId = groupingInfo[0].id;
  return (
    <StyledDayViewDayScaleCell
      className={classNames({
        [classes.headerCellRoom]: groupId === 1,
      })}
      groupingInfo={groupingInfo}
      {...restProps}
    />
  );
};

const GroupingPanelCell = ({ group, ...restProps }) => {
  const groupId = group.id;

  return (
    <StyledGroupingPanelCell
      className={classNames({
        [classes.headerCellRoom]: groupId === 1,
      })}
      group={group}
      {...restProps}
    />
  );
};

export default class DailyCapacity extends React.PureComponent {
  constructor(props) {
    super(props);
    const today = new Date();
    this.state = {
      currentDate: today,
      currentViewName: 'Day',
      data: tasks,
      currentRoom: 0,
      resources: [
        {
          fieldName: 'roomId',
          title: 'Rooms',
          instances: rooms,
        },
      ],
    };
    this.currentViewNameChange = currentViewName => {
      this.setState({ currentViewName });
    };
    this.currentDateChange = currentDate => {
      this.setState({ currentDate });
    };
    this.roomChange = value => {
      const { resources } = this.state;
      const nextResources = [
        {
          ...resources[0],
          instances: value > 0 ? [rooms[value - 1]] : rooms,
        },
      ];

      this.setState({ currentRoom: value, resources: nextResources });
    };
    this.flexibleSpace = connectProps(FlexibleSpace, () => {
      const { currentRoom } = this.state;
      return {
        room: currentRoom,
        roomChange: this.roomChange,
      };
    });
  }

  componentDidUpdate() {
    this.flexibleSpace.update();
  }

  render() {
    const { data, currentDate, currentViewName, currentRoom, resources } =
      this.state;

    return (
      <Paper>
        <Scheduler data={filterTasks(data, currentRoom)} height={660}>
          <ViewState
            currentDate={currentDate}
            currentViewName={currentViewName}
            onCurrentViewNameChange={this.currentViewNameChange}
            onCurrentDateChange={this.currentDateChange}
          />
          <GroupingState
            grouping={grouping}
            groupOrientation={() => 'Vertical'}
          />

          <DayView
            startDayHour={9}
            endDayHour={19}
            timeTableCellComponent={DayViewTimeTableCell}
            dayScaleCellComponent={DayViewDayScaleCell}
            intervalCount={1}
          />

          <Appointments />
          <Resources data={resources} />
          <IntegratedGrouping />

          <GroupingPanel cellComponent={GroupingPanelCell} />
          <Toolbar flexibleSpaceComponent={this.flexibleSpace} />
          <DateNavigator />
          <AppointmentTooltip
            contentComponent={TooltipContent}
            showOpenButton
            showCloseButton
          />
          <AppointmentForm />
        </Scheduler>
      </Paper>
    );
  }
}
