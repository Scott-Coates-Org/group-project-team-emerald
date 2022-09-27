import { Checkbox, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { SignatureBox } from './SignatureBox';

const details = {
  title: 'Sign Waiver',
  content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.Laboriosam,
    aut.Sed libero perferendis natus doloremque tenetur totam assumenda consequatur
    consectetur odio, ducimus labore non rerum quia magnam est.Explicabo sint asperiores
    voluptatum.Perferendis molestias necessitatibus deleniti nam.Quo, magni deserunt soluta
    aspernatur quos praesentium laudantium maiores ex eveniet illo quasi?,`,
  toCheck: 'I have read and agree to the terms and conditions',
  extraDetails:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam',
};

export default function Waiver() {
  const { content, extraDetails, toCheck, title } = details;

  return (
    <>
      <Typography variant="h3" component="div" sx={{ margin: ' 1.5rem 0' }}>
        {title}
      </Typography>

      <Typography variant="p" component="div">
        {content}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox />
        <Typography variant="p" component="div">
          {toCheck}
        </Typography>
      </Box>

      <Typography variant="p" component="div" sx={{ marginBottom: '1.5rem' }}>
        {extraDetails}
      </Typography>

      <SignatureBox />
    </>
  );
}
