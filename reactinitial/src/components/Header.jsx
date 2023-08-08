import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

const Header = ({ handleSort, handleFilter }) => {
  const [filterText, setFilterText] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setFilterText(value);
    handleFilter(value);
  };

  return (
    <Box
    display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Button variant="outlined" onClick={handleSort}>
        Sort by Weight
      </Button>
      <TextField
        label="Filter by name"
        variant="outlined"
        value={filterText}
        onChange={handleChange}
      />
    </Box>
  );
};

export default Header;
