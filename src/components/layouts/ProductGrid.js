import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import ProductCard from "../common/ProductCard";

const ProductGrid = ({}) => {
  return (
    <Box
      rowGap={2}
      columnGap={2}
      display='grid'
      gridTemplateColumns={{
        xs: "repeat(2, 1fr)",
        sm: "repeat(4, 1fr)",
      }}
      sx={{ mb: 5 }}>
      {[1, 2, 3, 4].map((product) => (
        <ProductCard key={product} />
      ))}
    </Box>
  );
};

ProductGrid.propTypes = {};

export default ProductGrid;
