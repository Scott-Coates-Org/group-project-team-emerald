import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function SelectField({ id, name, value, options, onChange }) {
  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);
  return (
    <FormControl fullWidth sx={{ marginBottom: "24px" }}>
      <InputLabel id="">{name}</InputLabel>
      <Select
        key={id + "-select"}
        labelId={id + "-label-select"}
        id="demo-simple-select"
        value={value}
        label={capitalizeFirstLetter(id)}
        onChange={onChange}
      >
        {options?.map(({ value, name }, index) => {
          return (
            <MenuItem key={name} value={value} sx={{ textAlign: "left" }}>
              {capitalizeFirstLetter(name)}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
