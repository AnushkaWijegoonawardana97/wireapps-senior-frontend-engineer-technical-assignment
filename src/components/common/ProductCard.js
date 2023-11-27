import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductCard = (props) => {
  return (
    <Card>
      <CardHeader
        title='Shrimp and Chorizo Paella'
        sx={{ textAlign: "center" }}
      />
      <CardMedia
        sx={{ p: 2, objectFit: "contain" }}
        component='img'
        height='160'
        image='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
        alt='Paella dish'
      />
      <CardContent
        sx={{
          backgroundColor: "#FF5E84",
          borderRadius: 2,
          textAlign: "center",
        }}>
        <Typography variant='body1' color='#0E42FD'>
          109.95
        </Typography>
        <Typography variant='caption' color='text.primary'>
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </Typography>
      </CardContent>
    </Card>
  );
};

ProductCard.propTypes = {};

export default ProductCard;
