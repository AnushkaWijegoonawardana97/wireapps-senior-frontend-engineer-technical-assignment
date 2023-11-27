import React from "react";
import PropTypes from "prop-types";
import SectionHeader from "../components/layouts/SectionHeader";
import ProductGrid from "../components/layouts/ProductGrid";
import { Box } from "@mui/material";
import CategoryCardLink from "../components/common/CategoryCardLink";

const Homepage = (props) => {
  return (
    <>
      <SectionHeader heading={"Flash Sale"} />
      <ProductGrid />
      <SectionHeader heading={"Categories"} />
      <Box
        rowGap={2}
        columnGap={2}
        display='grid'
        gridTemplateColumns={{
          xs: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
        }}
        sx={{ mb: 5 }}>
        {[1, 2].map((cat) => (
          <CategoryCardLink key={cat} />
        ))}
      </Box>
    </>
  );
};

Homepage.propTypes = {};

export default Homepage;
