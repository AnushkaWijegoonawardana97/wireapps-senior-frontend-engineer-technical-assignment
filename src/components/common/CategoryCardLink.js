import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const CategoryCardLink = ({ categoryDetails }) => {
  let bgColor = categoryDetails !== "men's clothing" ? "#FF5E84" : "#2BD9AF";

  return (
    <Card>
      <CardActionArea
        component={RouterLink}
        to={categoryDetails.replace(" ", "-").replace("'", "")}>
        <CardContent
          sx={{
            minHeight: "180px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: bgColor,
          }}>
          <Typography
            variant='h4'
            sx={{ color: "text.secondary", textTransform: "capitalize" }}>
            {categoryDetails}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

CategoryCardLink.propTypes = {};

export default CategoryCardLink;
