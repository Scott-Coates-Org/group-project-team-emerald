import { Box } from '@mui/material';
import WaiverPage from '../../../components/WaiverPage/WaiverPage';

export default function Checkout() {
  return (
    <Box>
      {/* To be Removed */}
      {/* Just for view */}
      <WaiverPage details= {details} btn={{first:'Back', second: 'Continue'}} />
    </Box>
  );
}

//to be removed
const details = {
  title: 'Sign Waiver',
  content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.Laboriosam,
    aut.Sed libero perferendis natus doloremque tenetur totam assumenda consequatur
    consectetur odio, ducimus labore non rerum quia magnam est.Explicabo sint asperiores
    voluptatum.Perferendis molestias necessitatibus deleniti nam.Quo, magni deserunt soluta
    aspernatur quos praesentium laudantium maiores ex eveniet illo quasi?,`,
  toCheck: 'I have read and agree to the terms and conditions',
  extraDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam',
};
