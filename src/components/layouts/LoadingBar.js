import React from "react";
import PropTypes from "prop-types";
import { Box, CircularProgress } from "@mui/material";

const LoadingBar = (props) => {
  return (
    <Box sx={{ display: "flex", width: "100vw", height: "100vh" }}>
      <CircularProgress />
    </Box>
  );
};

LoadingBar.propTypes = {};

export default LoadingBar;
