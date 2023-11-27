import React, { useEffect } from "react";
import PropTypes from "prop-types";
import SectionHeader from "../components/layouts/SectionHeader";
import ProductGrid from "../components/layouts/ProductGrid";
import { Box } from "@mui/material";
import CategoryCardLink from "../components/common/CategoryCardLink";
import { connect } from "react-redux";
import { getProductsList, getCategoryList } from "../actions/products";
import LoadingBar from "../components/layouts/LoadingBar";

const Homepage = ({
  getProductsList,
  categoryList,
  productList,
  getCategoryList,
  loading,
}) => {
  useEffect(() => {
    getCategoryList();
    getProductsList();
  }, [getCategoryList, getProductsList]);

  return (
    <>
      <SectionHeader heading={"Flash Sale"} />

      {loading && <LoadingBar />}
      {productList && <ProductGrid products={productList} />}

      <SectionHeader heading={"Categories"} />

      {loading && <LoadingBar />}
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
          {categoryList.map((category) => (
            <CategoryCardLink key={category} categoryDetails={category} />
          ))}
        </Box>
      )}
    </>
  );
};

Homepage.propTypes = {
  getProductsList: PropTypes.func.isRequired,
  getCategoryList: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  categoryList: PropTypes.array,
  productList: PropTypes.array,
};

const mapStateToProps = (state) => ({
  loading: state.products.loading,
  categoryList: state.products.categoryList,
  productList: state.products.productList,
});

export default connect(mapStateToProps, { getProductsList, getCategoryList })(
  Homepage
);
