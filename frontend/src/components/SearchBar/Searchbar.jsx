import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";

const Searchbar = ({ handleSearch }) => {
  return (
    <Box className="searchbar">
      <TextField
        fullWidth
        size="small"
        onChange={handleSearch}
        id="outlined-basic"
        label="Search"
        variant="outlined"
        sx={{
          input: { color: "white" },
          backgroundColor: "#121212",
          label: { color: "white" },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button sx={{ color: "white" }}>-</Button>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default Searchbar;
