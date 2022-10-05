import { useState } from 'react';
import styled from '@emotion/styled';
import { Typography, TextField } from '@mui/material';

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
});

const Input = styled(TextField)({
  marginBottom: '24px',
});

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

  const handleSubmit = async e => {
    e.preventDefault();
  };

  return (
    <>
      <Typography
        variant="h1"
        sx={{ fontSize: '24px', textAlign: 'left', padding: '20px' }}
      >
        Enter contact details
      </Typography>

      <Form onSubmit={handleSubmit}>
        <Input
          name="Full Name"
          fullWidth
          label="Full Name"
          type="text"
          value={name}
          onChange={handleName}
        />
        <Input
          name="Email"
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={handleEmail}
        />
        <Input
          name="Address"
          fullWidth
          label="Address"
          type="text"
          value={address}
          onChange={handleAddress}
        />
      </Form>
    </>
  );
}