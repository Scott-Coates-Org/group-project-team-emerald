import {
  green,
  deepOrange,
  lightBlue,
  pink,
  yellow,
} from '@mui/material/colors';
export const data = [
  {
    title: 'Website Re-Design Plan',
    roomId: 1,
    startDate: new Date(2022, 8, 26, 9, 30),
    endDate: new Date(2022, 8, 26, 11, 30),
    id: 0,
  },
  {
    title: 'play day',
    roomId: 2,
    startDate: new Date(2022, 8, 27, 9, 30),
    endDate: new Date(2022, 8, 27, 11, 30),
    id: 1,
  },
  {
    title: 'play day 4',
    roomId: 1,
    startDate: new Date(2022, 8, 27, 11, 30),
    endDate: new Date(2022, 8, 27, 12, 30),
    id: 2,
  },
  {
    title: 'play day 4',
    roomId: 4,
    startDate: new Date(2022, 8, 27, 11, 30),
    endDate: new Date(2022, 8, 27, 12, 30),
    id: 3,
  },
];
export const rooms = [
  { id: 1, text: 'Room 1', capacity: '20', color: green },
  { id: 2, text: 'Room 2', capacity: '15', color: lightBlue },
  { id: 3, text: 'Room 3', capacity: '10', color: deepOrange },
  { id: 4, text: 'Room 4', capacity: '70', color: pink },
  { id: 5, text: 'Room 5', capacity: '40', color: yellow },
];
