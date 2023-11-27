import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

const CategoryCardLink = (props) => {
  return (
    <Card>
      <CardActionArea component={RouterLink} to='/mens-clothing'>
        <CardContent
          sx={{
            minHeight: "180px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#2BD9AF",
          }}>
          <Typography variant='h4' sx={{ color: "text.secondary" }}>
            Category Name
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

CategoryCardLink.propTypes = {};

export default CategoryCardLink;
