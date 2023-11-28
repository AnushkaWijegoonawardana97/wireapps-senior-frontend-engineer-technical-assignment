import { Box } from "@mui/material";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCategoryList, getProductsList } from "../actions/products";
import CategoryCardLink from "../components/common/CategoryCardLink";
import LoadingBackDrop from "../components/layouts/LoadingBackDrop";
import ProductGrid from "../components/layouts/ProductGrid";
import SectionHeader from "../components/layouts/SectionHeader";

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
      {loading && <LoadingBackDrop loading={loading}/>}
      <SectionHeader heading={"Flash Sale"} />

      {productList && <ProductGrid products={productList} />}

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
