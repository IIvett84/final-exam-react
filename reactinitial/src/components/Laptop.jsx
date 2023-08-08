import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

const Laptop = ({ name, details }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggle = () => {
    setShowDetails(!showDetails);
  };
  return (
    <Box
      component={"main"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        width: "clamp(280px, 26vw, 480px)",
        border: 1,
        padding: "1rem",
        borderRadius: "1rem",
      }}
    >
      <Typography>{name}</Typography>
      {showDetails ? <Typography>{details}</Typography> : null}
      <Button variant="outlined" onClick={toggle}>
        {showDetails ? "Show less" : "Show more"}
      </Button>
    </Box>
  );
};

export default Laptop;