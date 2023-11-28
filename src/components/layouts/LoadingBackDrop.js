import React from "react";
import PropTypes from "prop-types";
import { Backdrop, CircularProgress } from "@mui/material";

const LoadingBackDrop = ({ loading }) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}>
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};

LoadingBackDrop.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default LoadingBackDrop;
