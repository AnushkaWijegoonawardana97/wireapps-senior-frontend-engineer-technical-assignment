import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProductByCategory } from "../actions/products";
import ProductGrid from "../components/layouts/ProductGrid";
import SectionHeader from "../components/layouts/SectionHeader";
import LoadingBar from "../components/layouts/LoadingBar";

const CategoryPage = ({
  categoryName,
  getProductByCategory,
  productByCategory,
  loading,
}) => {
  useEffect(() => {
    getProductByCategory(categoryName);
  }, [getProductByCategory]);

  return (
    <>
      <SectionHeader heading={categoryName} />
      {loading && <LoadingBar />}
      {productByCategory && <ProductGrid products={productByCategory} />}
    </>
  );
};

CategoryPage.propTypes = {
  getProductByCategory: PropTypes.func.isRequired,
  categoryName: PropTypes.string.isRequired,
  productByCategory: PropTypes.array,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  loading: state.products.loading,
  productByCategory: state.products.productByCategory,
});

export default connect(mapStateToProps, { getProductByCategory })(CategoryPage);
