import * as React from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import Paper from '@mui/material/Paper';
import { classes } from '../../components/DailyCapacity/styles/class';
import Button from '@mui/material/Button';
import { teal, orange, red } from '@mui/material/colors';
import classNames from 'clsx';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Toolbar,
  DateNavigator,
  Appointments,
  DayView,
  ViewSwitcher,
  Resources,
} from '@devexpress/dx-react-scheduler-material-ui';

import { AppointmentContent } from 'components/DailyCapacity/appointmentContent';
import {
  StyledButtonGroup,
  StyledTextField,
  StyledToolbarFlexibleSpace,
} from 'components/DailyCapacity/styles/selector';

import { appointments } from 'components/DailyCapacity/data';

const LOCATIONS = ['Room 1', 'Room 2', 'Room 3'];
const LOCATIONS_SHORT = [1, 2, 3];
const CAPACITY = ['holds 70', 'holds 80', 'holds 100'];

const resources = [
  {
    fieldName: 'location',
    title: 'Location',
    instances: [
      { id: LOCATIONS[0], text: LOCATIONS[0], color: teal },
      { id: LOCATIONS[1], text: LOCATIONS[1], color: orange },
      { id: LOCATIONS[2], text: LOCATIONS[2], color: red },
    ],
  },
];

const Filter = ({ onCurrentFilterChange, currentFilter }) => (
  <StyledTextField
    size="small"
    placeholder="Filter"
    className={classes.textField}
    value={currentFilter}
    onChange={({ target }) => onCurrentFilterChange(target.value)}
    variant="outlined"
    hiddenLabel
    margin="dense"
  />
);

const handleButtonClick = (locationName, locations) => {
  if (locations.indexOf(locationName) > -1) {
    return locations.filter(location => location !== locationName);
  }
  const nextLocations = [...locations];
  nextLocations.push(locationName);
  return nextLocations;
};

const getButtonClass = (locations, location) =>
  locations.indexOf(location) > -1 && classes.selectedButton;

const LocationSelector = ({ onLocationsChange, locations }) => (
  <StyledButtonGroup className={classes.locationSelector}>
    {LOCATIONS.map((location, index) => (
      <Button
        className={classNames(
          classes.button,
          getButtonClass(locations, location)
        )}
        onClick={() =>
          onLocationsChange(handleButtonClick(location, locations))
        }
        key={location}
      >
        <React.Fragment>
          <span className={classes.shortButtonText}>
            {LOCATIONS_SHORT[index]}
          </span>
          <span className={classes.longButtonText}>{location}</span>
          <span className={classes.capacity}>{CAPACITY[index]}</span>
        </React.Fragment>
      </Button>
    ))}
  </StyledButtonGroup>
);

const FlexibleSpace = ({ props }) => (
  <StyledToolbarFlexibleSpace {...props} className={classes.flexibleSpace}>
    <ReduxFilterContainer />
    <ReduxLocationSelector />
  </StyledToolbarFlexibleSpace>
);

const SCHEDULER_STATE_CHANGE_ACTION = 'SCHEDULER_STATE_CHANGE';

const Index2 = ({ data, currentDate, onCurrentDateChange }) => (
  <>
    <h2 style={{ margin: '1em ' }}>Daily Capacity</h2>
    <Paper>
      <Scheduler data={data} height={660}>
        <ViewState
          currentDate={currentDate}
          onCurrentDateChange={onCurrentDateChange}
          viewName="day"
        />
        <DayView startDayHour={9} endDayHour={17} />

        <Appointments appointmentContentComponent={AppointmentContent} />
        <Resources data={resources} />

        <Toolbar flexibleSpaceComponent={FlexibleSpace} />
        <DateNavigator />
        <ViewSwitcher />
      </Scheduler>
    </Paper>
  </>
);

const schedulerInitialState = {
  data: appointments,
  currentDate: '2018-06-27',
  currentViewName: 'day',
  currentFilter: '',
  locations: LOCATIONS,
};

const SchedulerReducer = (state = schedulerInitialState, action) => {
  if (action.type === SCHEDULER_STATE_CHANGE_ACTION) {
    return {
      ...state,
      [action.payload.partialStateName]: action.payload.partialStateValue,
    };
  }
  return state;
};

export const createSchedulerAction = (partialStateName, partialStateValue) => ({
  type: SCHEDULER_STATE_CHANGE_ACTION,
  payload: {
    partialStateName,
    partialStateValue,
  },
});

const mapStateToProps = state => {
  let data = state.data.filter(
    dataItem => state.locations.indexOf(dataItem.location) > -1
  );
  const lowerCaseFilter = state.currentFilter.toLowerCase();
  data = data.filter(
    dataItem =>
      dataItem.title.toLowerCase().includes(lowerCaseFilter) ||
      dataItem.location.toLowerCase().includes(lowerCaseFilter)
  );
  return { ...state, data };
};

const mapDispatchToProps = dispatch => ({
  onCurrentDateChange: currentDate =>
    dispatch(createSchedulerAction('currentDate', currentDate)),

  onCurrentFilterChange: currentFilter =>
    dispatch(createSchedulerAction('currentFilter', currentFilter)),
  onLocationsChange: locations =>
    dispatch(createSchedulerAction('locations', locations)),
});

const ReduxSchedulerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Index2);
const ReduxFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
const ReduxLocationSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationSelector);

const store = createStore(
  SchedulerReducer,

  typeof window !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
);

export default function SchedulerRedux() {
  return (
    <Provider store={store}>
      <ReduxSchedulerContainer />
    </Provider>
  );
}
