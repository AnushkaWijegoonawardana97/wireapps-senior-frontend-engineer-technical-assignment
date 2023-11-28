import { Box, CircularProgress } from "@mui/material";
import React from "react";

const LoadingBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <CircularProgress color='#0E0E0E' />
    </Box>
  );
};

export default LoadingBar;
