import React, { useEffect } from "react";
import PropTypes from "prop-types";
import SectionHeader from "../components/layouts/SectionHeader";
import ProductGrid from "../components/layouts/ProductGrid";
import { Box } from "@mui/material";
import CategoryCardLink from "../components/common/CategoryCardLink";
import { connect } from "react-redux";
import { getProductsList } from "../actions/products";

const Homepage = ({ getProductsList, categoryList, productList }) => {
  useEffect(() => {
    getProductsList();
  }, [getProductsList, productList]);

  return (
    <>
      <SectionHeader heading={"Flash Sale"} />

      <ProductGrid />

      <SectionHeader heading={"Categories"} />

      {categoryList && (
        <Box
          rowGap={2}
          columnGap={2}
          display='grid'
          gridTemplateColumns={{
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
          }}
          sx={{ mb: 5 }}>
          {categoryList.map((cat) => (
            <CategoryCardLink key={cat} />
          ))}
        </Box>
      )}
    </>
  );
};

Homepage.propTypes = {
  getProductsList: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  categoryList: PropTypes.array,
  productList: PropTypes.array,
};

const mapStateToProps = (state) => ({
  loading: state.products.loading,
  categoryList: state.products.categoryList,
  productList: state.products.productList,
});

export default connect(mapStateToProps, { getProductsList })(Homepage);
