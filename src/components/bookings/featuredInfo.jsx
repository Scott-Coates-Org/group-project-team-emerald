import styled from '@emotion/styled';
import { Box, Grid, Typography } from '@mui/material';

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));
const Header = styled(Typography)(() => ({
  color: 'black',
  fontSize: '18px',
  fontWeight: '300',
}));
const Desc = styled(Typography)(() => ({
  color: 'black',
  fontSize: '30px',
  fontWeight: '400',
}));

export default function FeaturedInfo() {
  return (
    <Grid container spacing={2} columns={16} paddingTop={2} paddingBottom={2}>
      <Grid item xs={4}>
        <Item>
          <Header>Total Sales</Header>
          <Desc>9,450</Desc>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Header>Tickets Sold</Header>
          <Desc>100</Desc>
        </Item>
      </Grid>
    </Grid>
  );
}
