import { Button } from "@mui/material";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { getProductByCategory } from "../actions/products";
import LoadingBar from "../components/layouts/LoadingBar";
import ProductGrid from "../components/layouts/ProductGrid";
import SectionHeader from "../components/layouts/SectionHeader";

const CategoryPage = ({
  categoryName,
  getProductByCategory,
  productByCategory,
  loading,
}) => {
  useEffect(() => {
    getProductByCategory(categoryName);
  }, [getProductByCategory, categoryName]);

  return (
    <>
      <SectionHeader heading={categoryName} />

      {loading && <LoadingBar />}

      {productByCategory && <ProductGrid products={productByCategory} />}

      <Button
        component={RouterLink}
        to={"/"}
        variant='contained'
        sx={{
          position: "fixed",
          bottom: "1rem",
          right: "2rem",
        }}>
        Back To Home
      </Button>
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
