import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductCard = ({ productDetails }) => {
  let bgColor =
    productDetails?.category !== "men's clothing" ? "#FF5E84" : "#2BD9AF";

  return (
    <Card>
      <CardHeader
        title={
          productDetails?.title.length > 50
            ? `${productDetails?.title.substring(0, 50)}...`
            : productDetails?.title
        }
        sx={{ textAlign: "center", minHeight: "68px" }}
      />
      <CardMedia
        sx={{ p: 2, objectFit: "contain" }}
        component='img'
        height='160'
        image={productDetails?.image}
        alt={productDetails?.title}
      />
      <CardContent
        sx={{
          backgroundColor: bgColor,
          borderRadius: 2,
          textAlign: "center",
          minHeight: "180px",
        }}>
        <Typography variant='body1' color='#0E42FD'>
          Rs {productDetails?.price}
        </Typography>
        <Typography variant='caption' color='text.primary'>
          {productDetails?.description.length > 240
            ? `${productDetails?.description.substring(0, 240)}...`
            : productDetails?.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

ProductCard.propTypes = {
  productDetails: PropTypes.array.isRequired,
};

export default ProductCard;
