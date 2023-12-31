import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import ProductCard from "../common/ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <Box
      rowGap={2}
      columnGap={2}
      display='grid'
      gridTemplateColumns={{
        xs: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      sx={{ mb: 5 }}>
      {products.map((product) => (
        <ProductCard key={product?.title} productDetails={product} />
      ))}
    </Box>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductGrid;
