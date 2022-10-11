import { useState } from 'react';
import { Box, Typography, FormControl, InputLabel, Input } from '@mui/material';

export default function ContactDetail() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleName = e => {
    setName(e.target.value);
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handleAddress = e => {
    setAddress(e.target.value);
  };

  return (
    <>
      <Typography variant="bolder">Enter contact details</Typography>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl variant="standard" fullWidth>
          <InputLabel>
            Full Name <span className="required">*</span>
          </InputLabel>
          <Input value={name} onChange={handleName} />
        </FormControl>

        <FormControl variant="standard" fullWidth>
          <InputLabel>
            Email <span className="required">*</span>
          </InputLabel>
          <Input value={email} onChange={handleEmail} />
        </FormControl>

        <FormControl variant="standard" fullWidth>
          <InputLabel>
            Address <span className="required">*</span>
          </InputLabel>
          <Input value={address} onChange={handleAddress} />
        </FormControl>
      </Box>
    </>
  );
}
