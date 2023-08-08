import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const LoadingMask = () => {
  return (
    /*  <Box sx={{ display: "flex" }}>Loading...</Box> */
    <Box  sx={{ display: "flex" }} flexDirection="column">
      <CircularProgress />
      <Typography>Loading...</Typography>
    </Box>
  );
};

export default LoadingMask;