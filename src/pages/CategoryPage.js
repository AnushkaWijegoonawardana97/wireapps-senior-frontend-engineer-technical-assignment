import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProductByCategory } from "../actions/products";
import ProductGrid from "../components/layouts/ProductGrid";
import SectionHeader from "../components/layouts/SectionHeader";

const CategoryPage = ({
  categoryName,
  getProductByCategory,
  productByCategory,
}) => {
  useEffect(() => {
    console.log("categoryName", categoryName);
    categoryName && getProductByCategory(categoryName);
  });

  return (
    <>
      <SectionHeader heading={categoryName} />
      <ProductGrid products={productByCategory} />
    </>
  );
};

CategoryPage.propTypes = {
  getProductByCategory: PropTypes.func.isRequired,
  categoryName: PropTypes.string.isRequired,
  productByCategory: PropTypes.array,
};

const mapStateToProps = (state) => ({
  loading: state.products.loading,
  productByCategory: state.products.productByCategory,
});

export default connect(mapStateToProps, { getProductByCategory })(CategoryPage);
