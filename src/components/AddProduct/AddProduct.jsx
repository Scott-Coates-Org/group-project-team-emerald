import styled from '@emotion/styled';
import { useState } from 'react';
import {
  Box,
  Button,
  InputAdornment,
  Typography,
  TextField,
} from '@mui/material';
import SelectField from '../common/Select';
import {
  createCollection,
  getCollection,
  uploadImage,
} from '../../utils/firebase';
import { useEffect } from 'react';

const Container = styled(Box)({
  padding: '20px',
  background: 'grey',
});

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  border: 'solid black 4px',
  borderRadius: '4px',
  padding: '40px',
});

const Input = styled(TextField)({
  marginBottom: '24px',
});

export default function AddProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [type, setType] = useState('');
  const [room, setRoom] = useState('');
  const [roomOption, setRoomOption] = useState([]);
  const [duration, setDuration] = useState('');
  const [photo, setPhoto] = useState();

  //Get collection of room for Select Options
  useEffect(() => {
    async function getData() {
      const data = await getCollection('rooms');
      if (data.length) {
        const rooms = data.map(({ id, name }) => ({
          name,
          value: id,
        }));
        setRoomOption(rooms);
      }
    }
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await createCollection('products', {
      name,
      description,
      price,
      type,
      room,
      duration,
      photo: await uploadImage(photo),
    });

    res ? console.log('Room Created') : console.log('Fail to Create Room');
  };

  const onFileUpload = (e) => {
    const file = e.target.files;
    if (file.length === 0) return;
    if (file) setPhoto(file[0]);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleDuration = (e) => {
    setDuration(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleRoom = (e) => {
    setRoom(e.target.value);
  };

  return (
    <Container>
      <Typography
        variant="h1"
        sx={{ fontSize: '24px', textAlign: 'left', padding: '20px' }}
      >
        Add Product
      </Typography>
      <Form onSubmit={handleSubmit}>
        <Input
          name="Product Name"
          fullWidth
          label="Product Name"
          type="text"
          value={name}
          onChange={handleName}
        />
        <Input
          name="Product Description"
          fullWidth
          label="Product Description"
          type="text"
          value={description}
          onChange={handleDescription}
        />
        <Input
          name="Price"
          fullWidth
          label="Price"
          type="number"
          value={price}
          onChange={handlePrice}
        />
        <SelectField
          id="productType"
          name="Product Type"
          value={type}
          options={[
            { name: 'bus', value: 'yellow' },
            { name: 'bus', value: 'yellow' },
            { name: 'bus', value: 'yellow' },
          ]}
          onChange={handleType}
        />
        <SelectField
          id="room"
          name="Room"
          value={room}
          options={roomOption}
          onChange={handleRoom}
        />
        <SelectField
          id="duration"
          name="Duration"
          value={duration}
          options={[
            { name: '60 min', value: 60 },
            { name: '90 min', value: 90 },
            { name: '120 min', value: 120 },
            { name: 'All Day', value: 720 },
          ]}
          onChange={handleDuration}
        />
        <Input
          disabled
          label={'photo'}
          fullWidth
          value={!photo ? 'No File SelectFielded' : photo.name}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Button color="primary" variant="contained" component="label">
                  <Typography> Add Photo </Typography>
                  <input
                    accept="image/png, image/gif, image/jpeg"
                    style={{ display: 'none' }}
                    type="file"
                    onChange={(e) => onFileUpload(e)}
                  />
                </Button>
              </InputAdornment>
            ),
          }}
        />
        <Button type="submit" variant="outlined" sx={{ maxWidth: '240px' }}>
          Add Product
        </Button>
      </Form>
    </Container>
  );
}
