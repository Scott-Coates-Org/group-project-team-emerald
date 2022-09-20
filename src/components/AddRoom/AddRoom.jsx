import { useState } from "react";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  InputAdornment,
  Typography,
  TextField,
} from "@mui/material";
import { createCollection, uploadImage } from "../../utils/firebase";

const Container = styled(Box)({
  padding: "20px",
  background: "grey",
});

const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  border: "solid black 4px",
  borderRadius: "4px",
  padding: "40px",
});

const Input = styled(TextField)({
  marginBottom: "24px",
});

export default function AddRoom() {
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await createCollection("rooms", {
      name,
      capacity,
      image: await uploadImage(file),
    });

    res ? console.log("room created") : console.log("failed to create room");
  };

  const onFileUpload = (e) => {
    const file = e.target.files;
    if (file.length === 0) return;
    if (file) setFile(file[0]);
  };

  const handleRoomName = (e) => {
    setName(e.target.value);
  };

  const handleCapacity = (e) => {
    const input = parseInt(e.target.value);
    const numberValidation = (num) => {
      if (num < 0) return 0;
      else if (num > 1000) return 1000;
      return num;
    };
    setCapacity(numberValidation(input));
  };

  return (
    <Container>
      <Typography
        variant="h1"
        sx={{ fontSize: "24px", textAlign: "left", padding: "20px" }}
      >
        Add Room
      </Typography>
      <Form onSubmit={handleSubmit}>
        <Input
          name="RoomName"
          fullWidth
          label="Room Name"
          type="text"
          value={name}
          onChange={handleRoomName}
        />
        <Input
          name="Capacity"
          fullWidth
          label="Capacity"
          type="number"
          value={capacity}
          onChange={handleCapacity}
        />
        <Input
          disabled
          label={"photo"}
          fullWidth
          value={!file ? "No File Selected" : file.name}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Button color="primary" variant="contained" component="label">
                  <Typography> Select File</Typography>
                  <input
                    accept="image/png, image/gif, image/jpeg"
                    style={{ display: "none" }}
                    type="file"
                    onChange={(e) => onFileUpload(e)}
                  />
                </Button>
              </InputAdornment>
            ),
          }}
        />
        <Button type="submit" variant="outlined" sx={{ maxWidth: "240px" }}>
          Add Room
        </Button>
      </Form>
    </Container>
  );
}
