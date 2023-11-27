import React from "react";
import PropTypes from "prop-types";
import { Box, Stack, Typography } from "@mui/material";

const SectionHeader = ({ heading }) => {
  return (
    <Box sx={{ mb: 5 }}>
      <Stack direction='row' alignItems='center'>
        <Box sx={{ flexGrow: 1 }}>
          {heading && (
            <Typography variant='h4' gutterBottom>
              {heading}
            </Typography>
          )}
        </Box>
      </Stack>
    </Box>
  );
};

SectionHeader.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default SectionHeader;
